import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// GET all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// POST new movie
router.post("/", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
});

// Like a movie
router.patch("/:id/like", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  movie.likes++;
  await movie.save();
  res.json(movie);
});

export default router;
