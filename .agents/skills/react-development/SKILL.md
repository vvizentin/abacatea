---
name: react-development
description: Desenvolve e mantém componentes React da ABAcaTEA seguindo arquitetura simples, reutilizável e acessível.
---

# React Development

## Arquitetura

Priorizar:

src/
├── components/
├── data/
├── styles/
└── pages/

## Componentes

Cada componente deve possuir responsabilidade clara.

Exemplos:

Navbar
Hero
About
Specialties
HowItWorks
Team
Differentials
Testimonials
FAQ
Contact
Footer

## Reutilização

Evitar duplicação.

Quando elementos possuírem comportamento ou estrutura semelhante,
criar componentes reutilizáveis.

## Dados

Dados estáticos podem ser separados em:

src/data/

Exemplos:

specialties.js
team.js
testimonials.js

## Estado

Não utilizar gerenciamento global sem necessidade.

Preferir estado local.

## Código

Priorizar:

- legibilidade;
- simplicidade;
- manutenção;
- reutilização.

## Dependências

Não instalar dependências sem necessidade.

Antes de adicionar uma biblioteca, verificar se o problema pode
ser resolvido utilizando recursos já existentes.

## Segurança

Nunca inserir:

- senhas;
- tokens;
- API keys;
- credenciais.

No código-fonte.