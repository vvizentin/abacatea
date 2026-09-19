import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main application without crashing', () => {
    render(<App />);
    // Verify the skip link is present for accessibility
    expect(screen.getByText('Pular para o conteúdo principal')).toBeDefined();
  });

  it('renders the hero heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders the main navigation', () => {
    render(<App />);
    // Check for navbar links (appear in both desktop nav and mobile drawer)
    expect(screen.getAllByText('Sobre').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Especialidades').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('FAQ').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Contato').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the WhatsApp floating button', () => {
    render(<App />);
    expect(
      screen.getByLabelText('Fale com nossa equipe de triagem pelo WhatsApp')
    ).toBeDefined();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeDefined();
  });
});
