🎬 CineVault – Full-Stack Movie Discovery & Watchlist App
React • Express • MongoDB • Firebase Auth • TMDB API • SWR • Framer Motion • Playwright

CineVault is a full-stack web application allowing users to search movies, view details, and manage a personal watchlist with secure authentication.
This project fulfills the full Capstone requirements for React, Express, Deployment, Database, Testing, and System Design.

🚀 Live Deployment
Component	Link
Frontend (React)	TODO: Add deployed URL
Backend (Express API)	TODO: Add deployed URL
Demo Video	TODO: Add video link
📦 Repository Structure
/frontend
   /src
      /components
      /pages
      /hooks
      /context
      /layouts
   package.json
   README.md

/backend
   /src
      index.js
      db.js
      /models
      /routes
   .env
   package.json

/tests
   search.spec.js

🔐 Features Overview
Frontend (React + Vite)

✔ Firebase Google + Email/Password authentication
✔ Protected routes using custom ProtectedRoute component
✔ Movie search powered by TMDB API
✔ Responsive UI with grid layout
✔ Framer Motion animations
✔ SWR for data fetching + caching
✔ Watchlist: Add/remove movies
✔ Fully responsive design (WCAG considerations included)

Backend (Express + MongoDB)

✔ Cloud-deployed API
✔ CRUD operations for Watchlist
✔ Mongoose validation + schema design
✔ CORS configured
✔ Environment-based configuration

Additional Engineering

✔ Dev Container ready
✔ Automated end-to-end test (Playwright)
✔ System design artifact included
✔ Full documentation
✔ Proper attribution

🛠️ Technologies Used
Frontend

React (Vite)

React Router

SWR

Firebase Authentication

Framer Motion

TMDB API

Backend

Node.js + Express

MongoDB + Mongoose

CORS

dotenv

Tools

Playwright (E2E Testing)

GitHub + VS Code Dev Containers

Google Cloud / Render / Railway (deployment choice)

📖 Installation & Setup Instructions
▶️ 1. Clone Repository
git clone 
cd cinevault

⚙️ Dev Container Setup (Required )

Open repo in VS Code

Ensure you have:

Docker installed

Dev Containers extension enabled

Open folder in container:

Ctrl + Shift + P → Dev Containers: Reopen in Container

🗄️ 2. Backend Setup
Install Dependencies
cd backend
npm install

Configure .env

Create /backend/.env:

PORT=5000
MONGO_URI=your_mongodb_atlas_uri

Start Backend
npm run dev


If successful:

MongoDB Connected...
Server running on port 5000

🌐 3. Frontend Setup
Install Dependencies
cd frontend
npm install

Firebase Configuration

Create /frontend/.env:

VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_TMDB_API_KEY=...

Start Frontend
npm run dev


App available at:

http://localhost:5173

🔌 API Documentation (Backend)
GET Watchlist
GET /api/watchlist/:uid

POST Add Movie
POST /api/watchlist
{
  "uid": "firebase_user_id",
  "movieId": "12345",
  "title": "Movie Title",
  "posterPath": "/path.jpg"
}

DELETE Remove Movie
DELETE /api/watchlist/:uid/:movieId

🔑 Authentication Flow

Firebase Authentication is used

Supports:

Google Sign-In

Email + Password Login

Email Registration

Auth state preserved via onAuthStateChanged

Protected routes:

/movie/:id

/watchlist

If not logged in → user is redirected to /login.

🎥 Video Demonstration Checklist

Your video should include:

Login via Firebase

Searching for movies

Viewing movie details

Adding/removing movies from watchlist

Backend API logs in Dev Container

Playwright test running successfully

Architecture explanation (React → Express → MongoDB)

🧪 Automated Testing (Playwright)
Run Tests
cd frontend
npx playwright test

What is tested?

✔ User login
✔ Search functionality
✔ Movie results display
✔ Clicking movie opens details
✔ URL validation (/movie/:id)

🧱 Design Artifact (Required)
Sequence Diagram – User Adds Movie to Watchlist
User → React UI: Click "Add to Watchlist"
React → Firebase Auth: Retrieve UID
React → Express API: POST /api/watchlist
Express → MongoDB: Insert document
MongoDB → Express: Success
Express → React: JSON success response
React → SWR Cache: Mutate + refresh watchlist
UI → User: Button updates to "Remove from Watchlist"

📁 Project Architecture
React (Frontend)
   ↳ AuthContext (Firebase)
   ↳ SWR Data Hooks
   ↳ Framer Motion Animations
   ↳ Protected Routes

Express (Backend)
   ↳ Watchlist Routes
   ↳ MongoDB / Mongoose Models
   ↳ Validation + Error Handling

MongoDB (Database)
   ↳ Users’ Watchlist Items

🙌 Attributions

This project uses external APIs/libraries:

TMDB API – movie data

Firebase Authentication – login system

Framer Motion – animations

SWR – data fetching

Playwright – automated testing

All AI assistance (ChatGPT) was used ethically and cited here.