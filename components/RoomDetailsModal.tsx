'use client';

import { Wifi, Tv, Coffee, Wind, Users, Bed } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Room {
  id: number;
  name: string;
  category: 'Basic' | 'Executive' | 'Deluxe';
  price: number;
  image: string;
  description: string;
  amenities: string[];
  capacity: string;
  bedType: string;
}

interface RoomDetailsModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors = {
  Basic: 'bg-blue-100 text-blue-800',
  Executive: 'bg-emerald-100 text-emerald-800',
  Deluxe: 'bg-green-100 text-green-800',
};

const amenityIcons: { [key: string]: any } = {
  'Free WiFi': Wifi,
  'LED TV': Tv,
  'Smart TV': Tv,
  'Home Theater': Tv,
  'Coffee Maker': Coffee,
  'Air Conditioning': Wind,
  'Mini Bar': Coffee,
  'Work Desk': Bed,
  'Jacuzzi': Wind,
  'Butler Service': Users,
  'Mini Fridge': Coffee,
  'Private Pool': Wind,
  'Chef Service': Users,
};

const handleBookNow = (room: Room) => {
  const message = `Hi, I'm interested in booking the ${room.name}. Price: ₹${room.price}/night. Capacity: ${room.capacity}. Bed Type: ${room.bedType}. Amenities: ${room.amenities.join(', ')}.`;
  const whatsappUrl = `https://wa.me/919565799909?text=${encodeURIComponent(message)}`; // Replace with actual WhatsApp number
  window.open(whatsappUrl, '_blank');
};

export default function RoomDetailsModal({ room, isOpen, onClose }: RoomDetailsModalProps) {
  if (!room) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {room.name}
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {room.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Room Image */}
          <div className="relative">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[room.category]}`}>
                {room.category}
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-green-600 font-bold text-lg">₹{room.price}</span>
              <span className="text-slate-600 text-sm">/night</span>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-4">
            {/* Capacity and Bed Type */}
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="font-medium">{room.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed size={18} />
                <span className="font-medium">{room.bedType}</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Amenities & Benefits</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Wifi;
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg"
                    >
                      <Icon size={16} />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-medium">Price per night:</span>
                <span className="text-2xl font-bold text-green-600">₹{room.price}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                * Prices may vary based on season and availability
              </p>
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => handleBookNow(room)}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Book Now via WhatsApp
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}