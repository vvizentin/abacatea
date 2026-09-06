---
name: cicd
description: Configura e mantém o CI/CD do projeto ABAcaTEA utilizando GitHub Actions, incluindo lint, testes e build.
---

# CI/CD

## Objetivo

Automatizar a validação do projeto.

## GitHub Actions

O workflow principal deve estar em:

.github/workflows/ci.yml

## Pipeline

Executar:

Checkout
↓
Setup Node.js
↓
Install
↓
Lint
↓
Test
↓
Build

## Pull Requests

O pipeline deve executar em Pull Requests.

## Main

O pipeline também deve executar quando houver alterações
na branch main.

## Falhas

Se qualquer etapa falhar:

- identificar;
- corrigir;
- executar novamente.

Nunca ignorar falhas.

## Dependências

Utilizar a versão de Node compatível com o projeto.

Verificar package.json antes de definir a versão.

## Build

O build deve ser executado pelo script existente
no package.json.

## Regra

Não criar workflows desnecessários.

O objetivo é possuir um pipeline simples, confiável
e fácil de explicar academicamente.