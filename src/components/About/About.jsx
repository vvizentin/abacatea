import SectionHeader from '../common/SectionHeader/SectionHeader';
import './About.css';

const pillars = [
  {
    icon: '🎯',
    title: 'Atendimento individualizado',
    description: 'Cada criança possui uma história, tempo e necessidades próprias. Nossas abordagens respeitam cada singularidade.',
  },
  {
    icon: '👥',
    title: 'Equipe multidisciplinar',
    description: 'Profissionais de diversas especialidades atuam em sinergia diária, construindo uma visão clínica 360° da criança.',
  },
  {
    icon: '🏡',
    title: 'Ambiente acolhedor',
    description: 'Espaço planejado para transmitir afeto, segurança e estímulos sensoriais equilibrados, favorecendo o desenvolvimento natural.',
  },
  {
    icon: '❤️',
    title: 'Participação da família',
    description: 'Os pais e responsáveis são parte essencial do processo terapêutico, com orientações constantes e diálogo aberto.',
  },
];

export function About() {
  return (
    <section id="sobre" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          id="about-title"
          tag="Sobre Nós"
          title="Cuidado multidisciplinar para cada criança"
          subtitle="Na ABAcaTEA, acreditamos que o desenvolvimento infantil floresce quando combinamos rigor técnico, escuta atenta e afeto."
        />

        <div className="about-main-content">
          <div className="about-narrative">
            <p className="about-text-lead">
              A <strong>ABAcaTEA</strong> nasceu com a missão de oferecer um espaço de acolhimento e desenvolvimento contínuo para crianças e suas famílias. Compreendemos que cada conquista é construída passo a passo, respeitando a personalidade e os limites de cada criança.
            </p>
            <p className="about-text-body">
              Nossa abordagem integra psicologia, fonoaudiologia, terapia ocupacional, psicopedagogia, fisioterapia e intervenções comportamentais baseadas em ABA. Essa união de saberes permite que nossos terapeutas compartilhem aprendizados e alinhem condutas, criando uma trajetória consistente de evolução.
            </p>
          </div>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card card">
              <span className="pillar-icon" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
