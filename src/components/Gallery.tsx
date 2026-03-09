"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/Photoshoot 1.jpeg", alt: "Ajibola & Tolulope 1", aspect: "aspect-[4/5]" },
  { src: "/images/Photoshoot 2.jpeg", alt: "Ajibola & Tolulope 2", aspect: "aspect-[1/1]" },
  { src: "/images/Photoshoot 3.jpeg", alt: "Ajibola & Tolulope 3", aspect: "aspect-[4/5]" },
  { src: "/images/Photoshoot 1.jpeg", alt: "Ajibola & Tolulope 4", aspect: "aspect-[1/1]" },
  { src: "/images/Photoshoot 2.jpeg", alt: "Ajibola & Tolulope 5", aspect: "aspect-[4/5]" },
  { src: "/images/Photoshoot 3.jpeg", alt: "Ajibola & Tolulope 6", aspect: "aspect-[1/1]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Our Moments</span>
          <h2 className="text-4xl md:text-6xl font-serif">Photo Gallery</h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${image.aspect} overflow-hidden rounded-sm group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
