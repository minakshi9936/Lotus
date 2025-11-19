"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: "Banquet Hall – Premium Package",
      image: "/banquet.jpg",
      originalPrice: 35000,
      offerPrice: 25999,
      perPax: 799,
      capacity: "100–150 Guests",
      description:
        "A premium fully-decorated banquet hall perfect for weddings, engagements, corporate meets, and grand celebrations.",
      includes: [
        "Hall Decoration (Stage + Entrance)",
        "Complete Sound & Lighting Setup",
        "Buffet Arrangement",
        "Dedicated Event Manager",
        "Staff & Hospitality Team",
        "Basic Flower Decoration",
      ],
    },
    {
      id: 2,
      title: "Banquet Hall – Events & Parties Package",
      image: "https://www.crownbanquetnoida.com/assets/images/blogs/blog_37931740463871.jpeg",
      originalPrice: 25000,
      offerPrice: 17999,
      perPax: 799,
      capacity: "50–100 Guests",
      description:
        "Perfect for birthdays, anniversaries, kitty parties, family gatherings, small ceremonies, and corporate presentations.",
      includes: [
        "Theme-Based Decoration",
        "Music System & Microphone",
        "Buffet Arrangement",
        "Cake Table & Party Setup",
        "Staff & Service Team",
        "Photo Booth Area",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Banquet Hall Packages</h1>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Choose from our exclusive banquet packages designed for every occasion — weddings, 
          engagements, parties, corporate events, and more. Enjoy premium service, decoration, 
          and complete event management at unbeatable prices.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition p-5"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={800}
                height={500}
                className="rounded-lg h-64 w-full object-cover"
              />

              <h2 className="text-2xl font-bold mt-4">{pkg.title}</h2>
              <p className="text-gray-600 mt-2">{pkg.description}</p>

              <p className="mt-3 text-gray-700">
                <span className="font-semibold">Capacity:</span> {pkg.capacity}
              </p>

              <ul className="mt-4 text-gray-700 space-y-1">
                {pkg.includes.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <div className="mt-5">
                <p className="text-lg">
                  <span className="line-through text-gray-500 text-xl">₹{pkg.originalPrice}</span>
                  <span className="text-green-600 font-bold text-2xl ml-3">
                    ₹{pkg.offerPrice}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  (₹{pkg.perPax} per pax)
                </p>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
