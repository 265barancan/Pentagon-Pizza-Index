"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const COLOR_MAP: Record<string, string> = {
  "neon-green": "#00ff41",
  "neon-blue": "#00d9ff",
  "neon-yellow": "#ffff00",
  "neon-purple": "#b026ff",
  "neon-red": "#ff0040",
};

const DEFCON_LEVELS = [
  { level: 5, label: "DEFCON 5", color: "neon-green", description: "ALL QUIET ON THE PIZZA FRONT" },
  { level: 4, label: "DEFCON 4", color: "neon-blue", description: "NORMAL ACTIVITY" },
  { level: 3, label: "DEFCON 3", color: "neon-yellow", description: "ELEVATED ACTIVITY" },
  { level: 2, label: "DEFCON 2", color: "neon-purple", description: "UNUSUAL ACTIVITY DETECTED" },
  { level: 1, label: "DEFCON 1", color: "neon-red", description: "CRITICAL: UNPRECEDENTED PIZZA SURGE" },
];

export default function DefconIndicator() {
  const [currentLevel, setCurrentLevel] = useState(3); // Mock data - would come from API

  const currentDefcon = DEFCON_LEVELS.find((d) => d.level === currentLevel) || DEFCON_LEVELS[0];

  return (
    <section id="defcon" className="py-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-neon-green">
          PIZZA DEFCON STATUS
        </h2>

        <div className="bg-dark-card border-2 border-neon-green/50 rounded-lg p-8 relative overflow-hidden">
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 border-2 rounded-lg"
            style={{ borderColor: COLOR_MAP[currentDefcon.color] }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <motion.div
                className="font-display text-6xl md:text-8xl font-black mb-4"
                style={{ color: COLOR_MAP[currentDefcon.color] }}
                key={currentLevel}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {currentDefcon.label}
              </motion.div>
              <p className="font-mono text-lg" style={{ color: COLOR_MAP[currentDefcon.color] }}>
                {currentDefcon.description}
              </p>
            </div>

            {/* DEFCON Level Indicators */}
            <div className="grid grid-cols-5 gap-2 mt-8">
              {DEFCON_LEVELS.map((defcon) => {
                const isActive = defcon.level === currentLevel;
                const color = COLOR_MAP[defcon.color];
                return (
                  <motion.button
                    key={defcon.level}
                    className={`relative h-16 border-2 rounded transition-all ${
                      isActive ? "" : "border-gray-700 bg-dark-bg"
                    }`}
                    style={
                      isActive
                        ? {
                            borderColor: color,
                            backgroundColor: `${color}10`,
                          }
                        : {}
                    }
                    onClick={() => setCurrentLevel(defcon.level)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="font-mono text-xs font-bold">{defcon.level}</div>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border-2 rounded"
                        style={{ borderColor: color }}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

