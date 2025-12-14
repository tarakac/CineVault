🎬 CineVault – Full-Stack Movie Discovery & Watchlist App
React • Express • MongoDB • Firebase Auth • TMDB API • SWR • Framer Motion • Playwright

CineVault is a full-stack web application allowing users to search movies, view details, and manage a personal watchlist with secure authentication.
This project fulfills the full Capstone requirements for React, Express, Deployment, Database, Testing, and System Design.
## 🛠 Tech Stack

**Frontend**
- React (Vite)
- React Router
- Firebase Authentication
- SWR
- Framer Motion

**Backend**
- Node.js
- Express
- MongoDB Atlas
- Mongoose

**Testing**
- Playwright (End-to-End)

**Deployment**
- Render (Frontend & Backend)


## 🚀 Live Deployment

- **Frontend:** https://cinevault-frontend.onrender.com  
- **Backend API:** https://cinevault-0j9s.onrender.com  

---

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


### Deployment
- Frontend deployed on Render
- Backend API deployed on Render
- MongoDB hosted on MongoDB Atlas
- Environment variables securely managed via Render dashboard

## ✨ Features

### Public (No Login Required)
- Search movies via TMDB API
- View movie details
- Responsive UI across devices

### Authenticated Users
- Register & login (Email/Password or Google)
- Add movies to watchlist
- Remove movies from watchlist
- Watchlist persists after refresh
- Protected routes (Watchlist)

---

## 🔐 Authentication & Authorization

- Firebase Authentication manages user sessions
- Auth state is globally available via `AuthContext`
- Watchlist routes are protected using `ProtectedRoute`
- Non-authenticated users can browse but cannot modify watchlists

---

📖 Installation & Setup Instructions
▶️ 1. Clone Repository
git clone https://github.com/tarakac/CineVault.git
cd capstone-movie

⚙️ Dev Container Setup (Required )

Open repo in VS Code

Ensure you have:

Docker installed

Dev Containers extension enabled

Open folder in container:

Ctrl + Shift + P → Dev Containers: Reopen in Container


---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

### Frontend (`frontend/.env`)
Create /frontend/.env:
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_URL=https://cinevault-0j9s.onrender.com
VITE_TMDB_API_KEY=your_tmdb_key


🗄️ 2. Backend Setup
Install Dependencies
cd backend
npm install

Start Backend
npm run dev


If successful:

MongoDB Connected...
Server running on port 5000

🌐 3. Frontend Setup
Install Dependencies
cd frontend
npm install


## End-to-End Testing (Playwright)
cd frontend
npm run test:e2e

Firebase Configuration
Start Frontend
npm run dev


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
/watchlist

Public routes:
/  
/movie/:id  
/login




🧪 Automated Testing (Playwright) file: tests/search.specs.js
Run Tests
cd frontend
npx playwright test

What is tested?
[Screenshot of running testcase](testcase.png)

✔ User login
✔ Search functionality
✔ Movie results display
✔ Clicking movie opens details
✔ URL validation (/movie/:id)



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

♿ Accessibility

Semantic HTML

ARIA labels on navigation

Keyboard-accessible controls

Color contrast compliant with WCAG 2.2 AA

📌 Future Enhancements

User profiles

Movie recommendations

Pagination & infinite scroll

Improved animations

## sequence diagram
![Sequence Diagram](/docs/sequencediagram.png)




👤 Author

Taraka Nanda Deepthi
Capstone Project – Full-Stack Web Development

