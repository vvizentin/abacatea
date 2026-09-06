import { testimonials } from '../../data/testimonials';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './Testimonials.css';

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <SectionHeader
          id="testimonials-title"
          tag="Depoimentos"
          title="Relatos de carinho e evolução"
          subtitle="A confiança das famílias nos inspira diariamente a buscar o melhor cuidado e acolhimento."
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card card">
              <div className="testimonial-quote-icon" aria-hidden="true">
                “
              </div>
              <blockquote className="testimonial-text">
                <p>&ldquo;{item.text}&rdquo;</p>
              </blockquote>
              <div className="testimonial-author-wrapper">
                <div className="author-avatar" aria-hidden="true">
                  <span>{item.author[0]}</span>
                </div>
                <div className="author-details">
                  <cite className="author-name">{item.author}</cite>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="academic-notice-banner testimonials-notice" role="note">
          <span className="notice-icon" aria-hidden="true">ℹ️</span>
          <p>
            <strong>Nota Acadêmica:</strong> Os depoimentos e nomes acima são demonstrativos e fictícios, criados exclusivamente para fins de simulação e avaliação acadêmica do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
