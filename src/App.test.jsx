import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renderiza o cabeçalho base inicial', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /abacatea/i })
    ).toBeInTheDocument();
  });
});
