import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  logout: async () => {},
  error: null
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, 
        (user) => {
          setUser(user);
          setIsLoading(false);
        },
        (error) => {
          console.error("Auth state error:", error);
          setError(error.message);
          setIsLoading(false);
        }
      );

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } catch (e: any) {
      console.error("Error setting up auth listener:", e);
      setError(e.message);
      setIsLoading(false);
    }
  }, [auth]);

  const logout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error signing out:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
} 