import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RootLayout() {
  const { user } = useAuth();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          padding: "20px 40px",
          background: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            MovieApp
          </Link>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/watchlist" style={{ color: "white" }}>Watchlist</Link>
        </div>

        <div>
          {user ? (
            <>
              <span style={{ marginRight: 20 }}>{user.displayName}</span>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
                style={{ background: "red", color: "white", padding: "8px 16px", borderRadius: 8 }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{ color: "white" }}>Login</Link>
          )}
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main
        style={{
          width: "100%",
          padding: "40px 40px",
          boxSizing: "border-box",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
