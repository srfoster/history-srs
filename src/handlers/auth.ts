import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { success, error, parseBody, getPathParameter } from '../utils/response';
import { validateEmail, validatePassword } from '../utils/response';
import { generateToken, hashPassword, comparePassword } from '../utils/auth';
import { dbService } from '../services/database';
import { AuthRequest, RegisterRequest, User } from '../types';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const action = getPathParameter(event, 'action');
  const method = event.httpMethod;

  try {
    switch (action) {
      case 'login':
        if (method === 'POST') {
          return await login(event);
        }
        break;
        
      case 'register':
        if (method === 'POST') {
          return await register(event);
        }
        break;
        
      case 'refresh':
        if (method === 'POST') {
          return await refreshToken(event);
        }
        break;
        
      case 'logout':
        if (method === 'POST') {
          return await logout(event);
        }
        break;
        
      default:
        return error(404, 'Endpoint not found');
    }
    
    return error(405, 'Method not allowed');
  } catch (err) {
    console.error('Auth handler error:', err);
    return error(500, 'Internal server error');
  }
};

const login = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = parseBody<AuthRequest>(event);
  
  if (!body) {
    return error(400, 'Invalid request body');
  }
  
  const { email, password, appId } = body;
  
  if (!email || !password || !appId) {
    return error(400, 'Email, password, and appId are required');
  }
  
  if (!validateEmail(email)) {
    return error(400, 'Invalid email format');
  }
  
  try {
    const user = await dbService.getUserByEmail(email, appId);
    
    if (!user) {
      return error(401, 'Invalid credentials');
    }
    
    if (!user.isActive) {
      return error(401, 'Account is disabled');
    }
    
    const isPasswordValid = await comparePassword(password, user.password);
    
    if (!isPasswordValid) {
      return error(401, 'Invalid credentials');
    }
    
    // Update last login time
    await dbService.updateUser(user.id, {
      lastLoginAt: new Date().toISOString()
    });
    
    const token = generateToken(user);
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    // Log the login
    await dbService.createAuditLog({
      appId,
      userId: user.id,
      action: 'LOGIN',
      resourceType: 'USER',
      resourceId: user.id,
      userAgent: event.headers?.['User-Agent'],
      ipAddress: event.requestContext?.identity?.sourceIp
    });
    
    return success({
      token,
      user: userWithoutPassword
    });
  } catch (err) {
    console.error('Login error:', err);
    return error(500, 'Login failed');
  }
};

const register = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = parseBody<RegisterRequest>(event);
  
  if (!body) {
    return error(400, 'Invalid request body');
  }
  
  const { email, password, appId, firstName, lastName } = body;
  
  if (!email || !password || !appId) {
    return error(400, 'Email, password, and appId are required');
  }
  
  if (!validateEmail(email)) {
    return error(400, 'Invalid email format');
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return error(400, passwordValidation.message || 'Invalid password');
  }
  
  try {
    // Check if user already exists
    const existingUser = await dbService.getUserByEmail(email, appId);
    
    if (existingUser) {
      return error(409, 'User already exists with this email');
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const user = await dbService.createUser({
      appId,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      roles: ['user'], // Default role
      isActive: true
    });
    
    const token = generateToken(user);
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    // Log the registration
    await dbService.createAuditLog({
      appId,
      userId: user.id,
      action: 'REGISTER',
      resourceType: 'USER',
      resourceId: user.id,
      userAgent: event.headers?.['User-Agent'],
      ipAddress: event.requestContext?.identity?.sourceIp
    });
    
    return success({
      token,
      user: userWithoutPassword
    }, 'User registered successfully');
  } catch (err: any) {
    console.error('Registration error:', err);
    if (err.code === 'ConditionalCheckFailedException') {
      return error(409, 'User already exists with this email');
    }
    return error(500, 'Registration failed');
  }
};

const refreshToken = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // For now, return a simple success - in production you'd implement proper refresh token logic
  return success({ message: 'Refresh token endpoint - implement as needed' });
};

const logout = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // For JWT, logout is typically handled on the client side by removing the token
  // But we can log the logout action if needed
  return success({ message: 'Logged out successfully' });
};
