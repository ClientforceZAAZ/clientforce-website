"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function VideoModal({ isOpen, onClose, mediaId = "eu8l1vo7pz" }) {
  useEffect(() => {
    if (isOpen) {
      // Wistia requires the player.js and the specific media script
      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      // Adding autoplay via script URL parameters is a Wistia best practice
      script2.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      script2.async = true;
      script2.type = "module";
      document.body.appendChild(script2);
    }
  }, [isOpen, mediaId]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
          {/* Lightened Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Reduced Size Modal Container (max-w-4xl instead of 5xl) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl rounded-[1.5rem] overflow-hidden bg-black shadow-2xl border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 z-50 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition-all backdrop-blur-md"
            >
              <HiX size={20} />
            </button>

            {/* Wistia Player with Autoplay attribute */}
            <div className="w-full aspect-video">
              <wistia-player 
                media-id={mediaId} 
                auto-play="true"
                aspect="1.7777777777777777"
                className="w-full h-full"
              ></wistia-player>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}