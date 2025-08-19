# Personalized Content Dashboard

A modern, responsive content dashboard built with React, TypeScript, and Tailwind CSS that allows users to browse and organize content from multiple sources including news, movies, and social media posts.

## 🌟 Live Demo

The APIs that I am using required upgraded plan if this site is used in production. SO SORRY FOR THAT 😢

## Project Architecture

(./architecture.png)

## Video Link showcasing Implementation

https://drive.google.com/file/d/12Tt-50nFg_jbdM9mWbUFat_styPA47E0/view?usp=drive_link

## 🚀 Features

- **Personalized Content Feed** - News, movies, and social posts based on user preferences
- **Drag & Drop Reordering** - Organize content with smooth animations using Framer Motion
- **Dark/Light Mode** - Toggle between themes with persistent settings
- **Advanced Search** - Debounced search across all content types
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Favorite System** - Save and manage favorite content items
- **Trending Section** - Discover popular content

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + Redux Persist
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **API Integration**: Fetch API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Git

## ⚡ Quick Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/kasim-kc/Personalized-Content-Dashboard.git
cd Personalized-Content-Dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### Step 4: Get API Keys

- **NewsAPI**: Get free API key from [newsapi.org](https://newsapi.org)
- **TMDB API**: Get free API key from [themoviedb.org](https://www.themoviedb.org/settings/api)

### Step 5: Start Development Server

```bash
npm run dev
```

### Step 6: Open in Browser

Navigate to `http://localhost:5173` to view the application.

## 📱 Usage Guide

### Adding Content Preferences

1. Click on the ⚙️ Settings icon in the sidebar
2. Select your preferred content categories
3. Changes are automatically saved

### Using Search

1. Type in the search bar at the top
2. Results update automatically as you type
3. Click the ✕ icon to clear search

### Organizing Content

1. Click and drag any content card
2. Drop it in your preferred position
3. The layout will smoothly animate to the new order

### Saving Favorites

1. Click the ☆ icon on any content card
2. View all favorites in the "Favorites" section
3. Click again to remove from favorites

### Theme Switching

1. Toggle the dark/light mode switch in Settings
2. Theme preference is saved automatically

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Environment Variables for Production

Remember to set the same environment variables in your deployment platform:

- `VITE_NEWS_API_KEY`
- `VITE_TMDB_API_KEY`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── dashboard/      # Main dashboard components
│   └── ui/            # Reusable UI components
├── features/           # Redux slices and types
├── store/             # Redux store configuration
├── services/          # API service functions
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```
