import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    // Logic for login, set user state
    setUser({ email });
  };

  const signup = (email, password) => {
    // Logic for signup, set user state
    setUser({ email });
  };

  const logout = () => {
    // Logic for logout, clear user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
