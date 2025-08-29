import React from 'react';
import { useTheme } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import UserDashboard from '@/components/dashboard/UserDashboard';

const Dashboard: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <UserDashboard />
    </div>
  );
};

export default Dashboard;