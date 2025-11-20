'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/room' },
    { name: 'Services', href: '/service' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Packages', href: '/packages' },
    { name: 'Order', href: 'https://lotus-palace.vercel.app/'},
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/lotuslogo.png"
              alt="Lotus Hotel"
              width={140}
              height={90}
              priority
              className="h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href='/contact'>
            <button
              className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
              Book Now
            </button>
            </Link>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-slate-700 hover:text-green-600 font-medium transition-colors border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link href='/contact'>
            <button
              className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
              Book Now
            </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
