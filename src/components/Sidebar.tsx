import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, ScanLine, Bell } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <aside className={`w-64 h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center">
              <LayoutDashboard className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/items" className="flex items-center">
              <Package className="mr-2" />
              Items
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/purchase" className="flex items-center">
              <ShoppingCart className="mr-2" />
              Purchase
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/scan" className="flex items-center">
              <ScanLine className="mr-2" />
              Scan
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/notifications" className="flex items-center">
              <Bell className="mr-2" />
              Notification
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;