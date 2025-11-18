import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

import { Award, Users, MapPin, Star, Coffee, BedDouble, Wifi, Shield } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Users, value: '50K+', label: 'Happy Guests' },
    { icon: MapPin, value: '15', label: 'Prime Locations' },
    { icon: Star, value: '4.9', label: 'Guest Rating' },
  ];

  const features = [
    { icon: BedDouble, title: "Luxurious Rooms", desc: "Designed for comfort with premium interiors and modern facilities." },
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected anywhere in the hotel with our seamless Wi-Fi." },
    { icon: Coffee, title: "Fine Dining", desc: "Experience world-class cuisines crafted by award-winning chefs." },
    { icon: Shield, title: "Secure Stay", desc: "24/7 security, CCTV surveillance, and safe access to ensure your safety." },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb />

      <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* IMAGE SECTION */}
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

            {/* CONTENT SECTION */}
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                About Lotus Hotel
              </h2>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Welcome to Lotus Hotel, where luxury meets comfort. For over 15 years, we have
                been dedicated to providing exceptional hospitality experiences that create lasting
                memories for our guests.
              </p>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With a perfect blend of modern elegance, warm hospitality, and world-class services,
                Lotus Hotel stands as one of the most trusted names in the hospitality industry.
              </p>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 gap-6 mb-10">
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

             
            </div>
          </div>

          {/* MISSION & VISION */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to redefine luxury hospitality by offering unmatched comfort,
                exceptional dining experiences, and personalized services that make every guest
                feel at home.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                We aim to become the most preferred hotel brand globally by expanding our presence
                while maintaining our commitment to excellence, innovation, and heartfelt service.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Choose Lotus Hotel?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all animate-in fade-in zoom-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <item.icon className="text-amber-600 mb-4" size={36} />
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
