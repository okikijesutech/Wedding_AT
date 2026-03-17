"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const weddingParty = [
  {
    name: "Temidayo Oloye David",
    role: "Best Man",
    image: "/images/bestman.jpeg",
  },
  {
    name: "Oluwatobiloba joel-ola Helen",
    role: "Maid of Honor",
    image: "/images/bestlady.jpeg",
  }
];

export default function WeddingParty() {
  return (
    <section id="party" className="py-24 md:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">The Wedding Party</span>
          <h2 className="text-4xl md:text-6xl font-serif">Bridesmaids & Groomsmen</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {weddingParty.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group w-full max-w-[280px]"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-1">{person.name}</h3>
              <p className="text-xs md:text-sm uppercase tracking-widest text-gold font-light">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
