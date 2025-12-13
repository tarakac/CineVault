import express from "express";
import Watchlist from "../models/Watchlist.js";

const router = express.Router();

// GET watchlist for user
router.get("/:uid", async (req, res) => {
  try {
    const items = await Watchlist.find({ uid: req.params.uid });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ADD movie to watchlist
router.post("/", async (req, res) => {
  try {
    const { uid, movieId, title, posterPath } = req.body;

    const exists = await Watchlist.findOne({ uid, movieId });
    if (exists) return res.status(400).json({ message: "Already in watchlist" });

    const item = await Watchlist.create({
      uid,
      movieId,
      title,
      posterPath
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE movie from watchlist
router.delete("/:uid/:movieId", async (req, res) => {
  try {
    await Watchlist.findOneAndDelete({
      uid: req.params.uid,
      movieId: req.params.movieId,
    });

    res.json({ message: "Removed from watchlist" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;