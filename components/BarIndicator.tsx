"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BarIndicator() {
  const [activity, setActivity] = useState(35); // Low activity = high alarm (inverse)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setActivity((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 5)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Inverse logic: low activity = high alarm
  const alarmLevel = 100 - activity;
  const getAlarmColor = () => {
    if (alarmLevel > 70) return "#ff0040";
    if (alarmLevel > 40) return "#ffff00";
    return "#00ff41";
  };

  const alarmColor = getAlarmColor();

  return (
    <section className="py-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-neon-purple">
          FREDDIE&apos;S BEACH BAR INDICATOR
        </h2>
        <p className="font-mono text-sm text-center text-gray-400 mb-8">
          NEGATIVE INDICATOR - Low bar activity = High Pentagon activity
        </p>

        <div
          className="bg-dark-card border-2 rounded-lg p-8"
          style={{ borderColor: `${alarmColor}80` }}
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-400">Bar Activity Level</span>
              <span className="font-mono font-bold text-neon-purple">{Math.round(activity)}%</span>
            </div>
            <div className="w-full bg-dark-bg rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background: "linear-gradient(to right, #b026ff, #b026ff80)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${activity}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-400">Inferred Pentagon Activity</span>
              <span className="font-mono font-bold" style={{ color: alarmColor }}>
                {Math.round(alarmLevel)}%
              </span>
            </div>
            <div className="w-full bg-dark-bg rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background: `linear-gradient(to right, ${alarmColor}, ${alarmColor}80)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${alarmLevel}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          <motion.div
            className="mt-6 text-center font-mono text-lg"
            style={{ color: alarmColor }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {alarmLevel > 70
              ? "🔴 HIGH ALERT: Pentagon likely active"
              : alarmLevel > 40
              ? "🟡 MODERATE: Monitoring situation"
              : "🟢 LOW: All quiet"}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

