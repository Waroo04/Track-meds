import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';


const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { signup } = useAuth(); // Using the signup logic from the first component

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Password confirmation check
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Attempt signup with provided credentials
    try {
      await signup(username, email, password);
      navigate('/login'); // Navigate to login page after successful signup
    } catch (err) {
      setError('Failed to create an account');
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
        <div className={`w-full max-w-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md`}>
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
