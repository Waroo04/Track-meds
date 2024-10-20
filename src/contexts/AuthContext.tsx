import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Load user from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const [users, setUsers] = useState<{ username: string; email: string; password: string }[]>(() => {
    // Load existing users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // Persist user login data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Persist users list to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user exists and password matches
    const foundUser = users.find(u => u.email === email);
    if (foundUser) {
      if (foundUser.password === password) {
        setUser({ username: foundUser.username, email: foundUser.email });
      } else {
        throw new Error('Incorrect password');
      }
    } else {
      throw new Error('User not found');
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (users.some(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser = { username, email, password };
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user data from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
