import FeaturedCources from "../components/FeaturedCources";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import Instructors from "../components/Instructors";
import TestyMonioinCard from "../components/TestyMonioinCard";
import UpComingWebinars from "../components/UpComingWebinars";
import { WhyChoseUs } from "../components/WhyChoseUs"

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />                  
        <FeaturedCources />
        <WhyChoseUs  />
        <TestyMonioinCard />
        <UpComingWebinars />
        <Instructors />
        <Footer />
      </main>
    </div>
  );
}

  