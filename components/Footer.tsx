'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/room' },
    { name: 'Services', href: '/service' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin Panel', href: '/admin/login' },
  ];

  const services = [
    'Room Service',
    'Restaurant',
    'Swimming Pool',
    'Banquet hall'
  ];

  return (
    <footer id="contact" className="bg-[#b6e3c5] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <div className="mb-4">
              <Image
                src="/lotuslogo.png"
                alt="Lotus Hotel Logo"
                width={200}
                height={100}
                priority
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience luxury and comfort at its finest. Your perfect getaway destination awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hotel_lotuspalace?igsh=MWxraGg2NmpidXB6Mg"
                className="bg-slate-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
             
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4 text-green-600">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-green-400 transition-colors inline-block hover:translate-x-2 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4 text-green-600">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold mb-4 text-green-600">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-400">
                  1/84, Viraj Khand, Gomti Nagar, Lucknow-226010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400 flex-shrink-0" size={20} />
                <a href="tel:+9565799909" className="text-slate-400 hover:text-green-400 transition-colors">
                  +91 9565799909
                </a>
                
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400 flex-shrink-0" size={20} />
                <a href="mailto:info@citywitty.com" className="text-slate-400 hover:text-green-400 transition-colors">
                  supreet.bps@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Lotus. All rights reserved. Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
