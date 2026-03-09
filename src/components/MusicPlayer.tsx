"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Try to autoplay after first user interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch((e) => console.log("Autoplay blocked:", e));
        setIsPlaying(true);
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for Nigerian Wedding song
      />
      
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl",
            isPlaying ? "bg-gold text-ivory" : "bg-ivory text-gold border border-gold/20"
          )}
        >
          {isPlaying ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Pause size={20} fill="currentColor" />
            </motion.div>
          ) : (
            <Play size={20} fill="currentColor" className="ml-1" />
          )}
        </button>

        {/* Info & Mute */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-ivory/80 backdrop-blur-md px-4 py-2 border border-gold/10 rounded-full flex items-center gap-4 shadow-lg"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Now Playing</span>
                <span className="text-[11px] text-charcoal truncate max-w-[120px]">Nigerian Wedding Mix...</span>
              </div>
              
              <button onClick={toggleMute} className="text-charcoal/60 hover:text-gold transition-colors">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Waveform when playing */}
      {isPlaying && (
        <div className="flex gap-1 h-3 items-end mt-2 ml-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ height: ["40%", "100%", "40%"] }}
              transition={{
                duration: 0.5 + (i * 0.1),
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[2px] bg-gold/50"
            />
          ))}
        </div>
      )}
    </div>
  );
}
