"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-neon-green/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="font-display text-2xl font-bold text-neon-green glitch-text"
            data-text="PIZZINT"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            PIZZINT
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#defcon" className="text-sm font-mono hover:text-neon-green transition-colors">
              DEFCON
            </a>
            <a href="#tracker" className="text-sm font-mono hover:text-neon-green transition-colors">
              TRACKER
            </a>
            <a href="#timeline" className="text-sm font-mono hover:text-neon-green transition-colors">
              TIMELINE
            </a>
            <a href="#theory" className="text-sm font-mono hover:text-neon-green transition-colors">
              THEORY
            </a>
          </nav>

          <button
            className="md:hidden text-neon-green"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            className="md:hidden mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <a href="#defcon" className="block py-2 text-sm font-mono hover:text-neon-green transition-colors">
              DEFCON
            </a>
            <a href="#tracker" className="block py-2 text-sm font-mono hover:text-neon-green transition-colors">
              TRACKER
            </a>
            <a href="#timeline" className="block py-2 text-sm font-mono hover:text-neon-green transition-colors">
              TIMELINE
            </a>
            <a href="#theory" className="block py-2 text-sm font-mono hover:text-neon-green transition-colors">
              THEORY
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

