'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function Hero() {
  const router = useRouter();

  const handleBookNow = () => {
    // Placeholder WhatsApp number - replace with actual number
    const phoneNumber = '+1234567890';
    const message = 'Hello, I would like to book a room. Please provide more details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleExploreRooms = () => {
    router.push('/room');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Lotus
              <span className="block text-amber-400 mt-2">Where Luxury Meets Celebration</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-lg">
              Discover premium accommodations, state-of-the-art banquet facilities, and exceptional service. From memorable weddings to corporate retreats, we create unforgettable experiences in the heart of Lucknow
            </p>
            <Button
              onClick={handleExploreRooms}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Rooms
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Right Side - Booking Card */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white text-center mb-6">Book Your Stay</h3>

                {/* Check-in Date */}
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-white font-medium">Check-in Date</Label>
                  <div className="relative">
                    <Input
                      id="checkin"
                      type="date"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-amber-400"
                      placeholder="Select check-in date"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
                  </div>
                </div>

                {/* Check-out Date */}
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-white font-medium">Check-out Date</Label>
                  <div className="relative">
                    <Input
                      id="checkout"
                      type="date"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-amber-400"
                      placeholder="Select check-out date"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-white font-medium">Number of Guests</Label>
                  <div className="relative">
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-amber-400">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 z-10" size={18} />
                  </div>
                </div>

                {/* Book Now Button */}
                <Button
                  onClick={handleBookNow}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
