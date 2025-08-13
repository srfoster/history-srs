export interface User {
  id: string;
  appId: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface JWTPayload {
  userId: string;
  appId: string;
  email: string;
  roles: string[];
  iat: number;
  exp: number;
}

export interface AuthRequest {
  email: string;
  password: string;
  appId: string;
}

export interface RegisterRequest extends AuthRequest {
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: Omit<User, 'password'>;
  message?: string;
}

export interface DataRecord {
  id: string;
  appId: string;
  resourceType: string;
  userId: string;
  data: Record<string, any>;
  permissions: {
    read: string[];
    write: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface AppConfig {
  appId: string;
  name: string;
  settings: Record<string, any>;
  allowedOrigins: string[];
  features: {
    auth: boolean;
    fileUploads: boolean;
    realtime: boolean;
    audit: boolean;
  };
  apiKeys: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  appId: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  changes?: Record<string, any>;
  timestamp: number;
  userAgent?: string;
  ipAddress?: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}

export interface QueryOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}
