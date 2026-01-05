"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const theoryText = `HOW IT WORKS

The Pentagon Pizza Index (PIZZINT) operates on a simple principle:
when military and intelligence personnel work extended hours during
crises, they order more pizza. By monitoring pizza delivery activity
around the Pentagon, we can infer potential military operations.

DATA SOURCES:
- Google Maps real-time activity
- Delivery app APIs (aggregated)
- OSINT monitoring tools

METHODOLOGY:
1. Track pizza place activity levels
2. Compare to baseline averages
3. Correlate spikes with historical events
4. Generate DEFCON-style alerts

DISCLAIMER:
This is a satirical OSINT tool for entertainment purposes only.
Not affiliated with any government agency.`;

export default function TheoryExplainer() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < theoryText.length) {
        setDisplayedText(theoryText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="theory" className="py-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-neon-green">
          THEORY EXPLANATION
        </h2>

        <div className="bg-dark-card border-2 border-neon-green/50 rounded-lg p-8 relative overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-red"></div>
              <div className="w-3 h-3 rounded-full bg-neon-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-neon-green"></div>
            </div>
            <div className="font-mono text-xs text-gray-400 ml-4">pizzint@terminal:~$</div>
          </div>

          {/* Terminal content */}
          <div className="font-mono text-sm text-neon-green leading-relaxed whitespace-pre-wrap">
            {displayedText}
            {isTyping && (
              <motion.span
                className="inline-block w-2 h-5 bg-neon-green ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>

          {/* Glitch overlay effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0, 0.05, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="absolute inset-0 bg-neon-green mix-blend-screen"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

