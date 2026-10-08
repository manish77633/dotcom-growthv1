import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GrowthEngine from "./components/GrowthEngine";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Proof from "./components/Proof";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { LogoStrip } from "./components/ui";
import { SectionTexture } from "./components/MotionLayer";
import { brandsPrimary } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-canvas text-charcoal">
      <Header />
      <main>
        <Hero />

        <section aria-label="Clients" className="py-20 md:py-24">
          <SectionTexture motif="dots" side="left" />
          <LogoStrip title="Trusted by brands across verticals" brands={brandsPrimary} />
        </section>

        <About />
        <Services />
        <GrowthEngine />
        <Process />
        <CaseStudies />
        <Proof />
        <Why />
        <Testimonials />
        <Insights />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
