import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { APIResponse } from '../types';

export const success = <T>(data: T, message?: string): APIGatewayProxyResult => {
  const response: APIResponse<T> = {
    success: true,
    data,
    message
  };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(response)
  };
};

export const error = (statusCode: number, message: string, error?: string): APIGatewayProxyResult => {
  const response: APIResponse = {
    success: false,
    message,
    error
  };

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(response)
  };
};

export const parseBody = <T>(event: APIGatewayProxyEvent): T | null => {
  try {
    return event.body ? JSON.parse(event.body) : null;
  } catch (err) {
    return null;
  }
};

export const getPathParameter = (event: APIGatewayProxyEvent, param: string): string | null => {
  return event.pathParameters?.[param] || null;
};

export const getQueryParameter = (event: APIGatewayProxyEvent, param: string): string | null => {
  return event.queryStringParameters?.[param] || null;
};

export const getHeader = (event: APIGatewayProxyEvent, header: string): string | null => {
  return event.headers?.[header] || event.headers?.[header.toLowerCase()] || null;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; message?: string } => {
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters long' };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { valid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { valid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { valid: false, message: 'Password must contain at least one number' };
  }
  
  return { valid: true };
};
