import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../contexts/ThemeContext';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const DashboardPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={true}/>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="flex space-x-4">
                <Link to="/purchase" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Purchase Medicine
                </Link>
                <Link to="/items" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Remove Medicine
                </Link>
              </div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Purchase Summary</h2>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">0%</p>
                  <p>Total purchase made today</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">₹0</p>
                  <p>Revenue today</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <h2 className="text-xl font-semibold mb-4">Revenue Trend (Last 6 Months)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;