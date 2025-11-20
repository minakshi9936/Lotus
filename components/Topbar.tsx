'use client';

import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-slate-900 text-white py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a
            href="tel:+8299507456"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Phone size={16} />
            <span>+91 9792422803, 9565799909</span>
          </a>
          <a
            href="mailto:info@citywitty.com"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Mail size={16} />
            <span>supreet.bps@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-green-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/hotel_lotuspalace?igsh=MWxraGg2NmpidXB6Mg"
            className="hover:text-green-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        
        </div>
      </div>
    </div>
  );
}
