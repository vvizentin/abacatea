---
name: git-conventions
description: Define as convenções Git do projeto ABAcaTEA, incluindo branches, commits e Pull Requests.
---

# Git Conventions

## Main

A branch principal é:

main

## Branches

Preferir branches de feature.

Exemplos:

feature/navbar
feature/hero
feature/specialties
feature/contact
feature/testing
feature/cicd

## Commits

Utilizar Conventional Commits.

Formatos:

feat:
fix:
style:
test:
ci:
docs:
refactor:

## Exemplos

feat: adiciona seção de especialidades

fix: corrige validação do formulário

style: melhora layout mobile

test: adiciona testes do FAQ

ci: configura GitHub Actions

docs: atualiza README

## Commits

Evitar:

update
changes
fix
teste
alterações

Mensagens devem explicar o que foi alterado.

## Pull Request

Antes de abrir uma PR:

- lint;
- testes;
- build.

## Regra acadêmica

O histórico deve representar uma evolução real do projeto.

Não criar commits artificiais apenas para atingir a quantidade mínima.