# Golf Meet 🏌️‍♂️

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
- **Express.js 5** - Fast web framework for Node.js
- **JWT** - Secure authentication
- **bcrypt** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/golf-meet.git
cd golf-meet
```

### 2. Install Dependencies
```bash
# Install all dependencies (frontend + backend)
npm run install:all
```

### 3. Environment Setup
Create a `.env` file in the `backend` directory:
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Database (configure based on your choice)
DATABASE_URL=your-database-connection-string

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads
```

### 4. Run the Application

#### Development Mode (Both Servers)
```bash
npm run dev
```

#### Development with Network Access
```bash
npm run dev:host
```

#### Run Servers Separately
```bash
# Frontend only (Terminal 1)
npm run dev:frontend

# Backend only (Terminal 2)
npm run dev:backend
```

### 5. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **With --host**: http://your-local-ip:5173

## 📁 Project Structure

```
golf-meet/
├── package.json                 # Root package with concurrent scripts
├── README.md
├── LICENSE
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
│   └── ...
└── backend/                     # Express.js API server
    ├── controllers/             # Route controllers
    ├── routes/                  # API routes
    ├── models/                  # Data models
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
- `npm run dev` - Run both frontend and backend
- `npm run dev:host` - Run with network access
- `npm run install:all` - Install all dependencies
- `npm run build` - Build for production
- `npm run clean` - Clean all node_modules

### Frontend
- `npm run dev` - Start development server
- `npm run dev:host` - Start with network access
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

## 🧪 Testing

```bash
# Run backend tests
cd backend && npm test

# Run frontend linting
npm run lint
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build:frontend
# Deploy the frontend/dist folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
# Set environment variables in your hosting platform
# Deploy the backend folder
```

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

## 🐛 Issues

Found a bug? Have a feature request? Please create an issue in the [GitHub repository](https://github.com/HULT-Infotech/golf-meet/issues).

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HULT** - *Initial work* - [YourGitHub](https://github.com/HULT-Infotech)

## 🙏 Acknowledgments

- Thanks to the React and Express.js communities
- Golf course data providers
- All contributors and testers

## 📞 Support

For support, email hultinfo2024@gmail.com or create an issue in the repository.

---

**Happy Golfing!** ⛳