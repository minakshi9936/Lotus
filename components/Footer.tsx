'use client';

import Link from 'next/link';
import { Hotel, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

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
    'Restaurant & Bar',
    'Swimming Pool',
    'Spa & Wellness',
    'Conference Rooms',
    'Airport Transfer',
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="text-amber-400" size={32} />
              <span className="text-2xl font-bold">
                Lotus<span className="text-amber-400">Hotel</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience luxury and comfort at its finest. Your perfect getaway destination awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block hover:translate-x-2 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-400">
                  123, citywitty office
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-400 flex-shrink-0" size={20} />
                <a href="tel:+6389202030" className="text-slate-400 hover:text-amber-400 transition-colors">
                  +91 6389202030
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-400 flex-shrink-0" size={20} />
                <a href="mailto:info@citywitty.com" className="text-slate-400 hover:text-amber-400 transition-colors">
                  info@citywitty.com
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
