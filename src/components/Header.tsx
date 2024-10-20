import React from 'react';
import { Link } from 'react-router-dom';
import { Pill } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <Link to="/" className="flex items-center">
        <Pill className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold">TrackMeds</span>
      </Link>
      <div className="flex items-center">
        {isLoggedIn ? (
          <>
            <span className="mr-4">Welcome, {username}!</span>
            <Link to="/notifications" className="mr-4">Notifications</Link>
            <Link to="/login" className="mr-4">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <button
          onClick={toggleTheme}
          className={`ml-4 p-2 rounded ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;