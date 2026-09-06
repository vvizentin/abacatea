import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component — Integração Global com Seção de Contato', () => {
  it('renderiza o skip-link acessível para navegação por teclado', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', {
      name: /pular para o conteúdo principal/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
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

  it('renderiza todas as seções institucionais', () => {
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

  it('renderiza os módulos de engajamento (Depoimentos, FAQ e WhatsApp)', () => {
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
      screen.getByRole('link', {
        name: /fale conosco pelo whatsapp/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza a seção de contato com formulário e canais de atendimento', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /estamos aqui para acolher sua família/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /enviar mensagem/i })
    ).toBeInTheDocument();
  });
});
