import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { success, error, parseBody, getPathParameter, getQueryParameter, getHeader } from '../utils/response';
import { verifyToken, extractTokenFromHeader } from '../utils/auth';
import { dbService } from '../services/database';
import { DataRecord, JWTPayload, QueryOptions } from '../types';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const appId = getPathParameter(event, 'appId');
  const resource = getPathParameter(event, 'resource');
  const id = getPathParameter(event, 'id');
  const method = event.httpMethod;

  if (!appId || !resource) {
    return error(400, 'appId and resource are required');
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

    // Check if user has access to this app
    const user = await dbService.getUserById(payload.userId);
    if (!user || !user.isActive) {
      return error(401, 'User not found or inactive');
    }

    switch (method) {
      case 'GET':
        if (id) {
          return await getRecord(appId, resource, id, payload);
        } else {
          return await getRecords(event, appId, resource, payload);
        }
        
      case 'POST':
        return await createRecord(event, appId, resource, payload);
        
      case 'PUT':
        if (!id) {
          return error(400, 'Record ID required for update');
        }
        return await updateRecord(event, appId, resource, id, payload);
        
      case 'DELETE':
        if (!id) {
          return error(400, 'Record ID required for delete');
        }
        return await deleteRecord(appId, resource, id, payload);
        
      default:
        return error(405, 'Method not allowed');
    }
  } catch (err) {
    console.error('CRUD handler error:', err);
    return error(500, 'Internal server error');
  }
};

const getRecord = async (
  appId: string,
  resourceType: string,
  id: string,
  user: JWTPayload
): Promise<APIGatewayProxyResult> => {
  try {
    const record = await dbService.getDataRecord(id);
    
    if (!record) {
      return error(404, 'Record not found');
    }
    
    if (record.appId !== appId || record.resourceType !== resourceType) {
      return error(404, 'Record not found');
    }
    
    // Check read permissions
    if (!hasReadPermission(record, user)) {
      return error(403, 'Access denied');
    }
    
    return success(record);
  } catch (err) {
    console.error('Get record error:', err);
    return error(500, 'Failed to retrieve record');
  }
};

const getRecords = async (
  event: APIGatewayProxyEvent,
  appId: string,
  resourceType: string,
  user: JWTPayload
): Promise<APIGatewayProxyResult> => {
  try {
    const page = parseInt(getQueryParameter(event, 'page') || '1');
    const limit = parseInt(getQueryParameter(event, 'limit') || '20');
    const sortBy = getQueryParameter(event, 'sortBy');
    const sortOrder = getQueryParameter(event, 'sortOrder') as 'asc' | 'desc';
    
    const options: QueryOptions = {
      page: Math.max(1, page),
      limit: Math.min(100, Math.max(1, limit)),
      sortBy: sortBy || undefined,
      sortOrder: sortOrder || undefined
    };
    
    const result = await dbService.getDataRecords(appId, resourceType, options);
    
    // Filter records based on read permissions
    const filteredRecords = result.items.filter(record => hasReadPermission(record, user));
    
    return success({
      items: filteredRecords,
      pagination: {
        ...result.pagination,
        total: filteredRecords.length
      }
    });
  } catch (err) {
    console.error('Get records error:', err);
    return error(500, 'Failed to retrieve records');
  }
};

const createRecord = async (
  event: APIGatewayProxyEvent,
  appId: string,
  resourceType: string,
  user: JWTPayload
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<{ data: Record<string, any>; permissions?: any }>(event);
  
  if (!body || !body.data) {
    return error(400, 'Data is required');
  }
  
  try {
    const recordData: Omit<DataRecord, 'id' | 'createdAt' | 'updatedAt'> = {
      appId,
      resourceType,
      userId: user.userId,
      data: body.data,
      permissions: body.permissions || {
        read: [user.userId], // Default: only creator can read
        write: [user.userId] // Default: only creator can write
      }
    };
    
    const record = await dbService.createDataRecord(recordData);
    
    // Log the creation
    await dbService.createAuditLog({
      appId,
      userId: user.userId,
      action: 'CREATE',
      resourceType,
      resourceId: record.id,
      changes: { data: body.data }
    });
    
    return success(record, 'Record created successfully');
  } catch (err) {
    console.error('Create record error:', err);
    return error(500, 'Failed to create record');
  }
};

const updateRecord = async (
  event: APIGatewayProxyEvent,
  appId: string,
  resourceType: string,
  id: string,
  user: JWTPayload
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<{ data: Record<string, any>; permissions?: any }>(event);
  
  if (!body) {
    return error(400, 'Request body is required');
  }
  
  try {
    const existingRecord = await dbService.getDataRecord(id);
    
    if (!existingRecord) {
      return error(404, 'Record not found');
    }
    
    if (existingRecord.appId !== appId || existingRecord.resourceType !== resourceType) {
      return error(404, 'Record not found');
    }
    
    // Check write permissions
    if (!hasWritePermission(existingRecord, user)) {
      return error(403, 'Access denied');
    }
    
    const updates: Partial<DataRecord> = {};
    
    if (body.data) {
      updates.data = { ...existingRecord.data, ...body.data };
    }
    
    if (body.permissions) {
      updates.permissions = body.permissions;
    }
    
    const updatedRecord = await dbService.updateDataRecord(id, updates);
    
    if (!updatedRecord) {
      return error(500, 'Failed to update record');
    }
    
    // Log the update
    await dbService.createAuditLog({
      appId,
      userId: user.userId,
      action: 'UPDATE',
      resourceType,
      resourceId: id,
      changes: updates
    });
    
    return success(updatedRecord, 'Record updated successfully');
  } catch (err) {
    console.error('Update record error:', err);
    return error(500, 'Failed to update record');
  }
};

const deleteRecord = async (
  appId: string,
  resourceType: string,
  id: string,
  user: JWTPayload
): Promise<APIGatewayProxyResult> => {
  try {
    const existingRecord = await dbService.getDataRecord(id);
    
    if (!existingRecord) {
      return error(404, 'Record not found');
    }
    
    if (existingRecord.appId !== appId || existingRecord.resourceType !== resourceType) {
      return error(404, 'Record not found');
    }
    
    // Check write permissions (delete requires write permission)
    if (!hasWritePermission(existingRecord, user)) {
      return error(403, 'Access denied');
    }
    
    await dbService.deleteDataRecord(id);
    
    // Log the deletion
    await dbService.createAuditLog({
      appId,
      userId: user.userId,
      action: 'DELETE',
      resourceType,
      resourceId: id
    });
    
    return success(null, 'Record deleted successfully');
  } catch (err) {
    console.error('Delete record error:', err);
    return error(500, 'Failed to delete record');
  }
};

const hasReadPermission = (record: DataRecord, user: JWTPayload): boolean => {
  // Owner always has read permission
  if (record.userId === user.userId) {
    return true;
  }
  
  // Check if user ID is in read permissions
  if (record.permissions.read.includes(user.userId)) {
    return true;
  }
  
  // Check if any user roles are in read permissions
  return user.roles.some(role => record.permissions.read.includes(`role:${role}`));
};

const hasWritePermission = (record: DataRecord, user: JWTPayload): boolean => {
  // Owner always has write permission
  if (record.userId === user.userId) {
    return true;
  }
  
  // Check if user ID is in write permissions
  if (record.permissions.write.includes(user.userId)) {
    return true;
  }
  
  // Check if any user roles are in write permissions
  return user.roles.some(role => record.permissions.write.includes(`role:${role}`));
};
