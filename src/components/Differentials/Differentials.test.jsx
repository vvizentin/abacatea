import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Differentials from './Differentials';

describe('Componente Differentials', () => {
  it('renderiza o cabeçalho da seção de diferenciais', () => {
    render(<Differentials />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /por que confiar o desenvolvimento na abacatea/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza todos os 5 diferenciais definidos no PRD', () => {
    render(<Differentials />);
    const expectedDiffs = [
      'Atendimento individualizado',
      'Equipe integrada',
      'Participação da família',
      'Ambiente acolhedor',
      'Acompanhamento contínuo',
    ];

    expectedDiffs.forEach((diff) => {
      expect(
        screen.getByRole('heading', { level: 3, name: diff })
      ).toBeInTheDocument();
    });
  });
});
