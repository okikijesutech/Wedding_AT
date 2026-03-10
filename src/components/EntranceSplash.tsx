"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface EntranceSplashProps {
  onEnter: () => void;
}

export default function EntranceSplash({ onEnter }: EntranceSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    onEnter();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Photoshoot 1.jpeg"
              alt="Àjìbọ́lá & Olúwadárasími"
              fill
              className="object-cover opacity-20 scale-110 blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-ivory/80" />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-6 block font-light">
                The Wedding of
              </span>
              <h1 className="text-4xl md:text-7xl font-serif text-charcoal mb-12 leading-tight">
                Àjìbọ́lá <br className="md:hidden" /> 
                <span className="text-gold font-light serif italic mx-2">&</span> <br className="md:hidden" />
                Olúwadárasími
              </h1>
              
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-charcoal text-ivory text-xs uppercase tracking-[0.3em] overflow-hidden rounded-sm transition-all duration-500 hover:bg-gold"
              >
                <span className="relative z-10">Open Invitation</span>
                <motion.div
                  className="absolute inset-0 bg-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.button>

              <p className="mt-12 text-[10px] uppercase tracking-widest text-charcoal/40 font-light">
                Click to enter the experience
              </p>
            </motion.div>
          </div>

          {/* Decorative Borders */}
          <div className="absolute inset-12 border border-gold/10 pointer-events-none" />
          <div className="absolute inset-16 border border-gold/5 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
