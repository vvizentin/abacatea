import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Componente Navbar', () => {
  it('renderiza o logo com o nome da clínica', () => {
    render(<Navbar />);
    expect(screen.getByText(/aba/i)).toBeInTheDocument();
    expect(screen.getByText(/tea/i)).toBeInTheDocument();
  });

  it('renderiza todos os links de navegação previstos no PRD', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /início/i })).toHaveAttribute('href', '#inicio');
    expect(screen.getByRole('link', { name: /sobre nós/i })).toHaveAttribute('href', '#sobre');
    expect(screen.getByRole('link', { name: /especialidades/i })).toHaveAttribute('href', '#especialidades');
    expect(screen.getByRole('link', { name: /equipe/i })).toHaveAttribute('href', '#equipe');
    expect(screen.getByRole('link', { name: /diferenciais/i })).toHaveAttribute('href', '#diferenciais');
    expect(screen.getByRole('link', { name: /^contato$/i })).toHaveAttribute('href', '#contato');
  });

  it('renderiza o botão CTA de agendar atendimento', () => {
    render(<Navbar />);
    const cta = screen.getByRole('link', { name: /agendar atendimento/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#contato');
  });

  it('controla a abertura e fechamento do menu mobile via botão hambúrguer', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', {
      name: /abrir menu de navegação/i,
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Abre o menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getByRole('button', { name: /fechar menu de navegação/i })
    ).toBeInTheDocument();

    // Fecha o menu pelo botão
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('fecha o menu mobile ao pressionar a tecla Escape', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', {
      name: /abrir menu de navegação/i,
    });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('fecha o menu mobile ao clicar em um link', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', {
      name: /abrir menu de navegação/i,
    });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    const link = screen.getByRole('link', { name: /especialidades/i });
    fireEvent.click(link);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});
