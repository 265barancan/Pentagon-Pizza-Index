# 🍕 Pentagon Pizza Index (PIZZINT)

> **"When pizza orders spike, the world holds its breath"**

A cyberpunk-themed web application that tracks pizza delivery activity around the Pentagon to infer potential military operations. A satirical OSINT (Open Source Intelligence) tool built for entertainment purposes.

**PIZZINT** operates on a simple principle: when military and intelligence personnel work extended hours during crises, they order more pizza. By monitoring pizza delivery activity around the Pentagon, we can infer potential military operations and geopolitical tensions.

![Cyberpunk](https://img.shields.io/badge/Theme-Cyberpunk-00ff41?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## Features

- 🍕 **Real-time Pizza Tracker**: Monitor pizza delivery activity levels at various locations near the Pentagon
- 🚨 **DEFCON Indicator**: 5-level alert system based on pizza order intensity
- 📊 **Historical Timeline**: View past pizza spikes and correlated geopolitical events
- 🍺 **Freddie's Beach Bar Indicator**: Negative indicator showing inverse correlation
- 💻 **Terminal-style Theory Explainer**: Typing animation explaining the methodology
- 🎨 **Cyberpunk Design**: Neon colors, glitch effects, scanlines, and animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk, JetBrains Mono, Orbitron
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ppi/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles and cyberpunk effects
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx  # Hero with glitch title and radar
│   ├── DefconIndicator.tsx  # DEFCON status display
│   ├── LivePizzaTracker.tsx # Real-time pizza tracking cards
│   ├── BarIndicator.tsx      # Freddie's Beach Bar indicator
│   ├── HistoricalTimeline.tsx # Event timeline
│   ├── TheoryExplainer.tsx    # Terminal-style explanation
│   └── Footer.tsx            # Footer with disclaimers
├── manifest.md          # Project specification
└── package.json
```

## Design Features

### Color Palette
- Neon Green: `#00ff41`
- Neon Blue: `#00d9ff`
- Neon Purple: `#b026ff`
- Neon Yellow: `#ffff00`
- Neon Red: `#ff0040`
- Dark Background: `#0a0a0a`
- Dark Card: `#1a1a1a`

### Animations
- Glitch effects on text
- Radar sweep animation
- Pulse animations for alerts
- Scanline overlay
- Typing effect for terminal
- Smooth scroll animations

## Disclaimer

⚠️ **THIS IS SATIRICAL OSINT - NOT OFFICIAL INTELLIGENCE**

This project is created for entertainment purposes only. It is not affiliated with any government agency and should not be used for actual intelligence gathering.

## How It Works

The Pentagon Pizza Index uses a simple correlation: **high pizza activity = high military activity**. 

1. **Data Collection**: Monitors pizza delivery activity around the Pentagon area
2. **Baseline Comparison**: Compares current activity to historical averages
3. **DEFCON Classification**: Assigns alert levels based on activity spikes
4. **Historical Correlation**: Tracks past pizza spikes and correlated geopolitical events

### The Theory

During times of crisis or high operational tempo, Pentagon staff work extended hours. These long shifts lead to increased food delivery orders, particularly pizza. By tracking these patterns, PIZZINT provides a satirical (yet surprisingly accurate) indicator of potential military activity.

### Freddie's Beach Bar Indicator

As a "negative indicator," we also track activity at Freddie's Beach Bar. When bar activity drops, it suggests Pentagon staff are too busy to socialize - another sign of increased operational activity.

## Screenshots

*Coming soon - Add screenshots of your application here*

## Contributing

Contributions are welcome! This is a satirical project, so feel free to add creative features, improve the cyberpunk aesthetics, or suggest new "indicators."

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Inspiration

This project is inspired by the real-world observation that pizza delivery spikes around the Pentagon during major geopolitical events. It's a humorous take on OSINT (Open Source Intelligence) and demonstrates how seemingly unrelated data can reveal interesting patterns.

## License

This project is open source and available for educational purposes.

---

**⚠️ DISCLAIMER**: This is a satirical project created for entertainment. It is not affiliated with any government agency and should not be used for actual intelligence gathering or decision-making.

**Made with 🍕 and 💚 by the PIZZINT team**

