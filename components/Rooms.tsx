'use client';

import { useState } from 'react';
import { Wifi, Tv, Coffee, Wind, Users, Bed } from 'lucide-react';
import RoomDetailsModal from './RoomDetailsModal';

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

const rooms: Room[] = [
   {
    id: 1,
    name: 'Cozy Standard Room',
    category: 'Executive',
    price: 2000,
    image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638916/Screenshot_2025-11-19-16-42-33-87_6012fa4d4ddec268fc5c7112cbb265e7_wvpokz.jpg',
    description: 'Perfect for solo travelers or couples seeking comfort and affordability with essential amenities.',
    amenities: ['Free WiFi', 'LED TV', 'Air Conditioning'],
    capacity: '2 Guests',
    bedType: 'double Bed',
  },
  {
    id: 2,
    name: 'Deluxe Suite',
    category: 'Deluxe',
    price: 2500,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious suite with modern furnishings, city views, and enhanced comfort for a memorable stay.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning'],
    capacity: '3 Guests',
    bedType: 'King Bed',
  },
  {
    id: 3,
    name: 'Budget friendly',
    category: 'Basic',
    price: 999,
    image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638916/Screenshot_2025-11-19-16-41-27-51_6012fa4d4ddec268fc5c7112cbb265e7_cft87p.jpg',
    description: 'Designed for business travelers with workspace, high-speed internet, and executive amenities.',
    amenities: ['Free WiFi','Air Conditioning'],
    capacity: '2 Guests',
    bedType: 'Double Bed',
  },
 
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

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
};

  return (
    <section id="rooms" className="py-16 md:py-24 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choose from our carefully curated selection of rooms designed to provide comfort, luxury, and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {room.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{room.bedType}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 line-clamp-2">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || Wifi;
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded"
                      >
                        <Icon size={14} />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleBookNow(room)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold group-hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RoomDetailsModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
