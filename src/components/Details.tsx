"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

const details = [
  {
    title: "Traditional Wedding",
    time: "Saturday, March 28, 2026 | 7:00 AM",
    location: "Dictatorate of Christian Education Hall, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
  {
    title: "White Wedding",
    time: "Saturday, March 28, 2026 | 11:00 AM",
    location: "RCCG Gate of Heaven Zonal HQTS, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
  {
    title: "The Reception",
    time: "Saturday, March 28, 2026 | 1:00 PM",
    location: "Dictatorate of Christian Education Hall, Mowe, Ogun State",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1!2d3.4!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  },
];

export default function Details() {
  return (
    <section id="details" className="py-24 md:py-40 bg-champagne/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Where & When</span>
          <h2 className="text-4xl md:text-6xl font-serif">Wedding Details</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-ivory p-8 md:p-12 rounded-sm shadow-sm border border-gold/5 text-center flex flex-col items-center"
            >
              <h3 className="text-3xl font-serif mb-8">{detail.title}</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex flex-col items-center">
                  <Calendar className="text-gold mb-2" size={20} />
                  <p className="text-charcoal uppercase tracking-widest text-sm">{detail.time.split('|')[0].trim()}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="text-gold mb-2" size={20} />
                  <p className="text-charcoal uppercase tracking-widest text-sm">{detail.time.split('|')[1].trim()}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="text-gold mb-2" size={20} />
                  <p className="text-charcoal uppercase tracking-widest text-sm">{detail.location}</p>
                </div>
              </div>

              <div className="w-full h-64 relative rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src={detail.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-t border-gold/10 pt-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-8 block">Color of the Day</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-charcoal/10 mb-4 shadow-sm" />
              <p className="text-xs uppercase tracking-widest font-light">White</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#1e40af] mb-4 shadow-sm" />
              <p className="text-xs uppercase tracking-widest font-light">Blue</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c8a2c8] mb-4 shadow-sm" />
              <p className="text-xs uppercase tracking-widest font-light">Lilac</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#98ff98] mb-4 shadow-sm" />
              <p className="text-xs uppercase tracking-widest font-light">Mint Green</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
