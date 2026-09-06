import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Team from './Team';

describe('Componente Team', () => {
  it('renderiza o cabeçalho da seção de equipe', () => {
    render(<Team />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /profissionais dedicados ao desenvolvimento infantil/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza os 5 profissionais estipulados no PRD', () => {
    render(<Team />);
    const expectedMembers = [
      'Dra. Mariana Alves',
      'Dra. Camila Rocha',
      'Dra. Juliana Martins',
      'Dr. Lucas Ferreira',
      'Dra. Ana Beatriz Souza',
    ];

    expectedMembers.forEach((name) => {
      expect(
        screen.getByRole('heading', { level: 3, name })
      ).toBeInTheDocument();
    });
  });

  it('exibe o aviso acadêmico demonstrativo', () => {
    render(<Team />);
    expect(screen.getByRole('note')).toHaveTextContent(/nota acadêmica/i);
  });
});
