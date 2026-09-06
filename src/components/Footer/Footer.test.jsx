import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Componente Footer', () => {
  it('renderiza o landmark de rodapé institucional', () => {
    render(<Footer />);
    expect(
      screen.getByRole('contentinfo', { name: /rodapé institucional/i })
    ).toBeInTheDocument();
  });

  it('renderiza o copyright oficial do PRD', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2026 abacatea\. projeto acadêmico demonstrativo\./i)
    ).toBeInTheDocument();
  });

  it('renderiza os links das colunas de navegação e especialidades', () => {
    render(<Footer />);
    expect(
      screen.getByRole('navigation', { name: /links rápidos do rodapé/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /especialidades/i })).toBeInTheDocument();
  });

  it('renderiza as informações de contato e horário no rodapé', () => {
    render(<Footer />);
    expect(screen.getByText(/rua exemplo, 123/i)).toBeInTheDocument();
    expect(screen.getByText(/\(41\) 99999-9999/i)).toBeInTheDocument();
    expect(screen.getByText(/contato@abacatea\.com\.br/i)).toBeInTheDocument();
    expect(screen.getByText(/segunda a sexta: 08:00 às 18:00/i)).toBeInTheDocument();
  });
});
