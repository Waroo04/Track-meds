import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import ItemPage from './pages/ItemPage';
import PurchasePage from './pages/PurchasePage';
import ScanPage from './pages/ScanPage';
import NotificationPage from './pages/NotificationPage';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUpPage />} />
          {isLoggedIn && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/items" element={<ItemPage />} />
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="/scan" element={<ScanPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;