import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../contexts/ThemeContext';

const PurchasePage: React.FC = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [message, setMessage] = useState('');

  const { theme } = useTheme();

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating purchase logic
    console.log(`Purchased ${quantity} ${medicineName} for ₹${cost}`);
    setMessage(`Successfully purchased ${quantity} ${medicineName}`);
    setMedicineName('');
    setQuantity('');
    setCost('');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={true}/>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Purchase Medicine</h1>
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <form onSubmit={handlePurchase}>
              <div className="mb-4">
                <label htmlFor="medicineName" className="block mb-2">Medicine Name</label>
                <input
                  type="text"
                  id="medicineName"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="cost" className="block mb-2">Cost</label>
                <input
                  type="number"
                  id="cost"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Purchase Medicine
              </button>
            </form>
            {message && (
              <p className="mt-4 text-green-600 text-center">{message}</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PurchasePage;