import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component — Integração Global, Landmarks e Acessibilidade', () => {
  it('renderiza o skip-link acessível para navegação por teclado', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', {
      name: /pular para o conteúdo principal/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('possui landmarks semânticos essenciais (header, main, footer, aside)', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(
      screen.getByRole('complementary', { name: /contato rápido via whatsapp/i })
    ).toBeInTheDocument();
  });

  it('renderiza a Navbar e o Hero com títulos oficiais', () => {
    render(<App />);
    expect(
      screen.getByRole('navigation', { name: /navegação principal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /cuidado que acolhe\. desenvolvimento que transforma\./i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza todas as seções institucionais com hierarquia h2 correta', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /cuidado multidisciplinar para cada criança/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /áreas de atendimento integradas/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /como funciona o cuidado na abacatea/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /profissionais dedicados ao desenvolvimento infantil/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /por que confiar o desenvolvimento na abacatea/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza os módulos de engajamento, contato e rodapé institucional', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /relatos de carinho e evolução/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /perguntas frequentes sobre o atendimento/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /estamos aqui para acolher sua família/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/© 2026 abacatea\. projeto acadêmico demonstrativo\./i)
    ).toBeInTheDocument();
  });
});
