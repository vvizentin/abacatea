import './Footer.css';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Rodapé Institucional">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Coluna 1: Identidade */}
          <div className="footer-column footer-brand">
            <a href="#inicio" className="footer-logo">
              <span className="footer-logo-badge" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="footer-logo-text">
                ABA<span className="footer-logo-highlight">ca</span>TEA
              </span>
            </a>

            <p className="footer-slogan">
              <em>&ldquo;Cuidar, desenvolver e transformar juntos.&rdquo;</em>
            </p>

            <p className="footer-description">
              Clínica multidisciplinar pediátrica dedicada ao acolhimento e desenvolvimento integral de cada criança, sempre em parceria com a família.
            </p>

            <div className="footer-social-links" aria-label="Redes sociais demonstrativas">
              <a
                href="#inicio"
                className="social-link"
                aria-label="Instagram da ABAcaTEA (Demonstrativo)"
                title="Instagram (Demonstrativo)"
              >
                <span aria-hidden="true">📸</span>
              </a>
              <a
                href="#inicio"
                className="social-link"
                aria-label="Facebook da ABAcaTEA (Demonstrativo)"
                title="Facebook (Demonstrativo)"
              >
                <span aria-hidden="true">📘</span>
              </a>
              <a
                href="#inicio"
                className="social-link"
                aria-label="YouTube da ABAcaTEA (Demonstrativo)"
                title="YouTube (Demonstrativo)"
              >
                <span aria-hidden="true">▶️</span>
              </a>
              <a
                href="#inicio"
                className="social-link"
                aria-label="LinkedIn da ABAcaTEA (Demonstrativo)"
                title="LinkedIn (Demonstrativo)"
              >
                <span aria-hidden="true">💼</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <nav className="footer-column" aria-label="Links rápidos do rodapé">
            <h3 className="footer-column-title">Navegação</h3>
            <ul className="footer-links-list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>

          {/* Coluna 3: Especialidades */}
          <div className="footer-column">
            <h3 className="footer-column-title">Especialidades</h3>
            <ul className="footer-links-list">
              <li><a href="#especialidades">Psicologia Infantil</a></li>
              <li><a href="#especialidades">Fonoaudiologia</a></li>
              <li><a href="#especialidades">Terapia Ocupacional</a></li>
              <li><a href="#especialidades">Psicopedagogia</a></li>
              <li><a href="#especialidades">Terapia ABA</a></li>
              <li><a href="#especialidades">Fisioterapia Pediátrica</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Horários */}
          <div className="footer-column">
            <h3 className="footer-column-title">Contato & Horários</h3>
            <address className="footer-contact-info">
              <p>
                <strong>Endereço:</strong><br />
                Rua Exemplo, 123<br />
                Curitiba — PR
              </p>
              <p>
                <strong>Telefone:</strong><br />
                (41) 99999-9999
              </p>
              <p>
                <strong>E-mail:</strong><br />
                contato@abacatea.com.br
              </p>
              <p>
                <strong>Horário de Atendimento:</strong><br />
                Segunda a sexta: 08:00 às 18:00
              </p>
            </address>
          </div>
        </div>

        {/* Faixa Inferior de Copyright e Aviso Acadêmico */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 ABAcaTEA. Projeto acadêmico demonstrativo.
          </p>
          <p className="footer-disclaimer">
            Desenvolvido para fins de avaliação acadêmica sobre desenvolvimento web, Git, testes automatizados e CI/CD. Projeto acadêmico.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
