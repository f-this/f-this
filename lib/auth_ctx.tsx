import React, { useContext, useState, useEffect, createContext } from 'react';
import { supabase } from './supabase';
import { SignInWithPasswordlessCredentials, User, VerifyOtpParams } from '@supabase/supabase-js';

interface AuthContextData {
  signIn: (data: SignInWithPasswordlessCredentials) => Promise<any>;
  verifyOTP: (data: VerifyOtpParams) => Promise<any>;
  signOut: () => Promise<any>;
  user: User | null;
}


interface AuthProviderProps {
  children: React.ReactNode;
}

// create a context for authentication
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // create state values for user data and loading
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get session data if there is an active session
    const session = supabase.auth.getUser().then((res) => {


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
    signIn: (data: SignInWithPasswordlessCredentials) => supabase.auth.signInWithOtp(data),
    verifyOTP: (data: VerifyOtpParams) => supabase.auth.verifyOtp(data),
    signOut: () => supabase.auth.signOut(),
    user,
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