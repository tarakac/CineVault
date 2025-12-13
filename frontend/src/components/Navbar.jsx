import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useAuth();

  async function handleLogout() {
    await signOut(auth);
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
            aria-label="Your Watchlist"
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
            {/* Profile */}
            <div
              aria-label="User Profile"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {/* Avatar placeholder */}
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
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <span>{user.displayName || user.email}</span>
            </div>

            <button
              onClick={handleLogout}
              aria-label="Logout"
              style={{
                padding: "6px 12px",
                backgroundColor: "#e63946",
                border: "none",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.9rem",
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
              fontSize: "0.9rem",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
