# Golf Meet Frontend 🏌️‍♂️⚛️

The frontend application for Golf Meet - built with React 19, Vite, and modern web technologies for a seamless golfing community experience.

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features and improved performance
- **Vite 6** - Next-generation frontend tooling with lightning-fast HMR
- **React Router DOM 7** - Declarative routing for React applications
- **Framer Motion 12** - Production-ready motion library for React
- **Tailwind CSS 3** - Utility-first CSS framework for rapid UI development
- **TypeScript Support** - Type definitions included for better development experience
- **ESLint** - Code linting with React-specific rules

## 🚀 Features

- ⚡ Lightning-fast development with Vite HMR
- 🎨 Modern UI with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 🧭 Client-side routing with React Router
- 📱 Responsive design for all devices
- 🔍 ESLint integration for code quality
- 🌐 Network access support for testing on mobile devices

## 📋 Prerequisites

- **Node.js** (v18.17.1 or higher)
- **npm** (v9.6.7 or higher)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Access the Application
- **Local**: http://localhost:5173
- **Network**: Use `npm run dev:host` for mobile testing

## 🔧 Available Scripts

- `npm run dev` - Start development server on localhost
- `npm run dev:host` - Start development server with network access (mobile testing)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run preview:host` - Preview production build with network access
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
frontend/
├── public/                      # Static assets
│   ├── vite.svg
│   └── ...
├── src/                         # Source code
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Common components (Header, Footer, etc.)
│   │   ├── golf/                # Golf-specific components
│   │   └── ui/                  # Base UI components
│   ├── pages/                   # Page components
│   │   ├── Home/
│   │   ├── Courses/
│   │   ├── Meetups/
│   │   ├── Profile/
│   │   └── Auth/
│   ├── hooks/                   # Custom React hooks
│   ├── services/                # API services and HTTP clients
│   ├── utils/                   # Utility functions
│   ├── context/                 # React Context providers
│   ├── assets/                  # Images, icons, fonts
│   ├── styles/                  # Global styles and Tailwind config
│   ├── App.jsx                  # Main App component
│   └── main.jsx                 # Application entry point
├── package.json
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
└── README.md
```

## ⚙️ Configuration

### Vite Configuration
The project uses Vite with the SWC plugin for optimal performance:
- Fast Refresh with SWC compiler
- Hot Module Replacement (HMR)
- Optimized build process
- Development server with instant updates

### Tailwind CSS
Configured for:
- Utility-first styling approach
- Responsive design
- Custom color schemes for golf theme
- Component-friendly utilities

### ESLint Setup
Includes rules for:
- React best practices
- React Hooks guidelines
- Code formatting and consistency
- React Refresh compatibility

## 🎨 Styling Guide

This project uses Tailwind CSS for styling. Key conventions:

### Color Scheme
```css
/* Golf-themed colors (example) */
.golf-green: theme('colors.green.600')
.golf-sand: theme('colors.yellow.100')
.golf-sky: theme('colors.blue.400')
```

### Component Structure
```jsx
// Use Tailwind classes for consistent styling
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Name</h2>
  <p className="text-gray-600">Course description...</p>
</div>
```

## 🎭 Animations

Framer Motion is integrated for smooth animations:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

## 🌐 API Integration

The frontend communicates with the backend API:

```javascript
// Example API service
const API_BASE_URL = 'http://localhost:5000/api'

export const golfService = {
  getCourses: () => fetch(`${API_BASE_URL}/courses`),
  getMeetups: () => fetch(`${API_BASE_URL}/meetups`),
  // ... other API calls
}
```

## 📱 Responsive Design

The application is built mobile-first with Tailwind's responsive utilities:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid layout */}
</div>
```

## 🧪 Development Tips

### Hot Reload
Vite provides instant hot reload. Changes to components will update immediately without losing state.

### Network Testing
Use `npm run dev:host` to test on mobile devices on the same network.

### Code Quality
Run `npm run lint` before committing to ensure code quality.

### Performance
- Use React.memo() for expensive components
- Implement code splitting with React.lazy()
- Optimize images and assets

## 🚀 Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment.

## 🌍 Deployment

### Static Hosting (Recommended)
Deploy the `dist/` folder to:
- **Netlify**: Drag and drop the dist folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Upload dist contents

### Configuration for Deployment
Update the base URL in `vite.config.js` if deploying to a subdirectory:

```javascript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... other config
})
```

## 🐛 Troubleshooting

### Common Issues

**Vite server not starting:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tailwind styles not loading:**
```bash
# Ensure PostCSS and Tailwind are properly configured
npm run build
```

**ESLint errors:**
```bash
# Fix common issues automatically
npm run lint -- --fix
```

## 🤝 Contributing

1. Follow the established folder structure
2. Use Tailwind CSS for styling
3. Add Framer Motion animations where appropriate
4. Run `npm run lint` before committing
5. Test responsive design on multiple screen sizes

## 📝 Code Style

- Use functional components with hooks
- Implement proper TypeScript types (when applicable)
- Follow React best practices
- Use descriptive component and variable names
- Add comments for complex logic

---

**Built with ⚡ Vite and ⚛️ React 19**