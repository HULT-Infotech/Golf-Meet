# Golf Meet Backend

A Node.js backend API for the Golf Meet application, providing user authentication, data management, and core functionality for connecting golfers.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **RESTful API**: Express.js powered API endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **File Uploads**: Multer integration for handling file uploads
- **Security**: Helmet.js for security headers and CORS configuration
- **Validation**: Express-validator for request validation
- **Logging**: Morgan for HTTP request logging
- **Environment Configuration**: dotenv for environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd golf-meet-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/golf-meet
   
   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   
   # Other configurations as needed
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm start` | Start production server |
| `npm test` | Run Jest test suite |
| `npm run lint` | Run linting (ESLint config needed) |
| `npm run build` | No build step needed for backend |

## 🏗️ Project Structure

```
golf-meet-backend/
├── server.js              # Main server file
├── package.json          # Project dependencies and scripts
├── .env                  # Environment variables (create this)
├── models/               # Mongoose models
├── routes/               # API route definitions
├── middleware/           # Custom middleware functions
├── controllers/          # Route controllers
├── utils/                # Utility functions
├── config/               # Configuration files
├── uploads/              # File upload directory
└── tests/                # Test files
```

## 🔧 Key Dependencies

### Production Dependencies
- **express**: Fast, unopinionated web framework
- **mongoose**: MongoDB object modeling
- **jsonwebtoken**: JWT implementation
- **bcryptjs**: Password hashing
- **helmet**: Security middleware
- **cors**: Cross-origin resource sharing
- **multer**: File upload handling
- **express-validator**: Request validation
- **morgan**: HTTP request logger
- **dotenv**: Environment variable loader

### Development Dependencies
- **nodemon**: Development server with auto-restart
- **jest**: Testing framework
- **supertest**: HTTP assertion library

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests are written using Jest and Supertest for API endpoint testing.

## 🛡️ Security Features

- **Helmet.js**: Sets various HTTP headers for security
- **CORS**: Configured for cross-origin requests
- **bcryptjs**: Secure password hashing
- **JWT**: Stateless authentication
- **Input Validation**: Request validation using express-validator

## 📊 Logging

HTTP requests are logged using Morgan middleware. Logs include:
- Request method and URL
- Response status code
- Response time
- Request timestamp

## 🔧 Configuration

Key configuration options in `.env`:

- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `JWT_EXPIRE`: JWT expiration time

## 📚 API Documentation

*(Add your API endpoints documentation here)*

Example endpoints might include:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 🚀 Deployment

### Environment Variables for Production
Ensure all required environment variables are set:
- Database connection string
- JWT secret (use a strong, random secret)
- Set `NODE_ENV=production`

### Recommended Deployment Platforms
- **Heroku**
- **Railway**
- **DigitalOcean App Platform**
- **AWS EC2/ECS**
- **Google Cloud Platform**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact [hultinfo2024.com] or create an issue in the repository.

---

**Happy Coding! ⛳**