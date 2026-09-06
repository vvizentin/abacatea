import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorks from './HowItWorks';

describe('Componente HowItWorks', () => {
  it('renderiza o cabeçalho da seção com tag e título', () => {
    render(<HowItWorks />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /como funciona o cuidado na abacatea/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza as 5 etapas definidas no PRD', () => {
    render(<HowItWorks />);
    const expectedSteps = [
      'Conheça a clínica',
      'Primeira conversa',
      'Avaliação',
      'Plano individualizado',
      'Acompanhamento',
    ];

    expectedSteps.forEach((step) => {
      expect(
        screen.getByRole('heading', { level: 3, name: step })
      ).toBeInTheDocument();
    });
  });
});
