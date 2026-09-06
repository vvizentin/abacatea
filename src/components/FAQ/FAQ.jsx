import { useState } from 'react';
import { faqItems } from '../../data/faq';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './FAQ.css';

export function FAQ() {
  // O primeiro item inicia aberto por padrão para enriquecer a experiência visual
  const [openId, setOpenId] = useState('faq-1');

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeader
          id="faq-title"
          tag="Dúvidas Frequentes"
          title="Perguntas frequentes sobre o atendimento"
          subtitle="Esclareça as principais questões sobre nossas especialidades, processos de avaliação e acompanhamento familiar."
        />

        <div className="faq-accordion" role="presentation">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item card ${isOpen ? 'active' : ''}`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-icon ${isOpen ? 'rotate' : ''}`} aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className="faq-panel"
                  hidden={!isOpen}
                >
                  <div className="faq-panel-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
