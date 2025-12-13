import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  const location = useLocation();

  // Hide navbar on login page
  const hideNavbar = location.pathname === "/login";

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      {!hideNavbar && <Navbar />}

      <main
        style={{
          width: "100%",
          padding: "40px",
          boxSizing: "border-box",
          minHeight: hideNavbar ? "100vh" : "calc(100vh - 80px)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
