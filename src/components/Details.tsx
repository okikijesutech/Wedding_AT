"use client";

import { useState } from "react";
import { motion as m, AnimatePresence as Ap } from "framer-motion";
import { MapPin, Calendar, Clock, X, Map as MapIcon, ChevronRight } from "lucide-react";

// --- Types & Data ---

const details = [
  {
    title: "Traditional Wedding",
    date: "Saturday",
    day: "28",
    month: "MARCH",
    year: "2026",
    time: "07:00 AM",
    location: "Dictatorate of Christian Education Hall, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
  {
    title: "White Wedding",
    date: "Saturday",
    day: "28",
    month: "MARCH",
    year: "2026",
    time: "11:00 AM",
    location: "RCCG Gate of Heaven Zonal HQTS, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
  {
    title: "The Reception",
    date: "Saturday",
    day: "28",
    month: "MARCH",
    year: "2026",
    time: "01:00 PM",
    location: "Dictatorate of Christian Education Hall, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
];

const Swatch = ({ name, color }: { name: string, color: string }) => (
  <m.div 
    whileHover={{ y: -10 }}
    className="flex flex-col items-center group"
  >
    <div 
      style={{ backgroundColor: color }}
      className="w-20 h-28 rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-white/40 relative overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-white/20 backdrop-blur-sm" />
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-charcoal/60">{name}</span>
  </m.div>
);

// --- Main Component ---

export default function Details() {
  const [activeMap, setActiveMap] = useState<string | null>(null);

  const Modal = ({ url, onClose }: { url: string, onClose: () => void }) => (
    <Ap>
      {url && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
          />
          <m.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-4xl bg-white rounded-sm shadow-2xl overflow-hidden aspect-video lg:aspect-[16/9]"
          >
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={onClose}
                className="p-2 bg-charcoal text-white rounded-full hover:bg-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </m.div>
        </div>
      )}
    </Ap>
  );

  return (
    <section id="details" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">The Celebration</span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-charcoal">Save The Date</h2>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-0 border border-charcoal/5 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/5">
          {details.map((detail, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group relative p-12 md:p-20 flex flex-col items-center bg-white hover:bg-charcoal transition-all duration-700"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-12 group-hover:text-gold/80 transition-colors">
                {detail.month} {detail.year}
              </span>

              <div className="flex flex-col items-center mb-12">
                <span className="text-xs uppercase tracking-widest text-charcoal/40 group-hover:text-white/40 transition-colors mb-2">
                  {detail.date}
                </span>
                <span className="text-6xl font-serif text-charcoal group-hover:text-white transition-colors leading-none">
                  {detail.day}
                </span>
              </div>

              <div className="h-24 flex flex-col items-center justify-center text-center px-4 mb-16">
                <h3 className="text-3xl font-serif mb-4 text-charcoal group-hover:text-white transition-colors">
                  {detail.title}
                </h3>
                <div className="flex items-center gap-2 text-gold">
                  <Clock size={16} />
                  <span className="text-xs uppercase tracking-widest font-medium">
                    {detail.time}
                  </span>
                </div>
              </div>

              <div className="text-center space-y-4 mb-12">
                <div className="flex justify-center text-gold group-hover:text-white/60 transition-colors">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <p className="text-xs text-charcoal-light group-hover:text-white/70 transition-colors leading-loose max-w-[200px] uppercase tracking-wider font-light">
                  {detail.location}
                </p>
              </div>

              <button 
                onClick={() => setActiveMap(detail.mapUrl)}
                className="mt-auto flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-medium text-gold py-5 px-10 border border-gold/20 group-hover:border-white/20 group-hover:text-white transition-all duration-300"
              >
                View Map <ChevronRight size={14} />
              </button>

              {/* Decorative side accent */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gold/10 hidden lg:block" />
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 space-y-16"
        >
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">Event Palette</span>
            <h3 className="text-3xl md:text-4xl font-serif">Color of the Day</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            <Swatch name="White" color="#FFFFFF" />
            <Swatch name="Royal Blue" color="#1e40af" />
            <Swatch name="Lilac Mist" color="#c8a2c8" />
            <Swatch name="Mint Bloom" color="#98ff98" />
          </div>

          <div className="max-w-2xl mx-auto p-12 bg-charcoal text-center rounded-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-gold/5 opacity-50" />
             <div className="relative z-10">
               <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block font-medium italic">
                 For our dear guests
               </span>
               <p className="text-white/70 font-light leading-loose text-sm italic">
                  &quot;We look forward to seeing the beautiful symphony of these colors on our special day. 
                  Your presence adds the most vibrant color of all to our celebration.&quot;
               </p>
             </div>
          </div>
        </m.div>
      </div>

      <Modal 
        url={activeMap || ""} 
        onClose={() => setActiveMap(null)} 
      />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
