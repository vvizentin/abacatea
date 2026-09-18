import { CalendarCheck, FileText, HeartHandshake, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    stepNumber: "01",
    icon: HeartHandshake,
    title: "Triagem & Acolhimento",
    description:
      "Uma conversa inicial e afetuosa com a família para compreender a rotina, marcos do desenvolvimento, dúvidas e principais necessidades da criança.",
    tag: "Primeiro Contato",
    pastel: "bg-mint-wash",
    accent: "text-canopy-green",
  },
  {
    stepNumber: "02",
    icon: FileText,
    title: "Avaliação Multidisciplinar",
    description:
      "Nossa equipe integrada aplica protocolos científicos e comportamentais (ABA) em ambiente lúdico para traçar o perfil único de habilidades da criança.",
    tag: "Base Científica",
    pastel: "bg-sky-wash",
    accent: "text-deep-teal",
  },
  {
    stepNumber: "03",
    icon: CalendarCheck,
    title: "Plano Terapêutico & Evolução",
    description:
      "Construção do PTI (Plano Terapêutico Individualizado), com metas claras, orientação contínua para os pais e acompanhamento do progresso.",
    tag: "Cuidado Contínuo",
    pastel: "bg-sage-wash",
    accent: "text-canopy-green",
  },
];

export default function JourneySection() {
  return (
    <section id="como-funciona" className="py-10 md:py-14 bg-paper-white border-t border-frost-gray/40">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Como Funciona
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[42px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              A jornada do seu filho no Espaço{" "}
              <span>
                <span className="text-leaf-bright">ABA</span>
                <span className="text-sky-signal">ca</span>
                <span className="text-[#0891b2]">TEA</span>
              </span>
            </h2>
            <p className="text-graphite text-sm sm:text-base leading-relaxed">
              Sabemos que dar o primeiro passo gera dúvidas. Por isso, estruturamos
              um caminho claro, humanizado e acolhedor para a sua família.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.stepNumber} delay={i * 150} className="flex flex-col h-full">
                <div
                  className={`${item.pastel} rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 flex-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-ink-black/20">
                        {item.stepNumber}
                      </span>
                      <span className="inline-block bg-paper-white/80 text-canopy-green text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-[12px] bg-paper-white flex items-center justify-center text-canopy-green mb-4 shadow-xs">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-ink-black mb-2">
                      {item.title}
                    </h3>

                    <p className="text-graphite text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Bar */}
        <ScrollReveal delay={100}>
          <div className="bg-sage-wash/80 border border-leaf-bright/20 rounded-[20px] p-6 md:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-canopy-green mb-1">
                Pronto para dar o primeiro passo?
              </h4>
              <p className="text-graphite text-xs sm:text-sm">
                Nossa equipe acolhe sua família sem burocracia para esclarecer dúvidas e direcionar o atendimento.
              </p>
            </div>
            <a
              href="https://wa.me/5541984559656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20triagem%20no%20Espa%C3%A7o%20ABAcaTEA."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-coral-pulse text-paper-white rounded-[40px] px-6 py-3 text-sm font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              Agendar triagem
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
