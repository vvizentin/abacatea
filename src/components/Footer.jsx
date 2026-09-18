import { MessageCircle, Heart, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[#12382c] text-paper-white border-t border-leaf-bright/25">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20 py-10 md:py-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Col 1: Brand & Purpose (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <img
                  src="/mascote-sem-fundo.png"
                  alt="Espaço ABAcaTEA Mascote"
                  className="h-11 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-paper-white font-bold text-xl leading-tight tracking-tight">
                    Espaço{" "}
                    <span className="text-leaf-bright">ABA</span>
                    <span className="text-sky-signal">ca</span>
                    <span className="text-[#0891b2]">TEA</span>
                  </span>
                  <span className="text-[11px] text-paper-white/70 font-medium tracking-wide">
                    Clínica Multidisciplinar Infantojuvenil
                  </span>
                </div>
              </div>

              <p className="text-paper-white/75 text-xs sm:text-sm leading-relaxed max-w-sm">
                Potencializando o desenvolvimento de crianças e adolescentes com escuta cuidadosa,
                práticas baseadas em evidências e acolhimento dedicado à família em Fazenda Rio Grande – PR.
              </p>

              <div className="inline-flex items-center gap-2 text-leaf-bright text-xs font-semibold pt-1">
                <Heart size={14} className="fill-leaf-bright" />
                <span>Cultivando o desenvolvimento com afeto e ciência</span>
              </div>
            </div>

            {/* Col 2: Especialidades (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-paper-white text-sm uppercase tracking-wider mb-3 text-leaf-bright/90">
                Especialidades
              </h4>
              <ul className="flex flex-col gap-1.5 text-xs text-paper-white/70">
                <li>• Avaliação Neuropsicológica</li>
                <li>• Terapia ABA & Análise do Comportamento</li>
                <li>• Fonoaudiologia & Comunicação</li>
                <li>• Psicologia & Terapia Infantojuvenil</li>
                <li>• Psicopedagogia & Aprendizagem</li>
                <li>• Fisioterapia & Psicomotricidade</li>
                <li>• Orientação Parental & Familiar</li>
              </ul>
            </div>

            {/* Col 3: Navegação (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-paper-white text-sm uppercase tracking-wider mb-3 text-leaf-bright/90">
                Navegação
              </h4>
              <nav className="flex flex-col gap-2 text-xs">
                {[
                  { href: "#inicio", label: "Início" },
                  { href: "#sobre", label: "Sobre a Clínica" },
                  { href: "#especialidades", label: "Especialidades" },
                  { href: "#jornada", label: "Como Funciona" },
                  { href: "#espaco", label: "Nosso Espaço" },
                  { href: "#faq", label: "Dúvidas Frequentes" },
                  { href: "#contato", label: "Agendar Triagem" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-paper-white/65 hover:text-leaf-bright transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 4: Contato & Unidade (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4 className="font-bold text-paper-white text-sm uppercase tracking-wider mb-1 text-leaf-bright/90">
                Atendimento
              </h4>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-paper-white/10 hover:bg-paper-white/15 px-3.5 py-2 rounded-[12px] text-xs text-paper-white font-medium transition-colors border border-paper-white/10"
              >
                <MessageCircle size={15} className="text-leaf-bright" />
                <span>WhatsApp: (41) 98455-9656</span>
              </a>

              <a
                href="https://instagram.com/aba_ca_tea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-paper-white/10 hover:bg-paper-white/15 px-3.5 py-2 rounded-[12px] text-xs text-paper-white font-medium transition-colors border border-paper-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-leaf-bright shrink-0"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram: @aba_ca_tea</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-paper-white/65 pt-1">
                <MapPin size={15} className="text-leaf-bright shrink-0 mt-0.5" />
                <span>Bairro Iguaçu, Fazenda Rio Grande – PR</span>
              </div>
              <div className="text-[11px] text-paper-white/50 pl-5">
                Seg–Sex: 8h às 18h · Sáb: 8h às 12h
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-paper-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-paper-white/45">
          <div>
            © {new Date().getFullYear()} Espaço ABAcaTEA – Todos os direitos reservados.
          </div>
          <div>
            CNPJ: 48.288.539/0001-14 · Atendimento Especializado no Paraná
          </div>
        </div>
      </div>
    </footer>
  );
}
