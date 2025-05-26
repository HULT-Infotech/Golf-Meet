# Golf Meet Official Website 🏌️‍♂️

A full-stack web application for golf enthusiasts to connect, organize meetups, and share their golfing experiences.

## 🚀 Features

- **User Authentication** - Secure registration and login
- **Golf Course Directory** - Browse and discover golf courses
- **Meetup Organization** - Create and join golf meetups
- **Player Profiles** - Showcase your golfing skills and history
- **Real-time Chat** - Connect with fellow golfers
- **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router DOM** - Client-side routing

### Backend
- **Express.js** - Fast web framework for Node.js
- **MongoDB** - NoSQL database
- **JWT** - Secure authentication
- **bcrypt** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18.17.1 or higher)
- **npm** (v9.6.7 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/HULT-Infotech/Golf-Meet.git
cd Golf-Meet
```

### 2. Install Dependencies
```bash
# Install all dependencies (frontend + backend)
npm run ci:all
```

### 3. Environment Setup
Create a `.env` file in the `backend` directory:
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# MongoDB Configuration
MONGODB_URL=mongodb://localhost:27017/golf-meet
# Or for MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/golf-meet

# JWT Configuration (add these)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# File Upload (add these if needed)
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads
```

### 4. Database Setup
Make sure MongoDB is running:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (cloud) - no local setup required
```

### 5. Run the Application

#### Development Mode (Both Servers)
```bash
npm start
```

#### Frontend Development Only
```bash
npm run dev:frontend
```

#### Backend Development Only
```bash
npm run dev:backend
```

#### Individual Server Commands
```bash
# Frontend only
npm run start:frontend

# Backend only
npm run start:backend
```

### 6. Production Build
```bash
# Build frontend for production
npm run build

# Start backend in production mode
npm run start:prod
```

### 7. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
Golf-Meet/
├── package.json                 # Root package with concurrent scripts
├── README.md
├── LICENSE
├── dist/                        # Production build output
├── frontend/                    # React application
│   ├── public/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   ├── services/           # API service layer
│   │   ├── context/            # React Context providers
│   │   ├── assets/             # Images, icons, etc.
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── dist/                   # Frontend build output
└── backend/                     # Express.js API server
    ├── controllers/             # Route controllers
    ├── routes/                  # API routes
    ├── models/                  # MongoDB models
    ├── middleware/              # Custom middleware
    ├── services/                # Business logic
    ├── config/                  # Configuration files
    ├── utils/                   # Utility functions
    ├── uploads/                 # File upload directory
    ├── app.js                   # Main server file
    ├── package.json
    └── .env
```

## 🔧 Available Scripts

### Root Level
- `npm start` - Run both frontend and backend concurrently
- `npm run ci:all` - Install all dependencies (CI/CD friendly)
- `npm run build` - Install frontend deps, build frontend, and copy to dist
- `npm run clean` - Remove dist directory
- `npm run dev:frontend` - Start frontend development server
- `npm run dev:backend` - Start backend development server
- `npm run start:prod` - Start backend in production mode

### Frontend Scripts
- `npm run install:frontend` - Install frontend dependencies only
- `npm run build:frontend` - Build frontend for production
- `npm run start:frontend` - Start frontend development server

### Backend Scripts
- `npm run install:backend` - Install backend dependencies only
- `npm run start:backend` - Start backend development server

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test
```

## 🗄️ Database

This application uses MongoDB as the database. You can use either:

1. **Local MongoDB**: Install MongoDB locally and use default connection
2. **MongoDB Atlas**: Cloud-hosted MongoDB service (recommended for production)

### MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URL` in `.env`
4. Whitelist your IP address

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
# Set environment variables in your hosting platform
# Deploy the backend folder
# Make sure to set NODE_ENV=production
```

### Full Stack Deployment
The build process creates a `dist/` folder with the frontend build that can be served statically alongside your backend API.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use ESLint configuration provided
- Follow React best practices
- Use TypeScript for type safety (future enhancement)
- Write meaningful commit messages

### API Conventions
- RESTful API design
- Consistent error handling
- Proper HTTP status codes
- Input validation on all endpoints
- MongoDB best practices for data modeling

## 🐛 Issues

Found a bug? Have a feature request? Please create an issue in the [GitHub repository](https://github.com/HULT-Infotech/Golf-Meet/issues).

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HULT Infotech** - *Initial work* - [HULT-Infotech](https://github.com/HULT-Infotech)

## 🙏 Acknowledgments

- Thanks to the React and Express.js communities
- MongoDB for robust database solutions
- Golf course data providers
- All contributors and testers

## 📞 Support

For support, email hultinfo2024@gmail.com or create an issue in the repository.

---

**Happy Golfing!** ⛳