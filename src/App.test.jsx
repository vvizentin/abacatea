import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component — Base & Acessibilidade', () => {
  it('renderiza o cabeçalho base inicial com título ABAcaTEA', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /abacatea/i })
    ).toBeInTheDocument();
  });

  it('renderiza o skip-link para acessibilidade por teclado', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', {
      name: /pular para o conteúdo principal/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});
