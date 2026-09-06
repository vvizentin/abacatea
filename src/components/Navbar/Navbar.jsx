import { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-badge" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.9"/>
            </svg>
          </span>
          <span className="logo-text">
            ABA<span className="logo-highlight">ca</span>TEA
          </span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-controls="navbar-menu"
        >
          <span className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
          <span className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
          <span className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Navegação Principal"
        >
          <ul className="nav-links">
            <li>
              <a href="#inicio" className="nav-link" onClick={closeMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="nav-link" onClick={closeMenu}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#especialidades" className="nav-link" onClick={closeMenu}>
                Especialidades
              </a>
            </li>
            <li>
              <a href="#equipe" className="nav-link" onClick={closeMenu}>
                Equipe
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="nav-link" onClick={closeMenu}>
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>

          <div className="nav-cta-wrapper">
            <a
              href="#contato"
              className="btn btn-primary nav-cta-btn"
              onClick={closeMenu}
            >
              Agendar atendimento
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
