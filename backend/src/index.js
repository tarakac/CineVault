import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import movieRoutes from "./routes/movieRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";

const app = express();

// CORS MUST be here before routes
app.use(cors());

// Parse JSON
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/movies", movieRoutes);

app.use("/api/watchlist", watchlistRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


