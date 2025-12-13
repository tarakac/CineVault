import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // ✅ NAVBAR LIVES HERE
    children: [
      { index: true, element: <Home /> },

      { path: "login", element: <Login /> }, // ✅ LOGIN NOW HAS NAVBAR

      { path: "movie/:id", element: <MovieDetails /> }, // public

      {
        path: "watchlist",
        element: (
          <ProtectedRoute>
            <Watchlist />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
