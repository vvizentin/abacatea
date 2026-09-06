import { describe, it, expect } from 'vitest';
import {
  specialties,
  team,
  howItWorksSteps,
  differentials,
  testimonials,
  faqItems,
} from './index';

describe('Dados Estáticos do Projeto ABAcaTEA', () => {
  it('contém as 6 especialidades requeridas pelo PRD', () => {
    expect(specialties).toHaveLength(6);
    const ids = specialties.map((s) => s.id);
    expect(ids).toEqual([
      'psicologia',
      'fonoaudiologia',
      'terapia-ocupacional',
      'psicopedagogia',
      'terapia-aba',
      'fisioterapia',
    ]);
  });

  it('contém a equipe fictícia completa com 5 profissionais', () => {
    expect(team).toHaveLength(5);
    team.forEach((member) => {
      expect(member).toHaveProperty('name');
      expect(member).toHaveProperty('role');
      expect(member).toHaveProperty('description');
    });
  });

  it('contém as 5 etapas do método de atendimento', () => {
    expect(howItWorksSteps).toHaveLength(5);
    expect(howItWorksSteps[0].title).toBe('Conheça a clínica');
    expect(howItWorksSteps[4].title).toBe('Acompanhamento');
  });

  it('contém os 5 diferenciais da clínica', () => {
    expect(differentials).toHaveLength(5);
  });

  it('contém 3 depoimentos demonstrativos identificados como projeto acadêmico', () => {
    expect(testimonials).toHaveLength(3);
    testimonials.forEach((testimonial) => {
      expect(testimonial.role).toContain('Demonstrativo');
    });
  });

  it('contém as 5 perguntas obrigatórias do FAQ', () => {
    expect(faqItems).toHaveLength(5);
    faqItems.forEach((faq) => {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    });
  });
});
