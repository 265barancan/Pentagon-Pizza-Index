"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PizzaPlace {
  id: string;
  name: string;
  intensity: number;
  lastUpdate: string;
  status: "normal" | "high" | "critical";
}

const mockPizzaPlaces: PizzaPlace[] = [
  {
    id: "1",
    name: "Pizza Palace Pentagon",
    intensity: 45,
    lastUpdate: "2 min ago",
    status: "normal",
  },
  {
    id: "2",
    name: "Domino's Defense District",
    intensity: 78,
    lastUpdate: "1 min ago",
    status: "high",
  },
  {
    id: "3",
    name: "Pepperoni Pentagon Express",
    intensity: 92,
    lastUpdate: "30 sec ago",
    status: "critical",
  },
  {
    id: "4",
    name: "Cheese Corner Military",
    intensity: 34,
    lastUpdate: "5 min ago",
    status: "normal",
  },
];

export default function LivePizzaTracker() {
  const [places, setPlaces] = useState<PizzaPlace[]>(mockPizzaPlaces);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPlaces((prev) =>
        prev.map((place) => ({
          ...place,
          intensity: Math.min(100, Math.max(0, place.intensity + (Math.random() - 0.5) * 10)),
          lastUpdate: "just now",
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "#ff0040";
      case "high":
        return "#ffff00";
      default:
        return "#00ff41";
    }
  };

  const getStatusEmoji = (status: string) => {
    switch (status) {
      case "critical":
        return "🔴";
      case "high":
        return "🟡";
      default:
        return "🟢";
    }
  };

  return (
    <section id="tracker" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-neon-blue">
          LIVE PIZZA TRACKER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {places.map((place, index) => {
            const statusColor = getStatusColor(place.status);
            const statusEmoji = getStatusEmoji(place.status);

            return (
              <motion.div
                key={place.id}
                className="bg-dark-card border-2 rounded-lg p-6 transition-all group"
                style={{
                  borderColor: `${statusColor}80`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4, borderColor: statusColor }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-mono text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                    {place.name}
                  </h3>
                  <span className="text-2xl">{statusEmoji}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-gray-400">Intensity</span>
                    <span className="font-mono font-bold" style={{ color: statusColor }}>
                      {Math.round(place.intensity)}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-bg rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{
                        background: `linear-gradient(to right, ${statusColor}, ${statusColor}80)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${place.intensity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500">Last Update</span>
                  <span className="font-mono text-xs text-neon-blue">{place.lastUpdate}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

