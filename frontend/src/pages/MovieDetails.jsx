import { useParams } from "react-router-dom";
import { useTMDBMovie } from "../hooks/useTMDB";
import { useAuth } from "../context/AuthContext";
import {
  useWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../hooks/useWatchlist";

export default function MovieDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const { movie, isLoading } = useTMDBMovie(id);
  const { watchlist, mutate } = useWatchlist(user?.uid);

  if (isLoading) return <p style={{ padding: 20 }}>Loading...</p>;
  if (!movie) return <p style={{ padding: 20 }}>Movie not found</p>;

  const isSaved = watchlist?.some((item) => item.movieId == id);

  async function handleAdd() {
    await addToWatchlist({ uid: user.uid, movie });
    mutate();
  }

  async function handleRemove() {
    await removeFromWatchlist(user.uid, id);
    mutate();
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gap: "40px",
        gridTemplateColumns: "1fr",
      }}
    >
      {/* --- Movie Info Container --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
        className="movie-details-container"
      >
        {/* Poster */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            />
          ) : (
            <div
              style={{
                width: "350px",
                height: "500px",
                background: "#444",
                borderRadius: "12px",
              }}
            />
          )}
        </div>

        {/* Details Section */}
        <div>
          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "12px",
              color: "white",
            }}
          >
            {movie.title}
          </h1>

          <p style={{ marginBottom: "20px", lineHeight: "1.6", color: "#ddd" }}>
            {movie.overview}
          </p>

          {/* Metadata */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "20px",
              color: "#aaa",
            }}
          >
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>📅 {movie.release_date}</span>
            {movie.runtime && <span>⏱️ {movie.runtime} min</span>}
          </div>

          {/* Add / Remove Button */}
          {isSaved ? (
            <button
              onClick={handleRemove}
              style={{
                background: "#d9534f",
                padding: "12px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Remove from Watchlist
            </button>
          ) : (
            <button
              onClick={handleAdd}
              style={{
                background: "#28a745",
                padding: "12px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to Watchlist
            </button>
          )}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (min-width: 768px) {
            .movie-details-container {
              grid-template-columns: 350px 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
