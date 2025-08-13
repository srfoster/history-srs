import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as AWS from 'aws-sdk';

const apiGateway = new AWS.ApiGatewayManagementApi({
  endpoint: process.env.WEBSOCKET_ENDPOINT
});

// Simple in-memory store for connections (in production, use DynamoDB)
const connections = new Map<string, {
  connectionId: string;
  appId: string;
  userId: string;
  connectedAt: number;
}>();

export const handler = async (event: any): Promise<APIGatewayProxyResult> => {
  const { eventType, connectionId } = event.requestContext;
  
  try {
    switch (eventType) {
      case 'CONNECT':
        return await handleConnect(event);
        
      case 'DISCONNECT':
        return await handleDisconnect(event);
        
      case 'MESSAGE':
        return await handleMessage(event);
        
      default:
        return {
          statusCode: 200,
          body: 'OK'
        };
    }
  } catch (err) {
    console.error('WebSocket handler error:', err);
    return {
      statusCode: 500,
      body: 'Internal server error'
    };
  }
};

const handleConnect = async (event: any): Promise<APIGatewayProxyResult> => {
  const { connectionId } = event.requestContext;
  const { appId, token } = event.queryStringParameters || {};
  
  if (!appId || !token) {
    return {
      statusCode: 401,
      body: 'appId and token are required'
    };
  }
  
  // In a real implementation, you'd verify the token and get user info
  // For now, we'll store basic connection info
  connections.set(connectionId, {
    connectionId,
    appId,
    userId: 'user-from-token', // Extract from JWT
    connectedAt: Date.now()
  });
  
  console.log(`WebSocket connected: ${connectionId} for app: ${appId}`);
  
  return {
    statusCode: 200,
    body: 'Connected'
  };
};

const handleDisconnect = async (event: any): Promise<APIGatewayProxyResult> => {
  const { connectionId } = event.requestContext;
  
  connections.delete(connectionId);
  
  console.log(`WebSocket disconnected: ${connectionId}`);
  
  return {
    statusCode: 200,
    body: 'Disconnected'
  };
};

const handleMessage = async (event: any): Promise<APIGatewayProxyResult> => {
  const { connectionId } = event.requestContext;
  const body = JSON.parse(event.body || '{}');
  
  const connection = connections.get(connectionId);
  if (!connection) {
    return {
      statusCode: 404,
      body: 'Connection not found'
    };
  }
  
  // Handle different message types
  switch (body.type) {
    case 'ping':
      await sendToConnection(connectionId, { type: 'pong', timestamp: Date.now() });
      break;
      
    case 'subscribe':
      // Handle subscription to specific channels/topics
      await sendToConnection(connectionId, { 
        type: 'subscribed', 
        channel: body.channel 
      });
      break;
      
    case 'broadcast':
      // Broadcast message to all connections in the same app
      await broadcastToApp(connection.appId, body.data, connectionId);
      break;
      
    default:
      await sendToConnection(connectionId, { 
        type: 'error', 
        message: 'Unknown message type' 
      });
  }
  
  return {
    statusCode: 200,
    body: 'Message processed'
  };
};

const sendToConnection = async (connectionId: string, data: any): Promise<void> => {
  try {
    await apiGateway.postToConnection({
      ConnectionId: connectionId,
      Data: JSON.stringify(data)
    }).promise();
  } catch (err: any) {
    if (err.statusCode === 410) {
      // Connection is stale, remove it
      connections.delete(connectionId);
    }
    console.error('Send to connection error:', err);
  }
};

const broadcastToApp = async (appId: string, data: any, excludeConnectionId?: string): Promise<void> => {
  const appConnections = Array.from(connections.values())
    .filter(conn => conn.appId === appId && conn.connectionId !== excludeConnectionId);
  
  const promises = appConnections.map(conn => 
    sendToConnection(conn.connectionId, {
      type: 'broadcast',
      data,
      from: excludeConnectionId
    })
  );
  
  await Promise.allSettled(promises);
};

// Export utility function for other handlers to send WebSocket messages
export const sendWebSocketMessage = async (appId: string, data: any): Promise<void> => {
  await broadcastToApp(appId, data);
};
