import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

import {
  BedDouble,
  Utensils,
  Waves,
  HeartPulse,
  Presentation,
  Plane,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: BedDouble,
      title: "Room Service",
      desc: "24/7 room service to ensure comfort, convenience, and a delightful stay experience.",
      delay: 0,
    },
    {
      icon: Utensils,
      title: "Restaurant ",
      desc: "Enjoy fine dining with world-class cuisine and a refreshing bar atmosphere.",
      delay: 100,
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      desc: "Relax and unwind in our clean, temperature-controlled luxurious swimming pool.",
      delay: 200,
    },
    
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* PAGE HEADING */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experience comfort, luxury, and world-class hospitality with our premium services.
            </p>
          </div>

          {/* 🔥 NEW TWO BIG CARDS BELOW HEADING */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">

            {/* CARD 1 → Rooms */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mq3JhvoO5r9B66CMj2ysDeKkZqUmUnRRzA&s"
                alt="Rooms"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">Rooms</h2>
                <p className="text-gray-600 mb-4">
                  Discover comfortable, luxurious, and premium category rooms
                  designed for a relaxing stay.
                </p>

                <Link href="/room">
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900">
                    View
                  </button>
                </Link>
              </div>
            </div>

            {/* CARD 2 → Packages */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <Image
                src="/banquet.jpg"
                alt="Banquet Hall"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">Packages</h2>
                <p className="text-gray-600 mb-4">
                  Banquet hall for parties, birthdays, marriages, engagements & corporate meetings.
                </p>

                <Link href="/packages">
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900">
                    View
                  </button>
                </Link>
              </div>
            </div>

          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 text-center animate-in fade-in zoom-in"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <item.icon size={50} className="mx-auto mb-6 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
