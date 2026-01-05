import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00ff41",
          blue: "#00d9ff",
          purple: "#b026ff",
          yellow: "#ffff00",
          red: "#ff0040",
        },
        dark: {
          bg: "#0a0a0a",
          card: "#1a1a1a",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Courier New", "monospace"],
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Orbitron", "monospace"],
      },
      animation: {
        "glitch": "glitch 0.3s infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "radar-sweep": "radar-sweep 3s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "typing": "typing 3.5s steps(40, end)",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px currentColor" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px currentColor" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

