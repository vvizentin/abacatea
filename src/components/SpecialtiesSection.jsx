import { useState } from "react";
import {
  Brain,
  Activity,
  Mic,
  Apple,
  HeartHandshake,
  BookOpen,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { specialties, WHATSAPP_NUMBER } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

const iconComponents = {
  Brain: <Brain size={22} />,
  Activity: <Activity size={22} />,
  Mic: <Mic size={22} />,
  Apple: <Apple size={22} />,
  HeartHandshake: <HeartHandshake size={22} />,
  BookOpen: <BookOpen size={22} />,
  Zap: <Zap size={22} />,
};

export default function SpecialtiesSection() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? specialties.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === specialties.length - 1 ? 0 : prev + 1));
  };

  const activeSpec = specialties[mobileIndex];
  const activeWaMsg = encodeURIComponent(activeSpec.waMessage);

  return (
    <section
      id="especialidades"
      className="py-12 md:py-16 bg-mint-wash/50 border-y border-leaf-bright/15"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Nossas Especialidades
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Cada criança tem seu plano único
            </h2>
            <p className="text-graphite text-sm sm:text-base leading-relaxed">
              Equipe integrada que compartilha a evolução do seu filho para um suporte completo e individualizado.
            </p>
          </div>
        </ScrollReveal>

        {/* MOBILE: Carousel */}
        <div className="block sm:hidden">
          <ScrollReveal>
            <div className="bg-paper-white rounded-[22px] p-6 shadow-sm border border-canopy-green/10 flex flex-col min-h-[290px] justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-mint-wash rounded-[12px] flex items-center justify-center text-canopy-green">
                    {iconComponents[activeSpec.icon]}
                  </div>
                  <span className="text-xs font-bold text-leaf-bright bg-leaf-bright/10 px-2.5 py-1 rounded-full">
                    {mobileIndex + 1} de {specialties.length}
                  </span>
                </div>

                <h3 className="font-bold text-canopy-green text-lg mb-2 leading-snug">
                  {activeSpec.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed mb-4">
                  {activeSpec.description}
                </p>
              </div>

              <div className="pt-3 border-t border-frost-gray/50 flex items-center justify-between">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${activeWaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-canopy-green hover:text-leaf-bright transition-colors"
                >
                  <span>Agendar triagem</span>
                  <ArrowRight size={14} className="text-leaf-bright" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Especialidade anterior"
                    className="w-8 h-8 rounded-full bg-mint-wash/80 hover:bg-mint-wash flex items-center justify-center text-canopy-green transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Próxima especialidade"
                    className="w-8 h-8 rounded-full bg-mint-wash/80 hover:bg-mint-wash flex items-center justify-center text-canopy-green transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {specialties.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Ir para especialidade ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileIndex
                      ? "w-6 bg-leaf-bright"
                      : "w-2 bg-canopy-green/20 hover:bg-canopy-green/40"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden sm:flex flex-col gap-5">
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {specialties.slice(0, 4).map((spec, i) => {
              const waMsg = encodeURIComponent(spec.waMessage);
              return (
                <ScrollReveal key={spec.id} delay={i * 70} className="flex flex-col h-full">
                  <div className="bg-paper-white rounded-[22px] p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 h-full border border-canopy-green/8 shadow-2xs hover:shadow-md hover:border-leaf-bright/35">
                    <div>
                      <div className="w-11 h-11 bg-mint-wash rounded-[12px] flex items-center justify-center text-canopy-green mb-4 shrink-0">
                        {iconComponents[spec.icon]}
                      </div>
                      <h3 className="font-bold text-canopy-green text-base lg:text-lg mb-2 leading-snug">
                        {spec.title}
                      </h3>
                      <p className="text-graphite text-xs lg:text-sm leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-xs font-semibold text-canopy-green hover:text-leaf-bright transition-colors group mt-5 pt-3 border-t border-frost-gray/50"
                    >
                      <span>Agendar triagem</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform text-canopy-green group-hover:text-leaf-bright" />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Row 2: 3 cards centered */}
          <div className="flex justify-center gap-4 lg:gap-5 flex-wrap">
            {specialties.slice(4).map((spec, i) => {
              const waMsg = encodeURIComponent(spec.waMessage);
              return (
                <ScrollReveal
                  key={spec.id}
                  delay={(i + 4) * 70}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col"
                >
                  <div className="bg-paper-white rounded-[22px] p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 h-full border border-canopy-green/8 shadow-2xs hover:shadow-md hover:border-leaf-bright/35">
                    <div>
                      <div className="w-11 h-11 bg-mint-wash rounded-[12px] flex items-center justify-center text-canopy-green mb-4 shrink-0">
                        {iconComponents[spec.icon]}
                      </div>
                      <h3 className="font-bold text-canopy-green text-base lg:text-lg mb-2 leading-snug">
                        {spec.title}
                      </h3>
                      <p className="text-graphite text-xs lg:text-sm leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-xs font-semibold text-canopy-green hover:text-leaf-bright transition-colors group mt-5 pt-3 border-t border-frost-gray/50"
                    >
                      <span>Agendar triagem</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform text-canopy-green group-hover:text-leaf-bright" />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
