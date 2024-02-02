// client/src/AuthContext.jsx
import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  // Function to handle logout
  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  // The value object that we pass to the Provider
  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
