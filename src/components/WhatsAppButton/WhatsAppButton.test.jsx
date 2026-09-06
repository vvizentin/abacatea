import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhatsAppButton from './WhatsAppButton';

describe('Componente WhatsAppButton', () => {
  it('renderiza o botão com link para o WhatsApp com número demonstrativo', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link', {
      name: /fale conosco pelo whatsapp/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('5541999999999'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('possui rotulagem acessível de container complementar', () => {
    render(<WhatsAppButton />);
    expect(
      screen.getByRole('complementary', {
        name: /contato rápido via whatsapp/i,
      })
    ).toBeInTheDocument();
  });
});
