import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { success, error, parseBody, getPathParameter, getHeader } from '../utils/response';
import { verifyToken, extractTokenFromHeader } from '../utils/auth';
import { dbService } from '../services/database';
import { AppConfig } from '../types';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const appId = getPathParameter(event, 'appId');
  const method = event.httpMethod;

  if (!appId) {
    return error(400, 'appId is required');
  }

  try {
    // Authenticate user
    const authHeader = getHeader(event, 'Authorization');
    const token = extractTokenFromHeader(authHeader);
    
    if (!token) {
      return error(401, 'Authentication token required');
    }
    
    const payload = verifyToken(token);
    
    if (!payload || payload.appId !== appId) {
      return error(401, 'Invalid or expired token');
    }

    // Check if user has admin role for configuration access
    if (!payload.roles.includes('admin')) {
      return error(403, 'Admin access required');
    }

    switch (method) {
      case 'GET':
        return await getConfig(appId);
        
      case 'PUT':
        return await updateConfig(event, appId, payload.userId);
        
      default:
        return error(405, 'Method not allowed');
    }
  } catch (err) {
    console.error('Config handler error:', err);
    return error(500, 'Internal server error');
  }
};

const getConfig = async (appId: string): Promise<APIGatewayProxyResult> => {
  try {
    const config = await dbService.getAppConfig(appId);
    
    if (!config) {
      // Return default configuration if none exists
      const defaultConfig: AppConfig = {
        appId,
        name: 'New App',
        settings: {},
        allowedOrigins: ['*'],
        features: {
          auth: true,
          fileUploads: true,
          realtime: true,
          audit: true
        },
        apiKeys: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      return success(defaultConfig);
    }
    
    return success(config);
  } catch (err) {
    console.error('Get config error:', err);
    return error(500, 'Failed to retrieve configuration');
  }
};

const updateConfig = async (
  event: APIGatewayProxyEvent,
  appId: string,
  userId: string
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<Partial<AppConfig>>(event);
  
  if (!body) {
    return error(400, 'Configuration data is required');
  }
  
  try {
    // Get existing config for comparison
    const existingConfig = await dbService.getAppConfig(appId);
    
    const updatedConfig = await dbService.updateAppConfig(appId, {
      ...body,
      appId // Ensure appId cannot be changed
    });
    
    // Log the configuration change
    await dbService.createAuditLog({
      appId,
      userId,
      action: 'CONFIG_UPDATE',
      resourceType: 'CONFIG',
      resourceId: appId,
      changes: {
        before: existingConfig,
        after: updatedConfig
      }
    });
    
    return success(updatedConfig, 'Configuration updated successfully');
  } catch (err) {
    console.error('Update config error:', err);
    return error(500, 'Failed to update configuration');
  }
};
