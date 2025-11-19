export interface Room {
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

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Cozy Standard Room',
    category: 'Basic',
    price: 2000,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious suite with modern furnishings, city views, and enhanced comfort for a memorable stay.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning'],
    capacity: '3 Guests',
    bedType: 'King Bed',
  },
  {
    id: 3,
    name: 'Budget friendly',
    category: 'Executive',
    price: 999,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Designed for business travelers with workspace, high-speed internet, and executive amenities.',
    amenities: ['Free WiFi','Air Conditioning'],
    capacity: '2 Guests',
    bedType: 'Double Bed',
  },
 
];

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Lobby',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Infinity Pool',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fine Dining',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Spa & Wellness',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Rooftop Bar',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Conference Hall',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Garden View',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Suite Interior',
  },
];
