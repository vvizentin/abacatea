import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';

describe('Componente Testimonials', () => {
  it('renderiza o cabeçalho da seção de depoimentos', () => {
    render(<Testimonials />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /relatos de carinho e evolução/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza os 3 depoimentos demonstrativos', () => {
    render(<Testimonials />);
    expect(screen.getByText(/mariana p\./i)).toBeInTheDocument();
    expect(screen.getByText(/carlos e\./i)).toBeInTheDocument();
    expect(screen.getByText(/fernanda r\./i)).toBeInTheDocument();
  });

  it('exibe a nota acadêmica demonstrativa do projeto', () => {
    render(<Testimonials />);
    expect(screen.getByRole('note')).toHaveTextContent(
      /os relatos apresentados acima integram a demonstração/i
    );
  });
});
