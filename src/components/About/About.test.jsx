import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('Componente About', () => {
  it('renderiza o título da seção conforme o PRD', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /cuidado multidisciplinar para cada criança/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza os 4 pilares principais definidos no PRD', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { level: 3, name: /atendimento individualizado/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /equipe multidisciplinar/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /ambiente acolhedor/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /participação da família/i })
    ).toBeInTheDocument();
  });
});
