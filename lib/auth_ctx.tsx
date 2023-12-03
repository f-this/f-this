import React, { useContext, useState, useEffect, createContext } from "react";
import { supabase } from "./supabase";
import {
  SignInWithPasswordlessCredentials,
  User,
  VerifyOtpParams,
} from "@supabase/supabase-js";

interface AuthContextData {
  signIn: (phone: string) => Promise<any>;
  verifyOTP: (data: VerifyOtpParams) => Promise<any>;
  signOut: () => Promise<any>;
  loading: boolean;
  user: User | null;
  phone: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

// create a context for authentication
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // create state values for user data and loading
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    // get session data if there is an active session
    supabase.auth.getUser().then((res) => {
      setUser(res.data.user ?? null);
      setLoading(false);
    });

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // create useAuth methods
  const value = {
    signIn: (phone: string) => {
      setPhone(phone);
      return supabase.auth.signInWithOtp({ phone: phone });
    },
    verifyOTP: async (data: VerifyOtpParams) =>
      await supabase.auth.verifyOtp(data),
    signOut: () => supabase.auth.signOut(),
    loading,
    user,
    phone,
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
