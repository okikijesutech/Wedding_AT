"use client";

import Link from "next/link";
import { Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-ivory border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Ajibola & Tolulope</h2>
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-12">07 . 03 . 2026</p>
          <div className="flex justify-center items-center space-x-2 text-charcoal/50">
            <span>Made with</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>for their special day</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left border-t border-gold/5 pt-16">
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-charcoal-light">
              <li><Link href="#home" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#story" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="#details" className="hover:text-gold transition-colors">Wedding</Link></li>
              <li><Link href="#rsvp" className="hover:text-gold transition-colors">RSVP</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Connect</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="p-3 bg-champagne/20 rounded-full text-gold hover:bg-gold hover:text-ivory transition-all duration-300">
                <Mail size={18} />
              </a>
              <a href="#" className="p-3 bg-champagne/20 rounded-full text-gold hover:bg-gold hover:text-ivory transition-all duration-300">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Hashtag</h4>
            <p className="text-2xl font-serif text-gold">#AjibolaTolulope2026</p>
          </div>
        </div>

        <div className="mt-24 text-center text-xs uppercase tracking-[0.2em] text-charcoal/30">
          &copy; 2026 Ajibola & Tolulope Wedding Site. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
