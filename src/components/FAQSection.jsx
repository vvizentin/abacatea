import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs, WHATSAPP_NUMBER } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-12 md:py-16 bg-paper-white border-t border-frost-gray/50">
      <div className="max-w-[840px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Dúvidas Frequentes
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Perguntas que toda família faz
            </h2>
            <p className="text-graphite text-sm sm:text-base">
              Respondemos com clareza para que você chegue ao Espaço ABAcaTEA com segurança e tranquilidade.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className={`rounded-[16px] overflow-hidden transition-all duration-200 border ${
                    isOpen
                      ? "bg-sage-wash/50 border-leaf-bright/35 shadow-xs"
                      : "bg-sage-wash/20 border-canopy-green/10 hover:bg-sage-wash/35"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors min-h-[52px] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-canopy-green text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-leaf-bright transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 border-t border-canopy-green/5">
                        <p className="text-graphite leading-relaxed text-xs sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Support helper */}
        <ScrollReveal delay={200}>
          <div className="mt-9 text-center">
            <p className="text-graphite text-xs sm:text-sm mb-3">Ficou com alguma dúvida específica da sua criança?</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Espa%C3%A7o%20ABAcaTEA.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-canopy-green/30 text-canopy-green rounded-[40px] px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-canopy-green hover:text-paper-white transition-all duration-200"
            >
              <MessageCircle size={15} />
              Conversar com nossa equipe pelo WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
