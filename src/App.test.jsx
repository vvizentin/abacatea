import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component — Integração Topo & Acessibilidade', () => {
  it('renderiza o skip-link acessível para navegação por teclado', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', {
      name: /pular para o conteúdo principal/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renderiza a Navbar e seus links de navegação', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre nós/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /especialidades/i })).toBeInTheDocument();
  });

  it('renderiza a seção Hero com o título oficial do PRD', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /cuidado que acolhe\. desenvolvimento que transforma\./i,
      })
    ).toBeInTheDocument();
  });
});
