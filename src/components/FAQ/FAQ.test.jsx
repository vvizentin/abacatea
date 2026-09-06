import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQ from './FAQ';

describe('Componente FAQ', () => {
  it('renderiza o cabeçalho do FAQ', () => {
    render(<FAQ />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /perguntas frequentes sobre o atendimento/i,
      })
    ).toBeInTheDocument();
  });

  it('renderiza todas as 5 perguntas estipuladas no PRD', () => {
    render(<FAQ />);
    expect(
      screen.getByRole('button', { name: /quais crianças podem ser atendidas\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /é necessário encaminhamento médico\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /como faço para agendar uma avaliação\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /a família participa do tratamento\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /quais especialidades estão disponíveis\?/i })
    ).toBeInTheDocument();
  });

  it('permite alternar a visualização da resposta ao clicar no botão da pergunta', () => {
    render(<FAQ />);
    const firstTrigger = screen.getByRole('button', {
      name: /quais crianças podem ser atendidas\?/i,
    });
    const secondTrigger = screen.getByRole('button', {
      name: /é necessário encaminhamento médico\?/i,
    });

    // Inicialmente o primeiro item está aberto
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'false');

    // Clica no segundo item
    fireEvent.click(secondTrigger);
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');

    // Clica novamente no segundo item para recolhê-lo
    fireEvent.click(secondTrigger);
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'false');
  });
});
