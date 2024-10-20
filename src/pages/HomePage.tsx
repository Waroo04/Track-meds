import React from 'react';
import Header from '../components/Header';
import { useTheme } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to TrackMeds</h1>
        
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Easy to Manage Stock</h2>
            <p>TrackMeds helps you effortlessly manage your medicine inventory and track expiration dates, ensuring you never run out of essential medications.</p>
          </div>
          <div className="md:w-1/2">
            <img src="https://source.unsplash.com/random/800x600?medicine" alt="Medicine Management" className="rounded-lg shadow-lg" />
          </div>
        </section>
        
        <section className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">User-Friendly Interface</h2>
            <p>Our intuitive interface provides real-time alerts for low inventory or expired medicines, helping you stay on top of your medical supplies with ease.</p>
          </div>
          <div className="md:w-1/2">
            <img src="https://source.unsplash.com/random/800x600?healthcare-app" alt="User-Friendly Interface" className="rounded-lg shadow-lg" />
          </div>
        </section>
      </main>
      <footer className={`mt-12 py-4 text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <p>&copy; Copyright 2024, TrackMeds.</p>
      </footer>
    </div>
  );
};

export default HomePage;