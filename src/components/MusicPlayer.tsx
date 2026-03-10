"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

import Script from "next/script";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (autoPlayTrigger && playerRef.current && isReady && !isPlaying) {
      playerRef.current.playVideo();
      setIsPlaying(true);
      setShowHint(false);
    }
  }, [autoPlayTrigger, isReady]);

  const initPlayer = () => {
    if (playerRef.current || !window.YT) return;
    
    playerRef.current = new window.YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: "XvwSzzvP9s0", // Official Timi Dakolo - Iyawo Mi
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        loop: 1,
        playlist: "XvwSzzvP9s0",
      },
      events: {
        onReady: () => setIsReady(true),
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
          if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          if (event.data === window.YT.PlayerState.ENDED) {
            playerRef.current.playVideo(); // Force loop
          }
        },
      },
    });
  };

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    // Interaction handler for autoplay

    // Interaction handler for autoplay
    const handleFirstInteraction = () => {
      if (playerRef.current && isReady && !isPlaying) {
        playerRef.current.playVideo();
        setIsPlaying(true);
        setShowHint(false);
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
  }, [isReady, isPlaying]);

  const togglePlay = () => {
    if (playerRef.current && isReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
        setShowHint(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current && isReady) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <div id="youtube-player" className="hidden" />
      
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <div className="relative">
          <button
            onClick={togglePlay}
            disabled={!isReady}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl disabled:opacity-50",
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

          {/* Hint pulsing ring */}
          {!isPlaying && showHint && isReady && (
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-gold -z-10"
            />
          )}
        </div>

        {/* Info & Mute */}
        <AnimatePresence>
          {(isPlaying || (showHint && isReady)) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-ivory/80 backdrop-blur-md px-4 py-2 border border-gold/10 rounded-full flex items-center gap-4 shadow-lg"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  {isPlaying ? "Now Playing" : "Tap to Play"}
                </span>
                <span className="text-[11px] text-charcoal truncate max-w-[120px]">
                  Iyawo Mi - Timi Dakolo
                </span>
              </div>
              
              {isPlaying && (
                <button onClick={toggleMute} className="text-charcoal/60 hover:text-gold transition-colors">
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              )}
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
      {/* YouTube API Loader */}
      <Script
        src="https://www.youtube.com/iframe_api"
        onLoad={() => {
          // The API triggers a global callback when ready
          window.onYouTubeIframeAPIReady = () => {
            initPlayer();
          };
          // If already ready
          if (window.YT && window.YT.Player) {
            initPlayer();
          }
        }}
        strategy="lazyOnload"
      />
    </div>
  );
}
