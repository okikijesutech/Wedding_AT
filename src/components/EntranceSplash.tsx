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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Image with B&W styling */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Photoshoot 1.jpeg"
              alt="Àjìbọ́lá & Olúwadárasími"
              fill
              className="object-cover grayscale brightness-50 opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 text-center px-6 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Inspiration Text: Save the date */}
              <span className="text-3xl md:text-5xl font-serif italic text-ivory/90 mb-16 lowercase tracking-tight">
                Save the date
              </span>

              <h1 className="text-4xl md:text-6xl font-serif text-ivory mb-2 tracking-tighter">
                Àjìbọ́lá <span className="text-gold italic">&</span> Olúwadárasími
              </h1>

              {/* Inspiration Text: To Forever */}
              <div className="mt-12 mb-8 flex flex-col items-center gap-2">
                <span className="text-2xl md:text-3xl font-serif italic text-ivory/80 lowercase">
                  To Forever
                </span>
                <span className="text-sm md:text-base tracking-[0.4em] text-ivory font-light">
                  28 . 03 . 26
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.5em] text-gold mt-4 uppercase font-light">
                  LAGOS, NIGERIA
                </span>
              </div>
              
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-12 py-4 border border-ivory/30 text-ivory text-[10px] uppercase tracking-[0.4em] hover:bg-ivory hover:text-black transition-all duration-500 rounded-full"
              >
                Open Invite
              </motion.button>

              <div className="mt-24 flex flex-col items-center gap-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 font-light">
                  Saturday we partyyyyy 💃🏾💃🏾💃🏾😁😁
                </p>
                <div className="w-px h-12 bg-ivory/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
