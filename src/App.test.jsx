import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component — Integração Global de Conteúdo Institucional', () => {
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
    expect(
      screen.getByRole('navigation', { name: /navegação principal/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre nós/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /especialidades/i })
    ).toBeInTheDocument();
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

  it('renderiza as seções institucionais com seus respectivos cabeçalhos', () => {
    render(<App />);
    // Sobre nós
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /cuidado multidisciplinar para cada criança/i,
      })
    ).toBeInTheDocument();

    // Especialidades
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /áreas de atendimento integradas/i,
      })
    ).toBeInTheDocument();

    // Como funciona
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /como funciona o cuidado na abacatea/i,
      })
    ).toBeInTheDocument();

    // Equipe
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /profissionais dedicados ao desenvolvimento infantil/i,
      })
    ).toBeInTheDocument();

    // Diferenciais
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /por que confiar o desenvolvimento na abacatea/i,
      })
    ).toBeInTheDocument();
  });
});
