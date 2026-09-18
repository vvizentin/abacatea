import { MessageCircle, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-canopy-green min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left column — text */}
          <div className="flex flex-col items-start">
            {/* Tag com indicador verde pulsante */}
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2 bg-leaf-bright/20 border border-leaf-bright/35 text-paper-white rounded-[9999px] px-3.5 py-1 text-xs font-semibold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-leaf-bright animate-pulse" />
                <span>Clínica Multidisciplinar Infantojuvenil · Fazenda Rio Grande – PR</span>
              </div>
            </ScrollReveal>

            {/* H1 — Display */}
            <ScrollReveal delay={200}>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium text-paper-white leading-[1.08] mb-5"
                style={{ letterSpacing: "-0.028em" }}
              >
                Cultivando o{" "}
                <span className="text-leaf-bright font-bold inline-block relative">
                  desenvolvimento
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-leaf-bright/40 rounded-full hidden sm:block" />
                </span>{" "}
                e acolhendo famílias
              </h1>
            </ScrollReveal>

            {/* Supporting copy */}
            <ScrollReveal delay={350}>
              <p className="text-paper-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                A intervenção precoce faz toda a diferença. No Espaço ABAcaTEA,
                sua família encontra uma equipe integrada de especialistas
                dedicados a potencializar o desenvolvimento do seu filho com
                cuidado, escuta e afeto em cada etapa.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={500}>
              <div className="flex flex-wrap gap-3.5">
                {/* Primary CTA */}
                <a
                  href="https://wa.me/5541984559656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20triagem%20no%20Espa%C3%A7o%20ABAcaTEA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coral-pulse text-paper-white rounded-[40px] px-6 py-3 text-base font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 min-h-[46px] shadow-sm"
                >
                  <MessageCircle size={18} />
                  Agendar triagem
                </a>
                {/* Secondary CTA */}
                <a
                  href="#especialidades"
                  className="inline-flex items-center gap-2 bg-transparent border border-paper-white/70 text-paper-white rounded-[40px] px-5 py-3 text-base font-medium hover:bg-paper-white hover:text-canopy-green transition-all duration-200 min-h-[46px]"
                >
                  Conhecer a clínica
                  <ChevronRight size={18} />
                </a>
              </div>
            </ScrollReveal>

            {/* Pillars of Care */}
            <ScrollReveal delay={650}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 border-t border-paper-white/15 w-full">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-paper-white">7 Especialidades</div>
                  <div className="text-xs text-paper-white/70 font-medium mt-0.5">Equipe integrada sob o mesmo teto</div>
                </div>
                <div className="sm:border-l sm:border-paper-white/15 sm:pl-6">
                  <div className="text-xl sm:text-2xl font-semibold text-paper-white">0 a 14 anos</div>
                  <div className="text-xs text-paper-white/70 font-medium mt-0.5">Foco em neurodesenvolvimento e TEA</div>
                </div>
                <div className="sm:border-l sm:border-paper-white/15 sm:pl-6">
                  <div className="text-xl sm:text-2xl font-semibold text-paper-white">Afeto & Ciência</div>
                  <div className="text-xs text-paper-white/70 font-medium mt-0.5">Prática baseada em evidências</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — visual composition */}
          <ScrollReveal delay={300} direction="right">
            <div className="relative flex justify-center items-center py-4">
              <div className="relative w-full max-w-[440px] aspect-square">
                {/* Main photo */}
                <div className="w-full h-full rounded-[24px] overflow-hidden shadow-2xl border-2 border-paper-white/10 bg-paper-white/5">
                  <img
                    src="/hero-terapia.jpg"
                    alt="Sessão terapêutica humanizada e lúdica no Espaço ABAcaTEA"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mascot badge */}
                <div className="absolute -top-3 -left-3 sm:-left-5 bg-paper-white text-ink-black rounded-[16px] p-2.5 sm:px-3.5 sm:py-2.5 shadow-xl flex items-center gap-2.5 border border-frost-gray/50 animate-bounce-subtle">
                  <img
                    src="/mascote-sem-fundo.png"
                    alt="Mascote ABAcaTEA"
                    className="w-9 h-9 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-canopy-green">Espaço Acolhedor</div>
                    <div className="text-[11px] text-slate font-medium">Ambiente seguro e lúdico</div>
                  </div>
                </div>

                {/* Bottom tag */}
                <div className="absolute bottom-4 right-4 bg-canopy-green/90 backdrop-blur-md text-paper-white rounded-[14px] px-3.5 py-2 border border-paper-white/20 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-leaf-bright" />
                  <span className="text-xs font-semibold tracking-wide">
                    Atendimento Individualizado
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
