import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Moon, Sun, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Industries', path: '/industries' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-xl shadow-strong border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary-glow p-3 rounded-xl shadow-strong group-hover:shadow-glow transition-all duration-300">
                <Navigation className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold royal-accent premium-text">
                MicroNav
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                Premium Navigation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant="nav"
                  size="lg"
                  className={`premium-text transition-all duration-300 relative overflow-hidden ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-accent font-semibold shadow-medium' 
                      : 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-accent hover:shadow-soft'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/30 to-accent/30 animate-luxury-glow"></div>
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="transition-all duration-300 hover:bg-accent/20"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-180" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 hover:rotate-180" />
              )}
            </Button>

            {/* Premium Get Started Button */}
            <Button 
              variant="premium" 
              size="lg"
              className="hidden sm:flex animate-luxury-glow premium-text tracking-wide"
              asChild
            >
              <Link to="/dashboard">
                <MapPin className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2 animate-nav-slide">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-accent/20 text-accent'
                      : 'text-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full mt-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;