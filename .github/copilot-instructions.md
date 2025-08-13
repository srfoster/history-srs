<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# One Backend - Generalized Serverless Backend

This is a TypeScript serverless backend project using AWS Lambda and DynamoDB designed to serve multiple frontend applications with a multi-tenant architecture.

## Architecture

- **Multi-tenant**: Each app is isolated by appId
- **Authentication**: JWT-based auth with role management
- **Database**: DynamoDB with optimized table structure
- **File Storage**: S3 with presigned URLs
- **Real-time**: WebSocket support via API Gateway
- **Audit Logging**: Complete activity tracking

## Code Patterns

- Use TypeScript strict mode and proper type definitions
- Follow AWS Lambda handler patterns with APIGatewayProxyEvent/Result
- Implement proper error handling and logging
- Use DynamoDB DocumentClient for database operations
- Implement permission-based access control
- Follow REST API conventions for endpoints

## Key Components

- `/src/handlers/` - Lambda function handlers
- `/src/services/` - Business logic and database operations  
- `/src/utils/` - Utility functions for auth, validation, responses
- `/src/types/` - TypeScript type definitions
- `serverless.yml` - Infrastructure as code

## Development Guidelines

- Always verify user authentication and app access
- Log important actions for audit trails
- Use proper HTTP status codes and error messages
- Implement pagination for list operations
- Validate input data before processing
- Use environment variables for configuration
