'use client';

import { RoomService, ChefHat, Waves, Sparkles, Users, Plane } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: RoomService,
      title: 'Room Service',
      description: '24/7 in-room dining with gourmet meals prepared by our expert chefs. Enjoy breakfast, lunch, dinner, and snacks delivered directly to your room with impeccable service.',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['24/7 Service', 'Gourmet Cuisine', 'Room Delivery', 'Special Dietary Options']
    },
    {
      icon: ChefHat,
      title: 'Restaurant & Bar',
      description: 'Experience world-class dining at our signature restaurant featuring international cuisine, a well-stocked bar with premium beverages, and stunning city views.',
      image: 'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['International Cuisine', 'Premium Bar', 'City Views', 'Private Dining']
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Relax in our temperature-controlled infinity pool with panoramic city views. Enjoy our poolside cabana service and rejuvenating poolside beverages.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Infinity Pool', 'Temperature Controlled', 'Poolside Service', 'City Views']
    },
    {
      icon: Sparkles,
      title: 'Spa & Wellness',
      description: 'Indulge in ultimate relaxation at our luxury spa featuring traditional and modern therapies, massage treatments, and wellness programs designed for rejuvenation.',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Massage Therapy', 'Wellness Programs', 'Traditional Treatments', 'Relaxation Areas']
    },
    {
      icon: Users,
      title: 'Conference Rooms',
      description: 'State-of-the-art conference facilities equipped with the latest technology, perfect for business meetings, conferences, and corporate events of any size.',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Latest Technology', 'Flexible Layouts', 'Business Support', 'Catering Services']
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      description: 'Convenient and comfortable airport transfer services with professional drivers and luxury vehicles. Book in advance for a seamless travel experience.',
      image: 'https://images.pexels.com/photos/1201772/pexels-photo-1201772.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Professional Drivers', 'Luxury Vehicles', '24/7 Service', 'Advance Booking']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Experience unparalleled luxury and convenience with our comprehensive range of premium services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From dining to wellness, every service is designed to exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white p-2 rounded-lg">
                    <service.icon size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Comprehensive support for all your needs during your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RoomService className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Concierge</h3>
              <p className="text-slate-600 text-sm">Personalized assistance for reservations and recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plane className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Transportation</h3>
              <p className="text-slate-600 text-sm">Airport shuttles, car rentals, and local transport</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Housekeeping</h3>
              <p className="text-slate-600 text-sm">Daily cleaning and maintenance services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Event Planning</h3>
              <p className="text-slate-600 text-sm">Wedding and special event coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Services
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Book your stay today and discover the difference our premium services can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
              Book Your Stay
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}