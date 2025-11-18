import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

import { BedDouble, Utensils, Waves, HeartPulse, Presentation, Plane } from "lucide-react";

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
      title: "Restaurant & Bar",
      desc: "Enjoy fine dining with world-class cuisine and a refreshing bar atmosphere.",
      delay: 100,
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      desc: "Relax and unwind in our clean, temperature-controlled luxurious swimming pool.",
      delay: 200,
    },
    {
      icon: HeartPulse,
      title: "Spa & Wellness",
      desc: "Rejuvenate your body and mind with professional spa and wellness treatments.",
      delay: 300,
    },
    {
      icon: Presentation,
      title: "Conference Rooms",
      desc: "Spacious and well-equipped conference halls for business events and meetings.",
      delay: 400,
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      desc: "Hassle-free pickup and drop service to and from the airport for all guests.",
      delay: 500,
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experience comfort, luxury, and world-class hospitality with our premium services.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 text-center animate-in fade-in zoom-in"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <item.icon size={50} className="mx-auto mb-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
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
