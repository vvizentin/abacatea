---
name: accessibility
description: Verifica e melhora a acessibilidade do site ABAcaTEA. Use ao criar ou revisar componentes, formulários, navegação e layouts.
---

# Accessibility

## HTML

Utilizar HTML semântico.

Preferir:

header
nav
main
section
article
footer
button
form
label

Evitar divs quando um elemento semântico apropriado existir.

## Imagens

Todas as imagens informativas devem possuir alt.

Imagens decorativas devem possuir alt vazio quando apropriado.

## Formulários

Todo input deve possuir label.

Não depender apenas de placeholder.

Campos obrigatórios devem ser identificados.

Mensagens de erro devem ser claras.

## Teclado

Todos os elementos interativos devem funcionar por teclado.

Garantir foco visível.

## Contraste

Verificar contraste suficiente entre:

- texto;
- fundo;
- botões.

## ARIA

Utilizar ARIA somente quando necessário.

Não adicionar atributos ARIA sem motivo.

## Navegação

A ordem de navegação deve fazer sentido.

## Mobile

Garantir que elementos interativos sejam fáceis de tocar.

## Regra

Acessibilidade deve ser considerada durante a implementação,
não apenas depois que o componente estiver pronto.