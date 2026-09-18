import { HeartHandshake, CheckCircle2 } from "lucide-react";
import { aboutData, diferenciais } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

const diferencialIcons = {
  Sprout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  ),
  Users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const pastelRotation = [
  "bg-mint-wash",
  "bg-sage-wash",
  "bg-sky-wash",
  "bg-cream",
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-paper-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Quem Somos
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Cuidado que vai além da consulta
            </h2>
            <p className="text-graphite text-sm sm:text-base leading-relaxed">
              Uma abordagem que integra afeto, evidências científicas e a participação da família em cada conquista.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left: Pull quote & narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <ScrollReveal delay={100} direction="left">
              <blockquote className="border-l-4 border-leaf-bright pl-5 py-2">
                <p className="text-lg sm:text-2xl font-medium text-canopy-green leading-relaxed italic">
                  &quot;{aboutData.quote}&quot;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-graphite text-sm sm:text-base leading-relaxed">
                {aboutData.lead}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm font-semibold text-canopy-green">
                <span className="flex items-center gap-1.5 text-leaf-bright">
                  <CheckCircle2 size={16} />
                  <span>Ambiente Acolhedor</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate/30" />
                <span className="flex items-center gap-1.5 text-deep-teal">
                  <CheckCircle2 size={16} />
                  <span>Protocolos Científicos</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate/30 hidden sm:block" />
                <span className="hidden sm:flex items-center gap-1.5 text-canopy-green">
                  <CheckCircle2 size={16} />
                  <span>Escuta Familiar</span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Synthesis Panel (5 cols) */}
          <ScrollReveal delay={200} direction="right" className="lg:col-span-5">
            <div className="bg-sage-wash/90 rounded-[22px] p-6 sm:p-7 border border-leaf-bright/15 shadow-xs">
              <div className="flex items-center gap-2.5 text-canopy-green mb-3">
                <div className="w-9 h-9 rounded-[10px] bg-paper-white flex items-center justify-center shadow-xs">
                  <HeartHandshake size={18} className="text-leaf-bright" />
                </div>
                <h3 className="font-bold text-base sm:text-lg">Nosso Compromisso</h3>
              </div>

              <p className="text-graphite text-xs sm:text-sm leading-relaxed mb-5">
                {aboutData.commitment}
              </p>

              <div>
                <span className="block text-[11px] font-bold text-canopy-green uppercase tracking-wider mb-2">
                  Pilares do atendimento
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aboutData.values.map((v) => (
                    <span
                      key={v}
                      className="bg-paper-white text-canopy-green text-xs font-semibold px-2.5 py-1 rounded-full border border-canopy-green/10 shadow-2xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Diferenciais — Editorial Grid */}
        <div className="pt-4 border-t border-frost-gray/50">
          <ScrollReveal>
            <div className="text-center mb-7">
              <p className="text-xs sm:text-sm font-semibold text-canopy-green uppercase tracking-wide">
                Diferenciais do Espaço{" "}
                <span className="font-bold">
                  <span className="text-leaf-bright">ABA</span>
                  <span className="text-sky-signal">ca</span>
                  <span className="text-[#0891b2]">TEA</span>
                </span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {diferenciais.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div
                  className={`${pastelRotation[i % pastelRotation.length]} rounded-[18px] p-5 sm:p-6 flex flex-col gap-2.5 hover:-translate-y-1 transition-transform duration-200 h-full border border-canopy-green/5`}
                >
                  <div className="w-9 h-9 bg-canopy-green/10 rounded-[8px] flex items-center justify-center text-canopy-green shrink-0">
                    {diferencialIcons[item.icon]}
                  </div>
                  <div>
                    <h3 className="font-bold text-canopy-green text-base sm:text-lg mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-graphite text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
