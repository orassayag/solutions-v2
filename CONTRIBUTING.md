# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/solutions-v2/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages or logs (if applicable)
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly (both client and server)
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript (ES6+)** for both client and server
- **React.js** for the frontend
- **Node.js/Express** for the backend
- **ESLint** for code quality

Before submitting:
```bash
# Install dependencies
npm install

# For server changes
cd normal-state/server  # or normal-state-websocket/server
npm start

# For client changes
cd normal-state/client  # or normal-state-websocket/client
npm start
```

### Coding Standards

1. **Clean Code**: Write simple, readable code with clear naming
2. **Error Handling**: Use proper try-catch blocks and meaningful error messages
3. **Validation**: Validate all inputs on both client and server side
4. **Comments**: Add comments for complex logic, not obvious operations
5. **Consistency**: Follow the existing code patterns in the project

### Project Structure

When making changes, understand the structure:

**Server Side:**
- `routes/` - API endpoint definitions
- `core/` - Business logic and caching
- `models/` - Data models and parsing
- `api/` - External API and file system calls
- `middleware/` - CORS, error handling
- `utils/` - Utility functions and cache service

**Client Side:**
- `components/` - Reusable UI components
- `containers/` - Page-level components
- `api/` - API client calls
- `utils/` - Helper functions
- `hoc/` - Higher-order components

### Adding New Features

When adding new features:
1. For new API endpoints:
   - Add route handler in `routes/`
   - Add business logic in `core/`
   - Add model/parser in `models/`
   - Update API client in client's `api/`

2. For new UI components:
   - Create component in appropriate folder
   - Export from `index.js`
   - Follow existing component patterns

3. For WebSocket features (websocket version):
   - Update `startup/websocket.js`
   - Handle events on both client and server

### Testing

Before submitting:
1. Test the normal-state version:
   ```bash
   # Terminal 1 - Server
   cd normal-state/server
   npm install
   npm start
   
   # Terminal 2 - Client
   cd normal-state/client
   npm install
   npm start
   ```

2. Test the websocket version:
   ```bash
   # Terminal 1 - Server
   cd normal-state-websocket/server
   npm install
   npm start
   
   # Terminal 2 - Client
   cd normal-state-websocket/client
   npm install
   npm start
   ```

3. Verify both implementations:
   - Server responds on port 3000 (or configured port)
   - Client runs on port 3001
   - Photos load correctly
   - No console errors
   - CORS works properly
   - Cache functions as expected

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
