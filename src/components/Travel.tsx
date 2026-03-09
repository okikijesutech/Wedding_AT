"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, Car } from "lucide-react";

const recommendations = [
  {
    icon: <Plane size={24} />,
    title: "Travel Info",
    description: "For those flying in, Lagos International Airport (LOS) is the most convenient. We recommend booking flights at least 2 months in advance.",
  },
  {
    icon: <Hotel size={24} />,
    title: "Accommodations",
    description: "We've reserved a block of rooms at The Pearl Lagos. Mention 'Àjìbọ́lá & Olúwadárasími Wedding' for a special discount.",
    link: "#",
  },
  {
    icon: <Car size={24} />,
    title: "Getting Around",
    description: "Complimentary shuttle service will be provided between The Pearl Lagos and the Wedding Venue.",
  },
];

export default function Travel() {
  return (
    <section id="travel" className="py-24 md:py-40 bg-champagne/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Travel & Stays</span>
          <h2 className="text-4xl md:text-6xl font-serif">Travel Recommendations</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-ivory/50 p-12 border border-gold/10 rounded-sm text-center"
            >
              <div className="text-gold mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
              <p className="text-charcoal-light font-light leading-relaxed mb-6">{item.description}</p>
              {item.link && (
                <a href={item.link} className="text-xs uppercase tracking-widest text-gold hover:underline">Book Now</a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
