import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../contexts/ThemeContext';

const ScanPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [medicineName, setMedicineName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [message, setMessage] = useState('');

  const { theme } = useTheme();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      // Simulating extraction of medicine name and expiry date
      setMedicineName('Sample Medicine');
      setExpiryDate('2024-12-31');
    }
  };

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating scan and save logic
    console.log(`Scanned ${medicineName} with expiry date ${expiryDate}`);
    setMessage('Medicine scanned and saved successfully');
    setFile(null);
    setMedicineName('');
    setExpiryDate('');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={true} username="John Doe" />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Scan Medicine</h1>
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <form onSubmit={handleScan}>
              <div className="mb-4">
                <label htmlFor="file" className="block mb-2">Upload Image</label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                  required
                />
              </div>
              {file && (
                <>
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
                  <div className="mb-6">
                    <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
                    <input
                      type="date"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Confirm and Save
                  </button>
                </>
              )}
            </form>
            {message && (
              <div className={`mt-4 p-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'} rounded`}>
                <p className={`${theme === 'dark' ? 'text-green-400' : 'text-green-800'}`}>{message}</p>
                <button
                  onClick={() => setMessage('')}
                  className={`mt-2 px-4 py-2 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-green-200 hover:bg-green-300'} rounded`}
                >
                  Okay
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScanPage;
