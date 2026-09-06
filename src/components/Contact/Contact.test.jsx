import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Componente Contact — Formulário e Informações da Clínica', () => {
  it('renderiza as informações de contato institucionais do PRD', () => {
    render(<Contact />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /estamos aqui para acolher sua família/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/rua exemplo, 123 — curitiba, pr/i)).toBeInTheDocument();
    expect(screen.getByText(/\(41\) 99999-9999/i)).toBeInTheDocument();
    expect(screen.getByText(/contato@abacatea\.com\.br/i)).toBeInTheDocument();
    expect(screen.getByText(/segunda a sexta — 08:00 às 18:00/i)).toBeInTheDocument();
  });

  it('renderiza todos os campos obrigatórios e opcionais do formulário', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone com ddd/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nome da criança/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/especialidade de interesse/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
  });

  it('exibe erros de validação ao submeter formulário em branco', () => {
    render(<Contact />);
    const submitBtn = screen.getByRole('button', { name: /enviar mensagem/i });

    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/por favor, informe seu nome completo\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/por favor, informe seu endereço de e-mail\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/por favor, informe seu telefone com ddd\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/por favor, escreva uma mensagem detalhando o motivo do contato\./i)
    ).toBeInTheDocument();
  });

  it('valida o formato incorreto de e-mail', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const submitBtn = screen.getByRole('button', { name: /enviar mensagem/i });

    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });
    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/por favor, informe um endereço de e-mail válido\./i)
    ).toBeInTheDocument();
  });

  it('valida telefone com menos de 10 dígitos', () => {
    render(<Contact />);
    const phoneInput = screen.getByLabelText(/telefone com ddd/i);
    const submitBtn = screen.getByRole('button', { name: /enviar mensagem/i });

    fireEvent.change(phoneInput, { target: { value: '12345' } });
    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/por favor, informe um telefone válido com ddd/i)
    ).toBeInTheDocument();
  });

  it('submete com dados válidos e exibe mensagem de sucesso', async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/nome completo/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const phoneInput = screen.getByLabelText(/telefone com ddd/i);
    const messageInput = screen.getByLabelText(/mensagem/i);
    const submitBtn = screen.getByRole('button', { name: /enviar mensagem/i });

    fireEvent.change(nameInput, { target: { value: 'Juliana Silva' } });
    fireEvent.change(emailInput, { target: { value: 'juliana@exemplo.com.br' } });
    fireEvent.change(phoneInput, { target: { value: '41999998888' } });
    fireEvent.change(messageInput, { target: { value: 'Gostaria de agendar uma avaliação inicial.' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: /mensagem enviada com sucesso!/i,
        })
      ).toBeInTheDocument();
    });

    // Permite enviar nova mensagem
    const resetBtn = screen.getByRole('button', { name: /enviar outra mensagem/i });
    fireEvent.click(resetBtn);

    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument();
  });
});
