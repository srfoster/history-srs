import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { success, error, parseBody, getPathParameter, getHeader } from '../utils/response';
import { verifyToken, extractTokenFromHeader } from '../utils/auth';
import { dbService } from '../services/database';

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.BUCKET_NAME || 'one-backend-dev-files';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const appId = getPathParameter(event, 'appId');
  const action = getPathParameter(event, 'action');
  const method = event.httpMethod;

  if (!appId || !action) {
    return error(400, 'appId and action are required');
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

    switch (action) {
      case 'upload-url':
        if (method === 'POST') {
          return await getUploadUrl(event, appId, payload.userId);
        }
        break;
        
      case 'download-url':
        if (method === 'POST') {
          return await getDownloadUrl(event, appId, payload.userId);
        }
        break;
        
      case 'delete':
        if (method === 'DELETE') {
          return await deleteFile(event, appId, payload.userId);
        }
        break;
        
      case 'list':
        if (method === 'GET') {
          return await listFiles(event, appId, payload.userId);
        }
        break;
        
      default:
        return error(404, 'Endpoint not found');
    }
    
    return error(405, 'Method not allowed');
  } catch (err) {
    console.error('Files handler error:', err);
    return error(500, 'Internal server error');
  }
};

const getUploadUrl = async (
  event: APIGatewayProxyEvent,
  appId: string,
  userId: string
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<{
    fileName: string;
    fileType: string;
    fileSize?: number;
    metadata?: Record<string, string>;
  }>(event);
  
  if (!body || !body.fileName || !body.fileType) {
    return error(400, 'fileName and fileType are required');
  }
  
  try {
    const fileId = uuidv4();
    const fileExtension = body.fileName.split('.').pop();
    const key = `${appId}/${userId}/${fileId}.${fileExtension}`;
    
    // Generate presigned URL for upload
    const params = {
      Bucket: BUCKET_NAME,
      Key: key,
      Expires: 300, // 5 minutes
      ContentType: body.fileType,
      Metadata: {
        userId,
        appId,
        originalName: body.fileName,
        ...body.metadata
      }
    };
    
    const uploadUrl = s3.getSignedUrl('putObject', params);
    
    // Log the file upload request
    await dbService.createAuditLog({
      appId,
      userId,
      action: 'FILE_UPLOAD_REQUEST',
      resourceType: 'FILE',
      resourceId: fileId,
      changes: {
        fileName: body.fileName,
        fileType: body.fileType,
        fileSize: body.fileSize
      }
    });
    
    return success({
      uploadUrl,
      fileId,
      key,
      expiresIn: 300
    });
  } catch (err) {
    console.error('Get upload URL error:', err);
    return error(500, 'Failed to generate upload URL');
  }
};

const getDownloadUrl = async (
  event: APIGatewayProxyEvent,
  appId: string,
  userId: string
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<{ key: string; expiresIn?: number }>(event);
  
  if (!body || !body.key) {
    return error(400, 'File key is required');
  }
  
  try {
    // Verify the file belongs to the user or app
    if (!body.key.startsWith(`${appId}/`)) {
      return error(403, 'Access denied');
    }
    
    // Check if file exists
    try {
      await s3.headObject({
        Bucket: BUCKET_NAME,
        Key: body.key
      }).promise();
    } catch (err: any) {
      if (err.code === 'NotFound') {
        return error(404, 'File not found');
      }
      throw err;
    }
    
    const params = {
      Bucket: BUCKET_NAME,
      Key: body.key,
      Expires: body.expiresIn || 3600 // 1 hour default
    };
    
    const downloadUrl = s3.getSignedUrl('getObject', params);
    
    // Log the file download request
    await dbService.createAuditLog({
      appId,
      userId,
      action: 'FILE_DOWNLOAD_REQUEST',
      resourceType: 'FILE',
      resourceId: body.key,
      changes: { key: body.key }
    });
    
    return success({
      downloadUrl,
      expiresIn: params.Expires
    });
  } catch (err) {
    console.error('Get download URL error:', err);
    return error(500, 'Failed to generate download URL');
  }
};

const deleteFile = async (
  event: APIGatewayProxyEvent,
  appId: string,
  userId: string
): Promise<APIGatewayProxyResult> => {
  const body = parseBody<{ key: string }>(event);
  
  if (!body || !body.key) {
    return error(400, 'File key is required');
  }
  
  try {
    // Verify the file belongs to the user or app
    if (!body.key.startsWith(`${appId}/`)) {
      return error(403, 'Access denied');
    }
    
    // Check if file exists
    try {
      await s3.headObject({
        Bucket: BUCKET_NAME,
        Key: body.key
      }).promise();
    } catch (err: any) {
      if (err.code === 'NotFound') {
        return error(404, 'File not found');
      }
      throw err;
    }
    
    // Delete the file
    await s3.deleteObject({
      Bucket: BUCKET_NAME,
      Key: body.key
    }).promise();
    
    // Log the file deletion
    await dbService.createAuditLog({
      appId,
      userId,
      action: 'FILE_DELETE',
      resourceType: 'FILE',
      resourceId: body.key,
      changes: { key: body.key }
    });
    
    return success(null, 'File deleted successfully');
  } catch (err) {
    console.error('Delete file error:', err);
    return error(500, 'Failed to delete file');
  }
};

const listFiles = async (
  event: APIGatewayProxyEvent,
  appId: string,
  userId: string
): Promise<APIGatewayProxyResult> => {
  try {
    const prefix = `${appId}/${userId}/`;
    
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: prefix,
      MaxKeys: 1000
    };
    
    const result = await s3.listObjectsV2(params).promise();
    
    const files = result.Contents?.map(file => ({
      key: file.Key,
      size: file.Size,
      lastModified: file.LastModified,
      etag: file.ETag
    })) || [];
    
    return success({
      files,
      count: files.length,
      isTruncated: result.IsTruncated
    });
  } catch (err) {
    console.error('List files error:', err);
    return error(500, 'Failed to list files');
  }
};
