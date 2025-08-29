import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  QrCode, 
  Search, 
  Navigation, 
  History, 
  Settings,
  AlertTriangle,
  Clock,
  Target,
  Route
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Building A - Floor 2 - Room 205');

  const recentSearches = [
    { query: "Prof. Sharma's office", result: "Room 302, Building B", time: "2 mins ago" },
    { query: "Library", result: "Building C, Floor 1", time: "15 mins ago" },
    { query: "Cafeteria", result: "Building A, Ground Floor", time: "1 hour ago" },
  ];

  const quickActions = [
    { icon: QrCode, label: 'Scan QR Code', action: 'scan' },
    { icon: Search, label: 'Voice Search', action: 'voice' },
    { icon: AlertTriangle, label: 'Report Issue', action: 'report' },
    { icon: Settings, label: 'Settings', action: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Find your way around with AI-powered navigation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Navigation Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Interface */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Ask MicroNav
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      placeholder="Where would you like to go? (e.g., 'Prof. Smith's office')"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-12"
                    />
                    <Button 
                      size="sm" 
                      className="absolute right-1 top-1 h-8"
                      variant="hero"
                    >
                      <Navigation className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {['Library', 'Cafeteria', 'Admin Office', 'Parking'].map((suggestion) => (
                      <Button 
                        key={suggestion} 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSearchQuery(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Location & Map */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Your Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <div>
                      <p className="font-medium">{currentLocation}</p>
                      <p className="text-sm text-muted-foreground">Detected 30 seconds ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <QrCode className="w-4 h-4 mr-2" />
                      Update Location
                    </Button>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Interactive map will load here</p>
                      <p className="text-sm text-muted-foreground">Showing your current location and routes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Recent Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-accent/10 rounded-lg transition-colors">
                      <div>
                        <p className="font-medium">"{search.query}"</p>
                        <p className="text-sm text-muted-foreground">{search.result}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{search.time}</p>
                        <Button variant="ghost" size="sm">
                          <Route className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 flex flex-col gap-1 hover-lift"
                    >
                      <action.icon className="w-5 h-5" />
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Stats */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Today's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Locations Visited</span>
                    <span className="font-bold text-xl">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Distance Walked</span>
                    <span className="font-bold text-xl">2.1 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Time Saved</span>
                    <span className="font-bold text-xl text-green-600">15 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings Panel */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="navigation" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="navigation">Navigation</TabsTrigger>
                    <TabsTrigger value="accessibility">Access</TabsTrigger>
                  </TabsList>
                  <TabsContent value="navigation" className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Voice Guidance</span>
                      <Button variant="outline" size="sm">On</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Shortest Route</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="accessibility" className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Wheelchair Accessible</span>
                      <Button variant="outline" size="sm">Off</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Avoid Stairs</span>
                      <Button variant="outline" size="sm">Off</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;