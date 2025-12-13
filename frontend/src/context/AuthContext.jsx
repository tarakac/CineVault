console.log("auth value:", auth);
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; // your firebase setup
import { onAuthStateChanged } from "firebase/auth";

// Create Context
const AuthContext = createContext();

// Provider component (only components here)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook (OK because it’s a component-level export)
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}


