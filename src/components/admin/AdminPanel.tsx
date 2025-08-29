import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Map, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Users, 
  BarChart3,
  Settings,
  MapPin,
  Route
} from 'lucide-react';

interface MapNode {
  id: string;
  name: string;
  type: 'room' | 'hallway' | 'entrance' | 'elevator' | 'stairway';
  coordinates: { x: number; y: number };
  floor: number;
  accessible: boolean;
  qrCode?: string;
}

interface MapEdge {
  id: string;
  start: string;
  end: string;
  distance: number;
  accessible: boolean;
}

const AdminPanel: React.FC = () => {
  const [nodes, setNodes] = useState<MapNode[]>([
    {
      id: '1',
      name: 'Main Entrance',
      type: 'entrance',
      coordinates: { x: 100, y: 100 },
      floor: 1,
      accessible: true,
      qrCode: 'QR001'
    },
    {
      id: '2',
      name: 'Conference Room A',
      type: 'room',
      coordinates: { x: 200, y: 150 },
      floor: 1,
      accessible: true,
      qrCode: 'QR002'
    }
  ]);

  const [edges, setEdges] = useState<MapEdge[]>([
    {
      id: 'e1',
      start: '1',
      end: '2',
      distance: 50,
      accessible: true
    }
  ]);

  const [newNode, setNewNode] = useState<Partial<MapNode>>({
    name: '',
    type: 'room',
    coordinates: { x: 0, y: 0 },
    floor: 1,
    accessible: true
  });

  const [newEdge, setNewEdge] = useState<Partial<MapEdge>>({
    start: '',
    end: '',
    distance: 0,
    accessible: true
  });

  const addNode = () => {
    if (newNode.name && newNode.coordinates) {
      const node: MapNode = {
        id: Date.now().toString(),
        name: newNode.name,
        type: newNode.type || 'room',
        coordinates: newNode.coordinates,
        floor: newNode.floor || 1,
        accessible: newNode.accessible || true,
        qrCode: `QR${Date.now()}`
      };
      setNodes([...nodes, node]);
      setNewNode({
        name: '',
        type: 'room',
        coordinates: { x: 0, y: 0 },
        floor: 1,
        accessible: true
      });
    }
  };

  const addEdge = () => {
    if (newEdge.start && newEdge.end && newEdge.distance) {
      const edge: MapEdge = {
        id: Date.now().toString(),
        start: newEdge.start,
        end: newEdge.end,
        distance: newEdge.distance,
        accessible: newEdge.accessible || true
      };
      setEdges([...edges, edge]);
      setNewEdge({
        start: '',
        end: '',
        distance: 0,
        accessible: true
      });
    }
  };

  const deleteNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id));
    setEdges(edges.filter(edge => edge.start !== id && edge.end !== id));
  };

  const deleteEdge = (id: string) => {
    setEdges(edges.filter(edge => edge.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage maps, nodes, and navigation data for MicroNav
          </p>
        </div>

        <Tabs defaultValue="maps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="maps" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              Maps
            </TabsTrigger>
            <TabsTrigger value="nodes" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nodes
            </TabsTrigger>
            <TabsTrigger value="edges" className="flex items-center gap-2">
              <Route className="w-4 h-4" />
              Paths
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="maps" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="mapFile">Map Image</Label>
                    <Input id="mapFile" type="file" accept="image/*" />
                  </div>
                  <div>
                    <Label htmlFor="mapName">Map Name</Label>
                    <Input id="mapName" placeholder="e.g., Building A - Floor 1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="building">Building</Label>
                      <Input id="building" placeholder="Building name" />
                    </div>
                    <div>
                      <Label htmlFor="floor">Floor</Label>
                      <Input id="floor" type="number" placeholder="1" />
                    </div>
                  </div>
                  <Button className="w-full" variant="hero">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Map
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Maps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <p className="font-medium">Building A - Floor 1</p>
                        <p className="text-sm text-muted-foreground">12 nodes, 15 paths</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <p className="font-medium">Building A - Floor 2</p>
                        <p className="text-sm text-muted-foreground">8 nodes, 10 paths</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="nodes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Node
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="nodeName">Node Name</Label>
                    <Input 
                      id="nodeName" 
                      value={newNode.name || ''} 
                      onChange={(e) => setNewNode({...newNode, name: e.target.value})}
                      placeholder="e.g., Conference Room A" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nodeX">X Coordinate</Label>
                      <Input 
                        id="nodeX" 
                        type="number" 
                        value={newNode.coordinates?.x || 0}
                        onChange={(e) => setNewNode({
                          ...newNode, 
                          coordinates: {
                            ...newNode.coordinates!,
                            x: parseInt(e.target.value) || 0
                          }
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="nodeY">Y Coordinate</Label>
                      <Input 
                        id="nodeY" 
                        type="number" 
                        value={newNode.coordinates?.y || 0}
                        onChange={(e) => setNewNode({
                          ...newNode,
                          coordinates: {
                            ...newNode.coordinates!,
                            y: parseInt(e.target.value) || 0
                          }
                        })}
                      />
                    </div>
                  </div>
                  <Button onClick={addNode} className="w-full" variant="hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Node
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Nodes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {nodes.map((node) => (
                      <div key={node.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <div>
                          <p className="font-medium">{node.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Floor {node.floor} • ({node.coordinates.x}, {node.coordinates.y})
                          </p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => deleteNode(node.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="edges" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Path
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startNode">Start Node</Label>
                      <select 
                        id="startNode"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        value={newEdge.start || ''}
                        onChange={(e) => setNewEdge({...newEdge, start: e.target.value})}
                      >
                        <option value="">Select start node</option>
                        {nodes.map(node => (
                          <option key={node.id} value={node.id}>{node.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="endNode">End Node</Label>
                      <select 
                        id="endNode"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        value={newEdge.end || ''}
                        onChange={(e) => setNewEdge({...newEdge, end: e.target.value})}
                      >
                        <option value="">Select end node</option>
                        {nodes.map(node => (
                          <option key={node.id} value={node.id}>{node.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="distance">Distance (meters)</Label>
                    <Input 
                      id="distance" 
                      type="number" 
                      value={newEdge.distance || 0}
                      onChange={(e) => setNewEdge({...newEdge, distance: parseFloat(e.target.value) || 0})}
                      placeholder="Distance in meters" 
                    />
                  </div>
                  <Button onClick={addEdge} className="w-full" variant="hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Path
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {edges.map((edge) => {
                      const startNode = nodes.find(n => n.id === edge.start);
                      const endNode = nodes.find(n => n.id === edge.end);
                      return (
                        <div key={edge.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <div>
                            <p className="font-medium">
                              {startNode?.name} → {endNode?.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {edge.distance}m • {edge.accessible ? 'Accessible' : 'Not accessible'}
                            </p>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => deleteEdge(edge.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Daily Queries</p>
                      <p className="text-2xl font-bold">456</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Maps</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Map className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">QR Scans</p>
                      <p className="text-2xl font-bold">89</p>
                    </div>
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;