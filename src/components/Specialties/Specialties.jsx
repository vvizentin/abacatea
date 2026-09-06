import { specialties } from '../../data/specialties';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './Specialties.css';

const specialtyIcons = {
  psicologia: '🧠',
  fonoaudiologia: '🗣️',
  'terapia-ocupacional': '🧩',
  psicopedagogia: '📖',
  'terapia-aba': '🌱',
  fisioterapia: '🏃',
};

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="section specialties-section"
      aria-labelledby="specialties-title"
    >
      <div className="container">
        <SectionHeader
          id="specialties-title"
          tag="Especialidades"
          title="Áreas de atendimento integradas"
          subtitle="Conheça os campos de atuação da nossa clínica pediátrica, articulados para promover o desenvolvimento global da criança."
        />

        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <article key={specialty.id} className="specialty-card card">
              <div className="specialty-card-header">
                <span className="specialty-icon" aria-hidden="true">
                  {specialtyIcons[specialty.id] || '✨'}
                </span>
                <span className="specialty-badge">Pediátrico</span>
              </div>
              <h3 className="specialty-title">{specialty.title}</h3>
              <p className="specialty-description">{specialty.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialties;
