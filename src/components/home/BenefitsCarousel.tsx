import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Building2, 
  Hospital, 
  GraduationCap, 
  ShoppingCart, 
  Shield, 
  BarChart3,
  Users,
  Clock,
  Accessibility,
  Globe,
  Zap,
  Award
} from 'lucide-react';

const BenefitsCarousel: React.FC = () => {
  const benefits = [
    {
      icon: Building2,
      title: 'Smart Buildings & Facilities',
      description: 'Room-level tracking for offices, campuses, hospitals, and malls',
      color: 'text-blue-500'
    },
    {
      icon: Hospital,
      title: 'Healthcare Navigation',
      description: 'Locate patients, staff, and equipment inside hospitals efficiently',
      color: 'text-green-500'
    },
    {
      icon: GraduationCap,
      title: 'Campus Solutions',
      description: 'Help students and visitors navigate complex university buildings',
      color: 'text-purple-500'
    },
    {
      icon: ShoppingCart,
      title: 'Retail Enhancement',
      description: 'Personalized customer navigation and in-store analytics',
      color: 'text-orange-500'
    },
    {
      icon: Shield,
      title: 'Emergency Management',
      description: 'Real-time tracking during evacuations in high-rise buildings',
      color: 'text-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track foot traffic patterns and optimize space utilization',
      color: 'text-indigo-500'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Designed for thousands of concurrent users',
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Live tracking and instant route adjustments',
    },
    {
      icon: Accessibility,
      title: 'Accessibility First',
      description: 'Wheelchair-friendly routes and voice guidance',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for English, Hindi, and more languages',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times for all queries',
    },
    {
      icon: Award,
      title: 'Enterprise Grade',
      description: 'Security and reliability for mission-critical applications',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From healthcare to retail, our indoor navigation technology revolutionizes 
            how people move through complex spaces.
          </p>
        </div>

        {/* Industries Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Industries We Serve</h3>
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="gradient-card border-none shadow-medium hover-lift h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <benefit.icon className={`w-16 h-16 mx-auto mb-4 ${benefit.color}`} />
                        <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Key Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Everything You Need</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass border-border/50 hover-lift transition-all duration-300 hover:shadow-glow"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="gradient-primary p-8 border-none shadow-strong">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join hundreds of organizations using MicroNav to improve navigation 
                and enhance user experience in their facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
                  Request Demo
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCarousel;