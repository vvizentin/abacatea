import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpecialtiesSection from "./components/SpecialtiesSection";
import JourneySection from "./components/JourneySection";
import StructureSection from "./components/StructureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import PreFooterCTA from "./components/PreFooterCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollReveal from "./components/ScrollReveal";

export function App() {
  return (
    <div className="min-h-screen bg-paper-white">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <JourneySection />

        {/* Subtle Brand Transition Divider from White to Cream */}
        <ScrollReveal>
          <div className="bg-gradient-to-b from-paper-white to-cream py-4 flex items-center justify-center overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-canopy-green/75">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-leaf-bright/40" />
              <div className="flex items-center gap-2">
                <img
                  src="/mascote-sem-fundo.png"
                  alt="Mascote ABAcaTEA"
                  className="w-5 h-5 object-contain"
                  loading="lazy"
                />
                <span className="tracking-wide">Cuidado singular · Ciência e afeto em cada conquista</span>
              </div>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-leaf-bright/40" />
            </div>
          </div>
        </ScrollReveal>

        <StructureSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <PreFooterCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
