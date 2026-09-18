import { useState } from "react";
import { MapPin, MessageCircle, ExternalLink, CheckCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/clinicData";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = true;
    if (!form.whatsapp.trim()) newErrors.whatsapp = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\n` +
        `WhatsApp: ${form.whatsapp}.\n` +
        (form.mensagem
          ? `Como vocês podem nos ajudar: ${form.mensagem}\n`
          : "") +
        `Gostaria de agendar uma triagem no Espaço ABAcaTEA.`
    );

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    }, 600);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ nome: "", whatsapp: "", mensagem: "" });
    }, 3000);
  }

  const inputBase =
    "w-full rounded-[14px] border bg-paper-white px-4 py-3 text-charcoal text-sm placeholder-ash focus:outline-none focus:ring-2 transition-all";
  const inputNormal = `${inputBase} border-frost-gray focus:ring-leaf-bright/40 focus:border-leaf-bright/40`;
  const inputError = `${inputBase} border-coral-pulse/60 focus:ring-coral-pulse/40 focus:border-coral-pulse/40`;

  return (
    <section id="contato" className="py-12 md:py-16 bg-paper-white border-t border-frost-gray/50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-leaf-bright text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              Entre em Contato
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-canopy-green leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              O primeiro passo começa aqui
            </h2>
            <p className="text-graphite text-sm sm:text-base">
              Envie sua mensagem e nossa equipe retornará rapidamente com escuta acolhedora e sem burocracia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Quick Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="bg-sage-wash/70 rounded-[22px] p-6 sm:p-8 border border-leaf-bright/20 flex flex-col gap-4 shadow-xs relative overflow-hidden"
              >
                {/* Success feedback */}
                <div
                  className={`absolute inset-0 bg-sage-wash z-20 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
                    submitted
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-leaf-bright/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-leaf-bright" />
                  </div>
                  <p className="text-canopy-green font-bold text-lg">
                    Solicitação iniciada com sucesso!
                  </p>
                  <p className="text-graphite text-sm text-center max-w-xs">
                    Redirecionando para o WhatsApp da clínica…
                  </p>
                </div>

                <div className="flex items-center justify-between border-b border-canopy-green/10 pb-3 mb-1">
                  <div>
                    <h3 className="font-bold text-canopy-green text-lg sm:text-xl">
                      Agendar Triagem
                    </h3>
                    <p className="text-xs text-graphite mt-0.5">
                      Preencha apenas 3 campos rápidos para conversar com nossa equipe
                    </p>
                  </div>
                  <span className="hidden sm:inline-block bg-leaf-bright/15 text-canopy-green text-xs font-semibold px-2.5 py-1 rounded-full">
                    Retorno rápido
                  </span>
                </div>

                {/* 1. Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs font-bold text-canopy-green mb-1.5"
                  >
                    Seu Nome *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className={errors.nome ? inputError : inputNormal}
                    placeholder="Como podemos te chamar?"
                  />
                  {errors.nome && (
                    <p className="text-coral-pulse text-[11px] mt-1 font-medium">
                      Por favor, informe seu nome
                    </p>
                  )}
                </div>

                {/* 2. WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-xs font-bold text-canopy-green mb-1.5"
                  >
                    Seu WhatsApp de Contato *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    className={errors.whatsapp ? inputError : inputNormal}
                    placeholder="(41) 99999-9999"
                  />
                  {errors.whatsapp && (
                    <p className="text-coral-pulse text-[11px] mt-1 font-medium">
                      Por favor, informe seu telefone com DDD
                    </p>
                  )}
                </div>

                {/* 3. Como podemos ajudar? */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-xs font-bold text-canopy-green mb-1.5"
                  >
                    Como podemos ajudar sua família?
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputNormal} resize-none`}
                    placeholder="Conte brevemente a idade da sua criança, necessidade ou dúvida principal…"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-coral-pulse text-paper-white rounded-[40px] px-6 py-3.5 text-base font-semibold hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-sm cursor-pointer mt-2"
                >
                  <MessageCircle size={18} />
                  Agendar triagem
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Right: Location & Map Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <ScrollReveal direction="right">
              {/* Address card */}
              <div className="bg-sage-wash/30 border border-canopy-green/10 rounded-[22px] p-6 shadow-2xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-mint-wash flex items-center justify-center text-canopy-green">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-canopy-green text-base">Onde Estamos</h4>
                      <p className="text-xs text-graphite">Fazenda Rio Grande – PR</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Bairro+Igua%C3%A7u,+Fazenda+Rio+Grande+-+PR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-canopy-green hover:text-leaf-bright transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <p className="text-graphite text-xs sm:text-sm leading-relaxed mb-4">
                  Localização acessível no <strong>Bairro Iguaçu</strong>, com estacionamento e ambiente planejado para o acolhimento seguro da sua família.
                </p>

                {/* Compact Map Preview */}
                <div className="rounded-[16px] overflow-hidden border border-frost-gray/60 shadow-inner h-[220px] sm:h-[240px] relative bg-cover bg-center">
                  <iframe
                    title="Mapa de Localização do Espaço ABAcaTEA em Fazenda Rio Grande"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14449.26!2d-49.3100!3d-25.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4c3f33a4b4d%3A0x7a2e6f0a0e0b0c0d!2sBairro%20Igua%C3%A7u%2C%20Fazenda%20Rio%20Grande%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    className="w-full h-full relative z-10"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Quick contact pills */}
            <ScrollReveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-wash/70 hover:bg-sky-wash rounded-[16px] p-3.5 flex flex-col justify-between transition-colors border border-sky-signal/20"
                >
                  <div className="text-[11px] font-bold text-deep-teal uppercase">WhatsApp</div>
                  <div className="text-xs font-semibold text-canopy-green mt-1">(41) 98455-9656</div>
                </a>

                <div className="bg-cream rounded-[16px] p-3.5 flex flex-col justify-between border border-amber-900/10">
                  <div className="text-[11px] font-bold text-charcoal uppercase">Atendimento</div>
                  <div className="text-xs text-graphite mt-1">Seg–Sex: 8h–18h</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
