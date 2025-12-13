import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Prevent flicker while Firebase checks auth
  if (loading) return null;

  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "";

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#1a1a1a",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/"
          aria-label="Home"
          style={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          🎬 MovieApp
        </Link>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#00d4ff" : "white",
            textDecoration: "none",
            fontSize: "1rem",
          })}
        >
          Home
        </NavLink>

        {user && (
          <NavLink
            to="/watchlist"
            style={({ isActive }) => ({
              color: isActive ? "#00d4ff" : "white",
              textDecoration: "none",
              fontSize: "1rem",
            })}
          >
            Watchlist
          </NavLink>
        )}
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {user ? (
          <>
            <div
              aria-label="User Profile"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#555",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                }}
              >
                {displayName.charAt(0).toUpperCase()}
              </div>

              <span>{displayName}</span>
            </div>

            <button
              onClick={handleLogout}
              style={{
                padding: "6px 12px",
                backgroundColor: "#e63946",
                border: "none",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{
              padding: "6px 12px",
              backgroundColor: "#457b9d",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
