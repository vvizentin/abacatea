import { MessageCircle, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

export default function PreFooterCTA() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Gostaria de dar o próximo passo e agendar uma triagem no Espaço ABAcaTEA."
  )}`;

  return (
    <section className="py-14 md:py-20 bg-canopy-green text-paper-white relative overflow-hidden">
      {/* Subtle ambient light effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-leaf-bright/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-bloom/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-leaf-bright/20 border border-leaf-bright/35 text-paper-white rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide mb-5 shadow-xs">
            <Sparkles size={14} className="text-leaf-bright" />
            <span>Primeiro Passo com Acolhimento</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-paper-white leading-[1.12] mb-5 max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.025em" }}
          >
            Pronto para dar o{" "}
            <span className="text-leaf-bright font-bold">próximo passo</span>?
          </h2>

          <p className="text-paper-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Vamos conversar sobre como podemos acolher e acompanhar sua família.
            Nossa equipe está pronta para ouvir sua história e construir caminhos de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-coral-pulse text-paper-white rounded-[40px] px-8 py-4 text-base font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg min-h-[52px] w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Agendar triagem
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-paper-white/10 hover:bg-paper-white/20 text-paper-white border border-paper-white/25 rounded-[40px] px-7 py-4 text-base font-medium transition-all duration-200 min-h-[52px] w-full sm:w-auto"
            >
              Conhecer a clínica
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-paper-white/15 text-xs sm:text-sm text-paper-white/75 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-leaf-bright shrink-0" />
              <span>Sem burocracia ou filas longas</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-coral-pulse shrink-0" />
              <span>Atendimento humanizado e afetivo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-signal shrink-0" />
              <span>Fazenda Rio Grande – PR</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
