'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Hotel,
  ArrowLeft,
  Edit,
  Bed,
  Users,
  DollarSign,
  Save,
  X
} from 'lucide-react';
import { rooms, Room } from '@/data/hotelData';

export default function AdminRooms() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roomsData, setRoomsData] = useState<Room[]>(rooms);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!authenticated) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleEditRoom = (room: Room) => {
    setEditingRoom({ ...room });
    setIsEditDialogOpen(true);
  };

  const handleSaveRoom = () => {
    if (editingRoom) {
      setRoomsData(prev => prev.map(room =>
        room.id === editingRoom.id ? editingRoom : room
      ));
      setIsEditDialogOpen(false);
      setEditingRoom(null);
      // In a real app, this would save to a database
      alert('Room updated successfully!');
    }
  };

  const handleCancelEdit = () => {
    setEditingRoom(null);
    setIsEditDialogOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Hotel className="text-green-400" size={32} />
              <div>
                <h1 className="text-xl font-bold text-white">LotusHotel Admin</h1>
                <p className="text-sm text-slate-400">Room Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Room Management</h2>
          <p className="text-slate-400">Manage hotel rooms, pricing, and availability</p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomsData.map((room) => (
            <Card key={room.id} className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={room.category === 'Deluxe' ? 'default' : room.category === 'Executive' ? 'secondary' : 'outline'}
                    className={
                      room.category === 'Deluxe'
                        ? 'bg-green-500 text-black'
                        : room.category === 'Executive'
                        ? 'bg-purple-500 text-white'
                        : 'border-slate-600 text-slate-300'
                    }
                  >
                    {room.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-lg">{room.name}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {room.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditRoom(room)}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-semibold">${room.price}</span>
                      <span className="text-sm text-slate-400">/night</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-300 mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {amenity}
                        </Badge>
                      ))}
                      {room.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          +{room.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Room Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-white">Edit Room</DialogTitle>
              <DialogDescription className="text-slate-400">
                Update room details and pricing information
              </DialogDescription>
            </DialogHeader>

            {editingRoom && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Room Name</Label>
                    <Input
                      id="name"
                      value={editingRoom.name}
                      onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-slate-300">Price per Night ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={editingRoom.price}
                      onChange={(e) => setEditingRoom({ ...editingRoom, price: parseInt(e.target.value) || 0 })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-slate-300">Description</Label>
                  <Textarea
                    id="description"
                    value={editingRoom.description}
                    onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="capacity" className="text-slate-300">Capacity</Label>
                    <Input
                      id="capacity"
                      value={editingRoom.capacity}
                      onChange={(e) => setEditingRoom({ ...editingRoom, capacity: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedType" className="text-slate-300">Bed Type</Label>
                    <Input
                      id="bedType"
                      value={editingRoom.bedType}
                      onChange={(e) => setEditingRoom({ ...editingRoom, bedType: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Amenities (comma-separated)</Label>
                  <Input
                    value={editingRoom.amenities.join(', ')}
                    onChange={(e) => setEditingRoom({
                      ...editingRoom,
                      amenities: e.target.value.split(',').map(a => a.trim()).filter(a => a)
                    })}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Free WiFi, LED TV, Air Conditioning"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleCancelEdit}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveRoom}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}