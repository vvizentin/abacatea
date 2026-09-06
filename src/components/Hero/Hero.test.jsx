import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Componente Hero', () => {
  it('renderiza o título principal exatamente como definido no PRD', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/cuidado que acolhe/i);
    expect(heading).toHaveTextContent(/desenvolvimento que transforma/i);
  });

  it('renderiza o texto descritivo oficial do PRD', () => {
    render(<Hero />);
    expect(
      screen.getByText(/na abacatea, cada criança é única/i)
    ).toBeInTheDocument();
  });

  it('renderiza os botões de ação com links para suas respectivas seções', () => {
    render(<Hero />);
    const ctaBtn = screen.getByRole('link', { name: /agendar atendimento/i });
    const aboutBtn = screen.getByRole('link', { name: /conheça nossa clínica/i });

    expect(ctaBtn).toBeInTheDocument();
    expect(ctaBtn).toHaveAttribute('href', '#contato');

    expect(aboutBtn).toBeInTheDocument();
    expect(aboutBtn).toHaveAttribute('href', '#sobre');
  });

  it('possui a tag de identificação da clínica', () => {
    render(<Hero />);
    expect(
      screen.getByText(/clínica multidisciplinar pediátrica/i)
    ).toBeInTheDocument();
  });
});
