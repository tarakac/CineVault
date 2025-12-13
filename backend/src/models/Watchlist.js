import mongoose from "mongoose";

const WatchlistSchema = new mongoose.Schema({
  uid: { type: String, required: true }, // Firebase user ID
  movieId: { type: Number, required: true }, // TMDB movie ID
  title: { type: String, required: true },
  posterPath: { type: String }, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Watchlist", WatchlistSchema);
