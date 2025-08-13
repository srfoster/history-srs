// Example: Using the One Backend from a React frontend

class OneBackendClient {
  constructor(apiUrl, appId) {
    this.apiUrl = apiUrl;
    this.appId = appId;
    this.token = localStorage.getItem('auth_token');
  }

  // Authentication methods
  async login(email, password) {
    const response = await fetch(`${this.apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, appId: this.appId })
    });
    
    const data = await response.json();
    if (data.success && data.data.token) {
      this.token = data.data.token;
      localStorage.setItem('auth_token', this.token);
    }
    return data;
  }

  async register(email, password, firstName, lastName) {
    const response = await fetch(`${this.apiUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password, 
        firstName, 
        lastName, 
        appId: this.appId 
      })
    });
    
    const data = await response.json();
    if (data.success && data.data.token) {
      this.token = data.data.token;
      localStorage.setItem('auth_token', this.token);
    }
    return data;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // Generic CRUD methods
  async get(resource, id = null, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = id 
      ? `${this.apiUrl}/api/${this.appId}/${resource}/${id}?${queryString}`
      : `${this.apiUrl}/api/${this.appId}/${resource}?${queryString}`;
    
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${this.token}` }
    });
    
    return response.json();
  }

  async create(resource, data, permissions = null) {
    const response = await fetch(`${this.apiUrl}/api/${this.appId}/${resource}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data, permissions })
    });
    
    return response.json();
  }

  async update(resource, id, data, permissions = null) {
    const response = await fetch(`${this.apiUrl}/api/${this.appId}/${resource}/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data, permissions })
    });
    
    return response.json();
  }

  async delete(resource, id) {
    const response = await fetch(`${this.apiUrl}/api/${this.appId}/${resource}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${this.token}` }
    });
    
    return response.json();
  }

  // File operations
  async getUploadUrl(fileName, fileType, metadata = {}) {
    const response = await fetch(`${this.apiUrl}/files/${this.appId}/upload-url`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fileName, fileType, metadata })
    });
    
    return response.json();
  }

  async uploadFile(file, metadata = {}) {
    // Get upload URL
    const urlResponse = await this.getUploadUrl(file.name, file.type, metadata);
    if (!urlResponse.success) {
      throw new Error(urlResponse.message);
    }

    // Upload to S3
    const uploadResponse = await fetch(urlResponse.data.uploadUrl, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': file.type }
    });

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload file');
    }

    return urlResponse.data;
  }

  async getDownloadUrl(fileKey, expiresIn = 3600) {
    const response = await fetch(`${this.apiUrl}/files/${this.appId}/download-url`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: fileKey, expiresIn })
    });
    
    return response.json();
  }

  // WebSocket connection
  connectWebSocket() {
    const wsUrl = `${this.apiUrl.replace('https://', 'wss://').replace('http://', 'ws://')}?appId=${this.appId}&token=${this.token}`;
    this.ws = new WebSocket(wsUrl);
    
    this.ws.onopen = () => {
      console.log('WebSocket connected');
    };
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.onWebSocketMessage(data);
    };
    
    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      // Implement reconnection logic
    };
    
    return this.ws;
  }

  onWebSocketMessage(data) {
    // Override this method to handle incoming messages
    console.log('WebSocket message:', data);
  }

  sendWebSocketMessage(type, data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ type, data }));
    }
  }
}

// Usage examples:

// Initialize client
const client = new OneBackendClient('https://your-api-gateway-url', 'my-app-id');

// Authentication
await client.login('user@example.com', 'password');

// Create a blog post
const post = await client.create('posts', {
  title: 'My First Post',
  content: 'This is the content of my post',
  tags: ['tech', 'programming']
}, {
  read: ['public'], // Anyone can read
  write: ['user123'] // Only specific user can edit
});

// Get all posts with pagination
const posts = await client.get('posts', null, { page: 1, limit: 10 });

// Update a post
await client.update('posts', post.data.id, {
  title: 'Updated Post Title'
});

// Upload a file
const fileInput = document.getElementById('file-input');
const file = fileInput.files[0];
const uploadResult = await client.uploadFile(file, { category: 'avatar' });

// Get download URL for a file
const downloadUrl = await client.getDownloadUrl(uploadResult.key);

// Connect to WebSocket for real-time updates
client.connectWebSocket();
client.onWebSocketMessage = (data) => {
  if (data.type === 'broadcast') {
    console.log('Received broadcast:', data.data);
    // Update UI with real-time data
  }
};

export default OneBackendClient;
