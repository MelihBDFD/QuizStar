# Friendship Quiz

A web application for creating and taking friendship quizzes. Users can create their own quizzes, share them with friends, and see the results in a leaderboard.

## Features

- Create custom friendship quizzes
- Share quizzes with unique links
- Real-time leaderboard
- Responsive design
- User-friendly interface

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn
- MongoDB (for local development)

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/friendship-quiz
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select `gh-pages` branch as the source
4. The site will be available at `https://<your-username>.github.io/<repository-name>`

### Custom Domain

1. Create a `CNAME` file in the root directory with your domain
2. Configure your DNS settings to point to GitHub Pages

## Environment Variables

### Backend
- `PORT`: Port for the backend server (default: 5000)
- `MONGODB_URI`: MongoDB connection string

## Project Structure

```
.
├── client/                 # Frontend React application
├── server/                 # Backend Node.js/Express server
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── server.js           # Entry point for the backend
├── .github/workflows/      # GitHub Actions workflows
├── public/                 # Static files
├── index.html              # Main HTML file
└── 404.html                # 404 page for client-side routing
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
