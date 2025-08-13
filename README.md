# One Backend

A generalized serverless backend for multiple frontend applications using AWS Lambda and DynamoDB.

## Features

- 🔐 **Multi-tenant Authentication** - JWT-based auth with role management
- 📊 **Generic CRUD Operations** - Flexible data operations for any schema
- 📁 **File Storage** - S3 integration with presigned URLs
- ⚡ **Real-time Updates** - WebSocket support for live updates
- 🔍 **Audit Logging** - Complete activity tracking
- ⚙️ **Configuration Management** - Per-app settings and features
- 🛡️ **Security** - Permission-based access control

## Architecture

### Multi-tenancy
Each frontend app is isolated by a unique `appId`. All data and operations are scoped to the app level, ensuring complete separation.

### Database Schema
- **Users Table**: User accounts with app-specific isolation
- **Data Table**: Generic data storage with flexible schema
- **Config Table**: App-specific configuration
- **Audit Table**: Activity and change logging

### API Endpoints

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/refresh` - Token refresh
- `POST /auth/logout` - User logout

#### Generic CRUD Operations
- `GET /api/{appId}/{resource}` - List records
- `GET /api/{appId}/{resource}/{id}` - Get single record
- `POST /api/{appId}/{resource}` - Create record
- `PUT /api/{appId}/{resource}/{id}` - Update record
- `DELETE /api/{appId}/{resource}/{id}` - Delete record

#### File Operations
- `POST /files/{appId}/upload-url` - Get upload URL
- `POST /files/{appId}/download-url` - Get download URL
- `DELETE /files/{appId}/delete` - Delete file
- `GET /files/{appId}/list` - List files

#### Configuration
- `GET /config/{appId}` - Get app configuration
- `PUT /config/{appId}` - Update app configuration

#### WebSocket
- Real-time messaging and updates
- Connection management
- Broadcasting to app users

## Getting Started

### Prerequisites
- Node.js 18+
- AWS CLI configured
- Serverless Framework

### Installation

```bash
npm install
```

### Development

Start local development server:
```bash
npm run dev
```

Build the project:
```bash
npm run build
```

### Deployment

Deploy to development:
```bash
npm run deploy:dev
```

Deploy to production:
```bash
npm run deploy:prod
```

### Environment Variables

Set these environment variables before deployment:

```bash
export JWT_SECRET="your-secret-key"
```

## Usage Examples

### Frontend Integration

```javascript
// Authentication
const response = await fetch('/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password',
    appId: 'my-app'
  })
});

// CRUD Operations
const data = await fetch('/api/my-app/posts', {
  headers: { 'Authorization': `Bearer ${token}` }
});

// File Upload
const uploadUrl = await fetch('/files/my-app/upload-url', {
  method: 'POST',
  headers: { 
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify({
    fileName: 'image.jpg',
    fileType: 'image/jpeg'
  })
});
```

### Data Permissions

Records support flexible permission management:

```javascript
{
  "data": { "title": "My Post", "content": "..." },
  "permissions": {
    "read": ["user123", "role:admin"],
    "write": ["user123"]
  }
}
```

## Project Structure

```
src/
├── handlers/          # Lambda function handlers
│   ├── auth.ts       # Authentication endpoints
│   ├── crud.ts       # Generic CRUD operations
│   ├── files.ts      # File storage operations
│   ├── websocket.ts  # WebSocket handling
│   └── config.ts     # Configuration management
├── services/         # Business logic
│   └── database.ts   # DynamoDB operations
├── types/           # TypeScript definitions
│   └── index.ts     # Shared types
└── utils/           # Utility functions
    ├── auth.ts      # JWT and password utils
    └── response.ts  # API response helpers
```

## Security Features

- JWT-based authentication with configurable expiration
- Password hashing with bcrypt
- Permission-based access control
- App-level data isolation
- Audit logging for all operations
- CORS configuration
- Input validation and sanitization

## Monitoring and Logging

All operations are logged with:
- User identification
- Action type and timestamp
- Resource affected
- Changes made
- IP address and user agent

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License
