"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Radar Sweep Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 border-2 border-neon-green/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-neon-green origin-bottom transform -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-neon-green to-transparent opacity-50"></div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-4 glitch-text"
          data-text="PENTAGON PIZZA INDEX"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PENTAGON PIZZA INDEX
        </motion.h1>

        <motion.p
          className="font-mono text-lg md:text-2xl text-neon-blue mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PIZZINT - REAL-TIME MILITARY TENSION INDICATOR
        </motion.p>

        <motion.p
          className="font-sans text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          MONITORING GEOPOLITICAL TENSIONS THROUGH PEPPERONI
        </motion.p>

        <motion.p
          className="font-mono text-xs md:text-sm text-neon-yellow italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          When pizza orders spike, the world holds its breath
        </motion.p>

        {isScanning && (
          <motion.div
            className="mt-8 font-mono text-sm text-neon-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            SCANNING PIZZA FREQUENCIES...
          </motion.div>
        )}

        <motion.div
          className="mt-8 px-4 py-2 bg-dark-card border border-neon-red/50 rounded inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-mono text-xs text-neon-red">
            ⚠️ THIS IS SATIRICAL OSINT - NOT OFFICIAL INTELLIGENCE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

