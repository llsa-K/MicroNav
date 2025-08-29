import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Moon, Sun, Navigation, User, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/layout/ThemeProvider';
import LoginModal from '@/components/auth/LoginModal';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const { user, logout, isAdmin } = useTheme();

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
    ...(isAdmin ? [{ name: 'Admin', path: '/admin' }] : []),
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

            {/* User Authentication */}
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
                  {isAdmin && <Shield className="w-4 h-4 text-primary" />}
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={logout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => setShowLogin(true)}
                className="hidden sm:flex animate-luxury-glow premium-text tracking-wide"
              >
                <User className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            )}

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
              {user ? (
                <div className="pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg bg-secondary/50">
                    {isAdmin && <Shield className="w-4 h-4 text-primary" />}
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="hero" 
                  onClick={() => {
                    setShowLogin(true);
                    setIsOpen(false);
                  }}
                  className="w-full mt-3"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </nav>
  );
};

export default Navbar;