import './WhatsAppButton.css';

export function WhatsAppButton() {
  // Número fictício estabelecido no PRD: (41) 99999-9999
  const whatsappUrl =
    'https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20na%20ABAcaTEA';

  return (
    <aside className="whatsapp-floating-container" aria-label="Contato rápido via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Fale conosco pelo WhatsApp (Número demonstrativo)"
      >
        <span className="whatsapp-tooltip">Fale Conosco</span>
        <span className="whatsapp-icon-wrapper" aria-hidden="true">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="whatsapp-svg"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16C2 18.59 2.7 21.02 3.92 23.12L2 30L9.12 28.14C11.14 29.28 13.5 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2ZM23.36 21.62C23.06 22.48 21.84 23.18 20.9 23.38C20.26 23.52 19.42 23.62 16.6 22.46C13.02 20.98 10.7 17.34 10.52 17.1C10.34 16.86 9.08 15.18 9.08 13.44C9.08 11.7 9.96 10.86 10.32 10.5C10.62 10.2 11.1 10.06 11.54 10.06C11.68 10.06 11.82 10.06 11.94 10.08C12.3 10.1 12.48 10.12 12.72 10.68C13.02 11.38 13.74 13.14 13.82 13.32C13.92 13.5 13.98 13.74 13.86 13.98C13.74 14.22 13.66 14.32 13.48 14.52C13.3 14.72 13.14 14.88 12.96 15.1C12.76 15.3 12.56 15.52 12.78 15.9C13 16.28 13.78 17.54 14.92 18.56C16.4 19.88 17.6 20.3 18.04 20.48C18.48 20.66 18.72 20.62 18.96 20.34C19.26 20 20.08 19.04 20.38 18.62C20.68 18.2 20.98 18.26 21.38 18.42C21.78 18.56 23.96 19.64 24.36 19.84C24.76 20.04 25.04 20.14 25.14 20.32C25.26 20.5 25.26 21.36 23.36 21.62Z" />
          </svg>
        </span>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
