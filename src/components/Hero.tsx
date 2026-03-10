"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Photoshoot 1.jpeg"
          alt="Àjìbọ́lá & Olúwadárasími"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-ivory px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 block font-light">
            We are getting married
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 leading-tight">
            Àjìbọ́lá <span className="text-gold tracking-tighter">&</span> Olúwadárasími
          </h1>
          <p className="text-lg md:text-2xl tracking-[0.2em] font-light mb-12 italic">
            28 . 03 . 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Countdown targetDate="2026-03-28T07:00:00" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest mb-2 opacity-70">Scroll</span>
            <div className="w-[1px] h-12 bg-ivory/30 relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 48] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-1/2 bg-gold absolute top-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
