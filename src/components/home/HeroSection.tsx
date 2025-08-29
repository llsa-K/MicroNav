import React, { useState } from 'react';
import { Search, MapPin, QrCode, Navigation, ArrowRight, Building, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-navigation.jpg';
import corporateImage from '@/assets/corporate-interior.jpg';
import hospitalImage from '@/assets/hospital-corridor.jpg';
import campusImage from '@/assets/campus-interior.jpg';

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
      {/* Premium Background with Hero Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium Indoor Navigation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
      </div>
      
      {/* Luxury Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/30 rounded-full blur-3xl animate-float shadow-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float shadow-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/40 rounded-full blur-2xl animate-luxury-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          {/* Premium Main Heading */}
          <h1 className="luxury-heading text-white mb-8 leading-tight">
            Navigate
            <span className="block royal-accent mt-2">Indoor Spaces</span>
            <span className="block text-4xl md:text-6xl font-light text-white/90 mt-4">Effortlessly</span>
          </h1>

          {/* Luxury Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed premium-text">
            Premium AI-powered indoor navigation for exclusive venues, luxury campuses, and corporate headquarters. 
            Experience unparalleled guidance with natural language queries and instant QR positioning.
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

          {/* Premium Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Navigation,
                title: 'Intelligent Routing',
                description: 'AI-powered pathfinding with premium accessibility features',
                image: corporateImage
              },
              {
                icon: QrCode,
                title: 'Instant Positioning',
                description: 'Advanced QR code technology for precise location detection',
                image: hospitalImage
              },
              {
                icon: Search,
                title: 'Natural Interaction',
                description: 'Sophisticated natural language processing for intuitive queries',
                image: campusImage
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative glass p-8 rounded-3xl hover-lift animate-slide-in-right overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-xl"></div>
                    <feature.icon className="absolute bottom-3 right-3 w-8 h-8 text-white shadow-glow" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 premium-text">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
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