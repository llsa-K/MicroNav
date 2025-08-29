import React, { useState } from 'react';
import { Search, MapPin, QrCode, Navigation, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Navigate
            <span className="block text-primary-glow">Indoor Spaces</span>
            <span className="text-4xl md:text-5xl font-light">Effortlessly</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered indoor navigation for campuses, hospitals, and corporate buildings. 
            Ask questions naturally, scan QR codes, and get step-by-step directions.
          </p>

          {/* Search Interface */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-strong">
                <Search className="w-6 h-6 text-white/70 ml-4" />
                <Input
                  type="text"
                  placeholder="Ask anything... 'Where is Prof. Sharma's office?'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-white/70 text-lg focus:ring-0 focus:outline-none"
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="mr-2 hover-glow"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="premium" size="lg" className="hover-lift">
              <MapPin className="w-5 h-5 mr-2" />
              Start Navigation
            </Button>
            <Button variant="glass" size="lg" className="hover-lift">
              <QrCode className="w-5 h-5 mr-2" />
              Scan Location
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Navigation,
                title: 'Smart Routing',
                description: 'AI-powered pathfinding with accessibility options'
              },
              {
                icon: QrCode,
                title: 'QR Positioning',
                description: 'Instant location detection via QR code scanning'
              },
              {
                icon: Search,
                title: 'Natural Language',
                description: 'Ask questions in plain English, get instant results'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover-lift animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-10 h-10 text-primary-glow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;