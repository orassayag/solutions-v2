# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Choose which version you want to run:
   - `normal-state/` - Standard REST API implementation
   - `normal-state-websocket/` - WebSocket-enabled implementation

### Standard Version (normal-state)

#### Server Setup
```bash
cd normal-state/server
npm install
npm start
```

The server will start on port 3000 (configurable in `config/config.development.json`).

#### Client Setup
```bash
cd normal-state/client
npm install
npm start
```

The client will start on port 3001 and automatically open in your browser.

### WebSocket Version (normal-state-websocket)

#### Server Setup
```bash
cd normal-state-websocket/server
npm install
npm start
```

The server will start on the configured port (default: 3000).

#### Client Setup
```bash
cd normal-state-websocket/client
npm install
npm start
```

The client will start on port 3001 with WebSocket support.

## Configuration

### Server Configuration

Edit configuration files in `server/config/`:
- `config.development.json` - Development settings
- `config.production.json` - Production settings
- `config.test.json` - Test environment settings

**Configuration Options:**
```json
{
  "PORT": 3000,
  "PHOTOS_API_URL": "https://jsonplaceholder.typicode.com/photos",
  "PHOTOS_JSON_PATH": "./datafile/photos.json",
  "CACHE_TTL": 3600
}
```

### Client Configuration

Edit settings in `client/src/settings/`:
- `settings.development.json` - Development API endpoint
- `settings.production.json` - Production API endpoint

**Configuration Options:**
```json
{
  "API_URL": "http://localhost:3000"
}
```

## Available API Endpoints

### Get All Photos
```
GET /api/photos
GET /api/photos?count=10
```

**Parameters:**
- `count` (optional) - Number of photos to return

**Response:**
```json
[
  {
    "id": 1,
    "albumId": 1,
    "title": "Photo title",
    "url": "https://example.com/photo.jpg",
    "thumbnailUrl": "https://example.com/thumbnail.jpg"
  }
]
```

### Get Photo by ID
```
GET /api/photos/:id
```

**Parameters:**
- `id` (required) - Photo ID

**Response:**
```json
{
  "id": 1,
  "albumId": 1,
  "title": "Photo title",
  "url": "https://example.com/photo.jpg",
  "thumbnailUrl": "https://example.com/thumbnail.jpg"
}
```

## Features

### Caching
The server implements caching with a configurable TTL (Time To Live):
- Default: 1 hour (3600 seconds)
- Cached data: Photo listings from API/file
- Cache key: 'photos'
- Implementation: `utils/CacheService.js`

### Data Sources
Two data sources are supported:
1. **External API**: JSONPlaceholder API (default)
2. **Local File**: JSON file in `datafile/photos.json`

To switch data sources, modify `routes/photos.js`:
```javascript
response = await coreGetPhotosAPI(count);  // External API
response = await coreGetPhotosFile(count); // Local file
```

### CORS Support
CORS is enabled for cross-origin requests. Configuration in `middleware/cors.js`.

### Error Handling
Global error handling middleware catches and logs all errors. See `middleware/error.js`.

### Logging
Winston logger is used for server logging:
- Info level: Server startup, connections
- Error level: Exceptions and errors

## WebSocket Features (websocket version only)

The websocket version includes Socket.io for real-time communication:

**Server Side:**
```javascript
io.on('connection', socket => {
  // Handle connection
  socket.on('disconnect', () => {
    // Handle disconnection
  });
});
```

**Client Side:**
```javascript
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
```

## Development

### Project Structure

```
solutions-v2/
├── normal-state/
│   ├── client/
│   │   ├── config/          # Webpack and build config
│   │   ├── scripts/         # Build scripts
│   │   ├── src/
│   │   │   ├── api/         # API client
│   │   │   ├── components/  # UI components
│   │   │   ├── containers/  # Page containers
│   │   │   ├── hoc/         # Higher-order components
│   │   │   ├── settings/    # Client config
│   │   │   └── utils/       # Utilities
│   │   └── package.json
│   └── server/
│       ├── api/             # External API calls
│       ├── config/          # Server config
│       ├── core/            # Business logic
│       ├── datafile/        # Local data files
│       ├── middleware/      # Express middleware
│       ├── models/          # Data models
│       ├── routes/          # API routes
│       ├── startup/         # App initialization
│       ├── utils/           # Utilities
│       └── package.json
└── normal-state-websocket/
    ├── client/              # Same structure as normal-state
    └── server/
        └── startup/
            └── websocket.js # WebSocket config
```

### Building for Production

**Client:**
```bash
cd normal-state/client  # or normal-state-websocket/client
npm run build
```

This creates an optimized production build in the `build/` directory.

**Server:**
Set environment variable:
```bash
export NODE_ENV=production
npm start
```

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint  # If lint script is configured
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change port in config files
   - Kill process using the port: `lsof -ti:3000 | xargs kill -9`

2. **CORS errors:**
   - Verify client URL matches CORS whitelist
   - Check `middleware/cors.js` configuration

3. **Cache not working:**
   - Verify cache TTL in configuration
   - Check `CacheService` implementation
   - Clear cache manually if needed

4. **WebSocket connection fails:**
   - Ensure server is running before client
   - Check firewall settings
   - Verify Socket.io versions match

5. **Photos not loading:**
   - Check API_URL in client settings
   - Verify server is running
   - Check network tab in browser DevTools
   - Review server logs

## Environment Variables

Optional environment variables:
```bash
NODE_ENV=development|production|test
PORT=3000
```

## Notes

- Both client and server must be running for the application to work
- The client proxies API requests to the server
- Cache improves performance by reducing external API calls
- WebSocket version provides foundation for real-time features
- All configuration is environment-specific

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
