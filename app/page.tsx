import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DefconIndicator from "@/components/DefconIndicator";
import LivePizzaTracker from "@/components/LivePizzaTracker";
import BarIndicator from "@/components/BarIndicator";
import HistoricalTimeline from "@/components/HistoricalTimeline";
import TheoryExplainer from "@/components/TheoryExplainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 py-8 space-y-12">
        <DefconIndicator />
        <LivePizzaTracker />
        <BarIndicator />
        <HistoricalTimeline />
        <TheoryExplainer />
      </div>
      <Footer />
    </main>
  );
}

