import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { User, DataRecord, AppConfig, AuditLog, QueryOptions } from '../types';

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_PREFIX = process.env.DYNAMODB_TABLE_PREFIX || 'one-backend-dev';

export class DatabaseService {
  private getTableName(suffix: string): string {
    return `${TABLE_PREFIX}-${suffix}`;
  }

  // User operations
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const user: User = {
      ...userData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await dynamodb.put({
      TableName: this.getTableName('users'),
      Item: user,
      ConditionExpression: 'attribute_not_exists(email)'
    }).promise();

    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    const result = await dynamodb.get({
      TableName: this.getTableName('users'),
      Key: { id }
    }).promise();

    return result.Item as User || null;
  }

  async getUserByEmail(email: string, appId: string): Promise<User | null> {
    const result = await dynamodb.query({
      TableName: this.getTableName('users'),
      IndexName: 'EmailIndex',
      KeyConditionExpression: 'email = :email',
      FilterExpression: 'appId = :appId',
      ExpressionAttributeValues: {
        ':email': email,
        ':appId': appId
      }
    }).promise();

    return result.Items?.[0] as User || null;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const updateExpression = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};

    Object.keys(updates).forEach((key, index) => {
      if (key !== 'id') {
        const attrName = `#attr${index}`;
        const attrValue = `:val${index}`;
        updateExpression.push(`${attrName} = ${attrValue}`);
        expressionAttributeNames[attrName] = key;
        expressionAttributeValues[attrValue] = updates[key as keyof User];
      }
    });

    expressionAttributeNames['#updatedAt'] = 'updatedAt';
    expressionAttributeValues[':updatedAt'] = new Date().toISOString();
    updateExpression.push('#updatedAt = :updatedAt');

    const result = await dynamodb.update({
      TableName: this.getTableName('users'),
      Key: { id },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    }).promise();

    return result.Attributes as User || null;
  }

  // Data operations
  async createDataRecord(data: Omit<DataRecord, 'id' | 'createdAt' | 'updatedAt'>): Promise<DataRecord> {
    const record: DataRecord = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await dynamodb.put({
      TableName: this.getTableName('data'),
      Item: record
    }).promise();

    return record;
  }

  async getDataRecord(id: string): Promise<DataRecord | null> {
    const result = await dynamodb.get({
      TableName: this.getTableName('data'),
      Key: { id }
    }).promise();

    return result.Item as DataRecord || null;
  }

  async getDataRecords(appId: string, resourceType: string, options: QueryOptions = {}): Promise<{
    items: DataRecord[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      hasMore: boolean;
    };
  }> {
    const { page = 1, limit = 20 } = options;
    const startKey = page > 1 ? { id: `page-${page}` } : undefined;

    const result = await dynamodb.query({
      TableName: this.getTableName('data'),
      IndexName: 'AppResourceIndex',
      KeyConditionExpression: 'appId = :appId AND resourceType = :resourceType',
      ExpressionAttributeValues: {
        ':appId': appId,
        ':resourceType': resourceType
      },
      Limit: limit,
      ExclusiveStartKey: startKey
    }).promise();

    return {
      items: result.Items as DataRecord[],
      pagination: {
        page,
        limit,
        total: result.Count || 0,
        hasMore: !!result.LastEvaluatedKey
      }
    };
  }

  async updateDataRecord(id: string, updates: Partial<DataRecord>): Promise<DataRecord | null> {
    const updateExpression = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};

    Object.keys(updates).forEach((key, index) => {
      if (key !== 'id') {
        const attrName = `#attr${index}`;
        const attrValue = `:val${index}`;
        updateExpression.push(`${attrName} = ${attrValue}`);
        expressionAttributeNames[attrName] = key;
        expressionAttributeValues[attrValue] = updates[key as keyof DataRecord];
      }
    });

    expressionAttributeNames['#updatedAt'] = 'updatedAt';
    expressionAttributeValues[':updatedAt'] = new Date().toISOString();
    updateExpression.push('#updatedAt = :updatedAt');

    const result = await dynamodb.update({
      TableName: this.getTableName('data'),
      Key: { id },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    }).promise();

    return result.Attributes as DataRecord || null;
  }

  async deleteDataRecord(id: string): Promise<boolean> {
    await dynamodb.delete({
      TableName: this.getTableName('data'),
      Key: { id }
    }).promise();

    return true;
  }

  // Configuration operations
  async getAppConfig(appId: string): Promise<AppConfig | null> {
    const result = await dynamodb.get({
      TableName: this.getTableName('config'),
      Key: { appId }
    }).promise();

    return result.Item as AppConfig || null;
  }

  async updateAppConfig(appId: string, config: Partial<AppConfig>): Promise<AppConfig> {
    const timestamp = new Date().toISOString();
    const item: AppConfig = {
      appId,
      name: config.name || '',
      settings: config.settings || {},
      allowedOrigins: config.allowedOrigins || [],
      features: config.features || {
        auth: true,
        fileUploads: true,
        realtime: true,
        audit: true
      },
      apiKeys: config.apiKeys || [],
      createdAt: config.createdAt || timestamp,
      updatedAt: timestamp
    };

    await dynamodb.put({
      TableName: this.getTableName('config'),
      Item: item
    }).promise();

    return item;
  }

  // Audit operations
  async createAuditLog(audit: Omit<AuditLog, 'id' | 'timestamp'>): Promise<AuditLog> {
    const log: AuditLog = {
      ...audit,
      id: uuidv4(),
      timestamp: Date.now()
    };

    await dynamodb.put({
      TableName: this.getTableName('audit'),
      Item: log
    }).promise();

    return log;
  }

  async getAuditLogs(appId: string, options: QueryOptions = {}): Promise<AuditLog[]> {
    const { limit = 100 } = options;

    const result = await dynamodb.query({
      TableName: this.getTableName('audit'),
      IndexName: 'AppTimestampIndex',
      KeyConditionExpression: 'appId = :appId',
      ExpressionAttributeValues: {
        ':appId': appId
      },
      ScanIndexForward: false, // Sort by timestamp descending
      Limit: limit
    }).promise();

    return result.Items as AuditLog[];
  }
}

export const dbService = new DatabaseService();
