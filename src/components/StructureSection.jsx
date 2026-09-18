import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const spaceCards = [
  {
    emoji: "🌟",
    title: "Integração Sensorial & Psicomotricidade",
    description:
      "Balanços terapêuticos suspensos, tatames macios e materiais de estimulação proprioceptiva e vestibular que auxiliam na autorregulação com segurança.",
    pastel: "bg-paper-white border border-canopy-green/10 shadow-2xs",
  },
  {
    emoji: "🎨",
    title: "Salas de Terapia Individual & ABA",
    description:
      "Consultórios planejados para sessões individuais com iluminação suave, estímulos organizados e brinquedos educativos que facilitam o foco e o vínculo.",
    pastel: "bg-paper-white border border-canopy-green/10 shadow-2xs",
  },
  {
    emoji: "🌿",
    title: "Mobiliário Seguro & Acolhimento Familiar",
    description:
      "Cantos arredondados, pisos amortecidos, materiais hipoalergênicos e espaço confortável de escuta e orientação para pais e cuidadores.",
    pastel: "bg-paper-white border border-canopy-green/10 shadow-2xs",
  },
];

export default function StructureSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="espaco" className="py-12 md:py-16 bg-cream border-y border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Nosso Espaço Físico
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[42px] font-semibold text-canopy-green leading-[1.14] mb-3"
              style={{ letterSpacing: "-0.019em" }}
            >
              Um lugar feito com carinho para crescer
            </h2>
            <p className="text-graphite text-sm sm:text-base leading-relaxed">
              Ambientes terapêuticos planejados sob medida para que crianças se sintam
              seguras, motivadas e acolhidas em Fazenda Rio Grande – PR.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Photo Showcase */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="relative group">
              <button
                onClick={() => setLightboxOpen(true)}
                className="relative block w-full rounded-[24px] overflow-hidden cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-leaf-bright/30 border border-frost-gray/60 shadow-sm"
                aria-label="Ampliar foto da sala de estimulação e integração sensorial"
              >
                <img
                  src="/clinica-espaco.jpg"
                  alt="Sala de Estimulação e Integração Sensorial no Espaço ABAcaTEA"
                  className="w-full h-72 sm:h-96 lg:h-[440px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Badge da sala */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-paper-white/95 backdrop-blur-md rounded-[14px] px-4 py-2 border border-frost-gray/50 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-leaf-bright" />
                  <span className="text-xs font-semibold text-canopy-green">
                    Sala de Integração Sensorial & Psicomotricidade
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-canopy-green/0 group-hover:bg-canopy-green/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-paper-white rounded-full p-3.5 shadow-lg">
                    <ZoomIn size={22} className="text-canopy-green" />
                  </div>
                </div>
              </button>
            </div>
          </ScrollReveal>

          {/* Context cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {spaceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 120} direction="right">
                <div className={`${card.pastel} rounded-[20px] p-5 sm:p-6 transition-all hover:shadow-xs`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{card.emoji}</span>
                    <h3 className="font-bold text-canopy-green text-base sm:text-lg">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-graphite text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada do espaço"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 bg-paper-white/10 hover:bg-paper-white/25 text-paper-white rounded-full p-3 transition-colors cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X size={24} />
          </button>
          <img
            src="/clinica-espaco.jpg"
            alt="Sala de Estimulação e Integração Sensorial no Espaço ABAcaTEA – ampliada"
            className="max-w-full max-h-[85vh] rounded-[20px] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
