'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Gallery
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover the beauty and elegance of our hotel through stunning visuals of our facilities and services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group aspect-square animate-in fade-in zoom-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.url}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain animate-in zoom-in duration-300"
            />
          </div>
        )}
      </div>
    </section>
  );
}
