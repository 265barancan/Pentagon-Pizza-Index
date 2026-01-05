"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-neon-green/30 bg-dark-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold text-neon-green mb-4">DATA SOURCE</h3>
            <p className="font-mono text-xs text-gray-400">GOOGLE MAPS OSINT</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-neon-green mb-4">DISCLAIMER</h3>
            <p className="font-mono text-xs text-gray-400">
              CREATED FOR ENTERTAINMENT PURPOSES
            </p>
            <p className="font-mono text-xs text-gray-400 mt-2">
              NOT OFFICIAL INTELLIGENCE
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-neon-green mb-4">CONNECT</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gray-400 hover:text-neon-blue transition-colors"
              >
                X/TWITTER
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-mono text-xs text-gray-500">
            © 2024 PIZZINT - Pentagon Pizza Index
          </p>
          <p className="font-mono text-xs text-gray-500 mt-2">
            Monitoring geopolitical tensions through pepperoni since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

