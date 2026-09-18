import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-canopy-green text-paper-white text-xs font-semibold px-4 py-2 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale com nossa equipe de triagem
        <div className="absolute top-full right-4 border-4 border-transparent border-t-canopy-green" />
      </div>

      {/* Subtle pulse */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping"
        style={{ animationDuration: "2.5s" }}
      />

      {/* Button */}
      <a
        href="https://wa.me/5541984559656?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamentos%20e%20triagem%20no%20Espa%C3%A7o%20ABAcaTEA."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Fale com nossa equipe de triagem pelo WhatsApp"
      >
        <MessageCircle size={26} className="text-paper-white" fill="currentColor" />
      </a>
    </div>
  );
}
