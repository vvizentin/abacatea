import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#espaco", label: "Nosso Espaço" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => ["#inicio", ...navLinks.map((l) => l.href)],
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-lavender-mist transition-colors duration-300 ${
        scrolled ? "border-b border-canopy-green/10 shadow-xs" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={scrollToTop}
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
          >
            <img
              src="/mascote-sem-fundo.png"
              alt="Espaço ABAcaTEA Mascote"
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "/logo.jpg";
              }}
            />
            <div className="flex flex-col">
              <span className="text-canopy-green font-semibold text-lg md:text-xl leading-tight tracking-tight">
                Espaço{" "}
                <span className="font-bold">
                  <span className="text-leaf-bright">ABA</span>
                  <span className="text-sky-signal">ca</span>
                  <span className="text-[#0891b2]">TEA</span>
                </span>
              </span>
              <span className="text-[11px] text-slate font-medium tracking-wide">
                Clínica Infantojuvenil
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-canopy-green text-sm font-medium hover:text-leaf-bright transition-colors duration-200 ${
                  activeSection === link.href ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/5541984559656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20triagem%20no%20Espa%C3%A7o%20ABAcaTEA."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-paper-white border border-canopy-green/30 text-canopy-green rounded-[40px] px-5 py-2 text-sm font-semibold hover:bg-canopy-green hover:text-paper-white hover:border-canopy-green transition-all duration-200 shadow-2xs"
          >
            Agendar triagem
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-canopy-green hover:bg-lavender-mist transition-colors"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-lavender-mist border-t border-canopy-green/10 px-5 mobile-drawer ${
          open ? "mobile-drawer-open pb-6 pt-4" : ""
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-canopy-green font-medium py-3 px-3 rounded-[16px] hover:bg-paper-white/60 transition-colors ${
                activeSection === link.href
                  ? "bg-mint-wash text-leaf-bright"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5541984559656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20triagem%20no%20Espa%C3%A7o%20ABAcaTEA."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-coral-pulse text-paper-white rounded-[40px] px-5 py-3 font-semibold shadow-xs hover:brightness-110 transition-colors"
        >
          Agendar triagem
        </a>
      </div>
    </header>
  );
}
