import { team } from '../../data/team';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './Team.css';

export function Team() {
  return (
    <section id="equipe" className="section team-section" aria-labelledby="team-title">
      <div className="container">
        <SectionHeader
          id="team-title"
          tag="Nossa Equipe"
          title="Profissionais dedicados ao desenvolvimento infantil"
          subtitle="Uma equipe integrada, humana e qualificada, atuando de maneira sinérgica para garantir o melhor plano terapêutico."
        />

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.id} className="team-card card">
              <div className="team-avatar-wrapper">
                <div className="team-avatar" aria-hidden="true">
                  <span className="avatar-initials">
                    {member.name
                      .replace(/Dr(a)?\.\s*/i, '')
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <span className="team-registry">{member.registry}</span>
                <p className="team-description">{member.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="academic-notice-banner" role="note">
          <span className="notice-icon" aria-hidden="true">ℹ️</span>
          <p>
            <strong>Nota Acadêmica:</strong> Os profissionais, nomes e números de registro profissional apresentados acima são demonstrativos e fictícios, criados exclusivamente para fins de avaliação acadêmica.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
