import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span>Clínica Multidisciplinar Pediátrica</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Cuidado que acolhe.{' '}
            <span className="hero-title-highlight">
              Desenvolvimento que transforma.
            </span>
          </h1>

          <p className="hero-description">
            Na ABAcaTEA, cada criança é única. Unimos diferentes especialidades
            e profissionais para oferecer um cuidado individualizado, acolhedor
            e baseado nas necessidades de cada criança.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary hero-btn-cta">
              Agendar atendimento
            </a>
            <a href="#sobre" className="btn btn-outline hero-btn-secondary">
              Conheça nossa clínica
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-icon" aria-hidden="true">🌱</span>
              <div>
                <strong>Cuidado Individualizado</strong>
                <p>Respeito ao ritmo e potencial de cada criança</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon" aria-hidden="true">🤝</span>
              <div>
                <strong>Família Presente</strong>
                <p>Orientação e parceria constante em cada etapa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-illustration">
              <svg
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hero-svg"
              >
                {/* Formas orgânicas suaves com cores oficiais */}
                <circle cx="160" cy="160" r="140" fill="#F0EEF8" />
                <path
                  d="M160 50C220.751 50 270 99.2487 270 160C270 220.751 220.751 270 160 270C99.2487 270 50 220.751 50 160C50 99.2487 99.2487 50 160 50Z"
                  fill="#E8F6F6"
                  opacity="0.8"
                />
                <circle cx="160" cy="140" r="70" fill="#6C63A8" fillOpacity="0.15" />
                <circle cx="210" cy="180" r="45" fill="#8CC7C5" fillOpacity="0.35" />
                <circle cx="120" cy="190" r="35" fill="#F2B880" fillOpacity="0.45" />

                {/* Ícone simbólico de acolhimento e desenvolvimento */}
                <path
                  d="M160 105C148.954 105 140 113.954 140 125C140 136.046 148.954 145 160 145C171.046 145 180 136.046 180 125C180 113.954 171.046 105 160 105Z"
                  fill="#6C63A8"
                />
                <path
                  d="M130 195C130 167.386 143.431 155 160 155C176.569 155 190 167.386 190 195H130Z"
                  fill="#6C63A8"
                />
                <path
                  d="M200 135C193.373 135 188 140.373 188 147C188 153.627 193.373 159 200 159C206.627 159 212 153.627 212 147C212 140.373 206.627 135 200 135Z"
                  fill="#8CC7C5"
                />
                <path
                  d="M182 195C182 177.327 190.059 168 200 168C209.941 168 218 177.327 218 195H182Z"
                  fill="#8CC7C5"
                />
              </svg>
            </div>

            <div className="floating-badge badge-top">
              <span className="floating-icon">⭐</span>
              <div>
                <strong>Equipe Integrada</strong>
                <span>6 Especialidades</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="floating-icon">🌿</span>
              <div>
                <strong>Ambiente Acolhedor</strong>
                <span>Segurança e Conforto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
