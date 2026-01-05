"use client";

import { motion } from "framer-motion";

interface HistoricalEvent {
  date: string;
  pizzaActivity: number;
  event: string;
  defcon: number;
}

const historicalEvents: HistoricalEvent[] = [
  {
    date: "2025-01-03",
    pizzaActivity: 99,
    event: "Venezuela: Maduro arrested by US forces in Caracas",
    defcon: 1,
  },
  {
    date: "2023-10-07",
    pizzaActivity: 95,
    event: "Middle East tensions escalated",
    defcon: 2,
  },
  {
    date: "2022-02-24",
    pizzaActivity: 98,
    event: "Major geopolitical event occurred",
    defcon: 1,
  },
  {
    date: "2021-08-15",
    pizzaActivity: 87,
    event: "Significant policy announcement",
    defcon: 2,
  },
  {
    date: "2020-01-03",
    pizzaActivity: 92,
    event: "International incident",
    defcon: 1,
  },
];

export default function HistoricalTimeline() {
  return (
    <section id="timeline" className="py-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-neon-yellow">
          HISTORICAL EVENTS TIMELINE
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neon-green/30"></div>

          <div className="space-y-8">
            {historicalEvents.map((event, index) => {
              const getDefconColor = (defcon: number) => {
                if (defcon === 1) return "#ff0040";
                if (defcon === 2) return "#b026ff";
                return "#ffff00";
              };

              const defconColor = getDefconColor(event.defcon);

              return (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-dark-bg"
                    style={{ backgroundColor: defconColor }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: defconColor }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  {/* Event card */}
                  <div
                    className="bg-dark-card border-2 rounded-lg p-6 transition-all"
                    style={{ borderColor: `${defconColor}80` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = defconColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${defconColor}80`;
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-mono text-sm text-gray-400 mb-1">{event.date}</div>
                        <div
                          className="font-display text-xl font-bold mb-2"
                          style={{ color: defconColor }}
                        >
                          DEFCON {event.defcon}
                        </div>
                        <div className="font-sans text-white text-lg">{event.event}</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-gray-400">Pizza Activity</span>
                        <span className="font-mono font-bold" style={{ color: defconColor }}>
                          {event.pizzaActivity}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{
                            background: `linear-gradient(to right, ${defconColor}, ${defconColor}80)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${event.pizzaActivity}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

