---
name: testing
description: Cria e executa testes automatizados usando Vitest e React Testing Library para o projeto ABAcaTEA.
---

# Testing

## Ferramentas

Utilizar:

- Vitest;
- React Testing Library.

## Objetivo

Testar comportamento real da aplicação.

Evitar testes excessivamente ligados à implementação interna.

## Cobertura mínima

Testar:

- renderização;
- Navbar;
- especialidades;
- formulário;
- validação;
- FAQ;
- componentes importantes.

## Formulário

Testar:

1. campos aparecem;
2. campos obrigatórios;
3. erro com dados inválidos;
4. sucesso com dados válidos.

## Após alteração

Executar:

npm test

Se existir script específico no package.json,
utilizar o script existente.

## Falhas

Nunca ignorar teste quebrado.

Procedimento:

1. identificar;
2. corrigir;
3. executar novamente.

## Antes de PR

Garantir que os testes estejam passando.