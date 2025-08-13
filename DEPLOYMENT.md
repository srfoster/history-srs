# Deployment Guide

## Prerequisites

1. **AWS Account** with programmatic access
2. **AWS CLI** configured with your credentials
3. **Node.js** 18+ installed
4. **Serverless Framework** installed globally

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Set required environment variables:**
   ```bash
   export JWT_SECRET="your-super-secret-jwt-key-here"
   ```

## Deployment

### Development Environment
```bash
npm run deploy:dev
```

### Production Environment
```bash
npm run deploy:prod
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `JWT_SECRET` | Secret key for JWT token signing | Yes |
| `AWS_PROFILE` | AWS CLI profile to use | No |
| `AWS_REGION` | AWS region for deployment | No (defaults to us-east-1) |

## Post-Deployment

After deployment, you'll get:
- **API Gateway URL** for REST endpoints
- **WebSocket URL** for real-time connections
- **S3 Bucket** for file storage
- **DynamoDB Tables** for data storage

## Testing the Deployment

1. **Test authentication:**
   ```bash
   curl -X POST https://your-api-url/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "TestPassword123",
       "appId": "test-app",
       "firstName": "Test",
       "lastName": "User"
     }'
   ```

2. **Test CRUD operations:**
   ```bash
   # Login first to get token
   TOKEN=$(curl -X POST https://your-api-url/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "TestPassword123",
       "appId": "test-app"
     }' | jq -r '.data.token')

   # Create a record
   curl -X POST https://your-api-url/api/test-app/posts \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "data": {
         "title": "My First Post",
         "content": "This is a test post"
       }
     }'
   ```

## Monitoring

- **CloudWatch Logs** for function logs
- **DynamoDB Console** for data inspection
- **API Gateway Console** for endpoint monitoring

## Cleanup

To remove all resources:
```bash
npm run remove
```

## Troubleshooting

### Common Issues

1. **Permission Errors**: Ensure your AWS user has sufficient IAM permissions
2. **JWT Secret**: Make sure JWT_SECRET is set before deployment
3. **Region Conflicts**: Ensure all resources are in the same AWS region

### Useful Commands

```bash
# View logs
serverless logs -f auth

# Invoke function locally
serverless invoke local -f auth

# Deploy only one function
serverless deploy function -f auth
```
