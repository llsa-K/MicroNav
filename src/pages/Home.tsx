import React from 'react';
import { useTheme } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import BenefitsCarousel from '@/components/home/BenefitsCarousel';

const Home: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <BenefitsCarousel />
    </div>
  );
};

export default Home;