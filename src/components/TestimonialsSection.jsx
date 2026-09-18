import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    author: "Mariana S.",
    role: "Mãe do Theo (4 anos)",
    quote:
      "Desde a primeira conversa sentimos que finalmente alguém estava olhando para o nosso filho como um todo. A evolução dele na comunicação e o acolhimento com a gente como pais faz toda a diferença.",
    avatarBg: "bg-mint-wash",
    avatarText: "text-canopy-green",
    tag: "Terapia ABA & Fonoaudiologia",
  },
  {
    author: "Carlos & Patrícia E.",
    role: "Pais do Lucas (6 anos)",
    quote:
      "A integração sensorial transformou a nossa convivência em casa. O Lucas tinha crises intensas por sobrecarga de estímulos e hoje participa dos passeios e da escola com muito mais alegria e segurança.",
    avatarBg: "bg-sky-wash",
    avatarText: "text-deep-teal",
    tag: "Integração Sensorial & Fisioterapia",
  },
  {
    author: "Juliana R.",
    role: "Mãe da Beatriz (8 anos)",
    quote:
      "Encontrar profissionais qualificadas que realmente escutam sem rotular é raro. No Espaço ABAcaTEA sentimos carinho de verdade em cada sessão. É um alívio enorme ter esse suporte de excelência em Fazenda Rio Grande.",
    avatarBg: "bg-peach-wash",
    avatarText: "text-coral-pulse",
    tag: "Psicopedagogia & Psicologia",
  },
];

export default function TestimonialsSection() {
  const [mobileIdx, setMobileIdx] = useState(0);

  const handlePrev = () => {
    setMobileIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[mobileIdx];

  return (
    <section id="depoimentos" className="py-12 md:py-16 bg-lilac-wash/70 border-y border-indigo-bloom/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-paper-white rounded-[9999px] px-3.5 py-1 text-xs font-semibold text-canopy-green mb-2 shadow-2xs border border-canopy-green/10">
              <Heart size={13} className="text-coral-pulse fill-coral-pulse" />
              <span>Histórias Reais</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              O que as famílias dizem sobre nós
            </h2>
            <p className="text-graphite text-sm sm:text-base leading-relaxed">
              Cada conquista é celebrada em conjunto. Veja o relato de quem caminha com a nossa equipe.
            </p>
          </div>
        </ScrollReveal>

        {/* MOBILE: Carousel */}
        <div className="block sm:hidden">
          <ScrollReveal>
            <div className="bg-paper-white rounded-[22px] p-6 shadow-xs border border-canopy-green/10 flex flex-col justify-between min-h-[290px]">
              <div>
                <Quote size={28} className="text-leaf-bright/40 mb-3" />
                <p className="text-canopy-green/95 text-sm leading-relaxed mb-5 italic">
                  &quot;{activeTestimonial.quote}&quot;
                </p>
              </div>

              <div>
                <div className="h-px bg-frost-gray/50 mb-4" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${activeTestimonial.avatarBg} ${activeTestimonial.avatarText} font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {activeTestimonial.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-canopy-green leading-tight">
                        {activeTestimonial.author}
                      </h3>
                      <p className="text-xs text-slate">{activeTestimonial.role}</p>
                      <span className="inline-block text-[11px] font-medium text-leaf-bright">
                        {activeTestimonial.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handlePrev}
                      aria-label="Depoimento anterior"
                      className="w-8 h-8 rounded-full bg-lilac-wash/80 hover:bg-lilac-wash flex items-center justify-center text-canopy-green transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Próximo depoimento"
                      className="w-8 h-8 rounded-full bg-lilac-wash/80 hover:bg-lilac-wash flex items-center justify-center text-canopy-green transition-colors cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileIdx
                      ? "w-6 bg-coral-pulse"
                      : "w-2 bg-canopy-green/20 hover:bg-canopy-green/40"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* DESKTOP: 3 Cards */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} className="flex flex-col h-full">
              <div className="bg-paper-white rounded-[22px] p-6 lg:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full border border-canopy-green/8">
                <div>
                  <Quote size={28} className="text-leaf-bright/40 mb-3.5" />
                  <p className="text-canopy-green/95 text-sm leading-relaxed mb-6 italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div>
                  <div className="h-px bg-frost-gray/50 mb-4" />
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${t.avatarBg} ${t.avatarText} font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {t.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-canopy-green">
                        {t.author}
                      </h3>
                      <p className="text-xs text-slate">{t.role}</p>
                      <span className="inline-block text-[11px] font-medium text-leaf-bright mt-0.5">
                        {t.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
