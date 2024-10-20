import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Trash2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Medicine {
  id: number;
  name: string;
}

const ItemPage: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: 1, name: 'Aspirin' },
    { id: 2, name: 'Ibuprofen' },
    { id: 3, name: 'Paracetamol' },
  ]);

  const { theme } = useTheme();

  const handleDelete = (id: number) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={true} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Items</h1>
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
            <table className="w-full">
              <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Medicine Name</th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {medicines.map((medicine) => (
                  <tr key={medicine.id} className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">{medicine.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ItemPage;