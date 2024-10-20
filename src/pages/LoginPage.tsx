import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

interface LoginPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { login } = useAuth();

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      }
    };

    checkLoggedInStatus();
  }, [navigate, setIsLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again or Sign-Up first');
    }
  };

  return (
    <div className={`min-h-screen flex ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <Stethoscope size={100} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join TrackMeds</h2>
          <p>Start managing your medicine inventory today</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-3 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-center">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
