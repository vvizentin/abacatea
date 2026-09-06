import { differentials } from '../../data/differentials';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './Differentials.css';

const differentialIcons = {
  'atendimento-individualizado': '🌟',
  'equipe-integrada': '🧩',
  'participacao-familia': '🏡',
  'ambiente-acolhedor': '🧸',
  'acompanhamento-continuo': '📈',
};

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section differentials-section"
      aria-labelledby="differentials-title"
    >
      <div className="container">
        <SectionHeader
          id="differentials-title"
          tag="Nossos Diferenciais"
          title="Por que confiar o desenvolvimento na ABAcaTEA"
          subtitle="Compromisso ético, ambiente estruturado e olhar humanizado em cada atendimento."
        />

        <div className="differentials-grid">
          {differentials.map((diff) => (
            <div key={diff.id} className="differential-card card">
              <div className="differential-card-top">
                <span className="diff-icon" aria-hidden="true">
                  {differentialIcons[diff.id] || '✨'}
                </span>
                <span className="diff-badge">{diff.badge}</span>
              </div>
              <h3 className="diff-title">{diff.title}</h3>
              <p className="diff-description">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
