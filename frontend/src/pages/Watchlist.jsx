import { useAuth } from "../context/AuthContext";
import { useWatchlist, removeFromWatchlist } from "../hooks/useWatchlist";
import { Link } from "react-router-dom";

export default function Watchlist() {
  const { user } = useAuth();
  const { watchlist, mutate, isLoading } = useWatchlist(user?.uid);

  if (isLoading) return <p>Loading your watchlist...</p>;

  // If empty
  if (!watchlist.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Your watchlist is empty</h2>
        <p>Add movies to your watchlist from the movie details page.</p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "16px",
            padding: "10px 16px",
            backgroundColor: "#457b9d",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  async function handleRemove(movieId) {
    await removeFromWatchlist(user.uid, movieId);
    mutate();
  }

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Your Watchlist</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {watchlist.map((item) => (
          <div
            key={item.movieId}
            style={{
              backgroundColor: "#1a1a1a",
              padding: "12px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              transition: "transform 0.2s ease",
            }}
            className="watchlist-card"
          >
            {/* Poster */}
            <Link to={`/movie/${item.movieId}`}>
              <img
                src={
                  item.posterPath
                    ? `https://image.tmdb.org/t/p/w300${item.posterPath}`
                    : "/placeholder.png"
                }
                alt={`Poster for ${item.title}`}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            </Link>

            {/* Title */}
            <h3
              style={{
                color: "white",
                fontSize: "1rem",
                minHeight: "40px",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            {/* Remove Button */}
            <button
              onClick={() => handleRemove(item.movieId)}
              aria-label={`Remove ${item.title} from watchlist`}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#e63946",
                border: "none",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
