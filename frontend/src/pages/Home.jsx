import { motion } from "framer-motion";
import { useState } from "react";
import { useTMDBSearch } from "../hooks/useTMDB";
import { Link } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const { results, isLoading } = useTMDBSearch(query);

  return (
    <div style={{ width: "100%", minHeight: "80vh" }}>
        <motion.div initial={{ opacity: 1 }} /> 
      {/* Heading */}
      <h1 style={{ fontSize: "2.2rem", marginBottom: "20px", textAlign: "center" }}>
        Search Movies
      </h1>

      {/* Search Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "14px 18px",
            fontSize: "1.1rem",
            borderRadius: "50px",
            border: "1px solid #444",
            outline: "none",
            background: "#1a1a1a",
            color: "white",
            boxShadow: "0 0 6px rgba(0,0,0,0.3)",
          }}
          aria-label="Search movies"
        />
      </div>

      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading...</p>
      )}

      {/* No results */}
      {query.length > 0 && !isLoading && results.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", fontSize: "1.2rem" }}>
          No movies found for "<strong>{query}</strong>"
        </p>
      )}

      {/* Results Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "24px",
          padding: "0 10px",
        }}
      >
        {results.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {/* ⭐ Animated Movie Card */}
            <motion.div
              className="movie-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#1a1a1a",
                borderRadius: "12px",
                padding: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              {/* Poster */}
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "260px",
                    background: "#333",
                    borderRadius: "8px",
                  }}
                />
              )}

              {/* Title */}
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {movie.title}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Hover Animation (backup CSS) */}
      <style>
        {`
          .movie-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.45);
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.6rem;
            }
            input {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
