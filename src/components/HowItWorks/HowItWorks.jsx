import { howItWorksSteps } from '../../data/howItWorks';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './HowItWorks.css';

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section how-it-works-section"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <SectionHeader
          id="how-it-works-title"
          tag="Método de Atendimento"
          title="Como funciona o cuidado na ABAcaTEA"
          subtitle="Uma jornada estruturada e transparente, desenhada para acolher a família e potencializar o desenvolvimento da criança."
        />

        <div className="steps-container">
          <ol className="steps-list">
            {howItWorksSteps.map((stepItem, index) => (
              <li key={stepItem.step} className="step-card card">
                <div className="step-badge-wrapper">
                  <span className="step-number" aria-hidden="true">
                    0{stepItem.step}
                  </span>
                  {index < howItWorksSteps.length - 1 && (
                    <span className="step-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="step-body">
                  <h3 className="step-title">{stepItem.title}</h3>
                  <p className="step-description">{stepItem.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
