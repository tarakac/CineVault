import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String },
  year: { type: String },
  likes: { type: Number, default: 0 }
});

export default mongoose.model("Movie", movieSchema);
