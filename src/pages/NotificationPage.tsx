import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import { format, addDays } from 'date-fns';

interface Notification {
  id: number;
  medicineName: string;
  expiryDate: string;
}

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulating fetching notifications
    const fetchedNotifications = [
      { id: 1, medicineName: 'Aspirin', expiryDate: format(addDays(new Date(), 2), 'yyyy-MM-dd') },
      { id: 2, medicineName: 'Ibuprofen', expiryDate: format(addDays(new Date(), 5), 'yyyy-MM-dd') },
      { id: 3, medicineName: 'Paracetamol', expiryDate: format(addDays(new Date(), -1), 'yyyy-MM-dd') },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header isLoggedIn={true} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Notifications</h1>
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
            {notifications.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li key={notification.id} className={`p-4 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <p className="font-semibold">{notification.medicineName}</p>
                    <p className={`text-sm ${new Date(notification.expiryDate) < new Date() ? 'text-red-500' : 'text-yellow-500'}`}>
                      Expires on: {notification.expiryDate}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-4 text-center">No notifications at the moment.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotificationPage;
