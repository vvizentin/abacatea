import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Specialties from './Specialties';

describe('Componente Specialties', () => {
  it('renderiza o cabeçalho da seção de especialidades', () => {
    render(<Specialties />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /áreas de atendimento integradas/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza todas as 6 especialidades exigidas no PRD', () => {
    render(<Specialties />);
    const expectedTitles = [
      'Psicologia',
      'Fonoaudiologia',
      'Terapia Ocupacional',
      'Psicopedagogia',
      'Terapia ABA',
      'Fisioterapia',
    ];

    expectedTitles.forEach((title) => {
      expect(
        screen.getByRole('heading', { level: 3, name: title })
      ).toBeInTheDocument();
    });
  });
});
