'use client';

import Link from 'next/link';
import { Award, Users, MapPin, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Users, value: '50K+', label: 'Happy Guests' },
    { icon: MapPin, value: '15', label: 'Prime Locations' },
    { icon: Star, value: '4.9', label: 'Guest Rating' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel Exterior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-700">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              About Lotus Hotel
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Welcome to Lotus Hotel, where luxury meets comfort. For over 15 years, we have been dedicated to providing exceptional hospitality experiences that create lasting memories for our guests.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our commitment to excellence is reflected in every detail, from our elegantly designed rooms to our world-class amenities. We pride ourselves on delivering personalized service that exceeds expectations and makes every stay unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-in fade-in zoom-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="text-amber-600 mb-3" size={32} />
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
