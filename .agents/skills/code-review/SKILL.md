---
name: code-review
description: Revisa código da ABAcaTEA procurando bugs, problemas de arquitetura, acessibilidade, responsividade, qualidade e testes.
---

# Code Review

## Funcionalidade

Verificar:

- funciona conforme o PRD?
- existem bugs?
- existem casos extremos?

## Arquitetura

Verificar:

- componentes bem separados;
- ausência de duplicação;
- responsabilidade clara;
- código simples.

## UI

Verificar:

- desktop;
- tablet;
- mobile;
- espaçamento;
- tipografia;
- contraste;
- consistência.

## Acessibilidade

Verificar:

- labels;
- alt;
- teclado;
- foco;
- semântica;
- contraste.

## Performance

Verificar:

- imagens;
- dependências;
- JavaScript desnecessário;
- renders desnecessários.

## Testes

Verificar se funcionalidades importantes possuem testes.

## Classificação

CRÍTICO:
Impede funcionamento ou causa problema grave.

ALTO:
Problema importante que deve ser corrigido.

MÉDIO:
Problema relevante mas não bloqueante.

BAIXO:
Melhoria ou detalhe.

## Regra

Durante code review, não modificar código automaticamente.

Primeiro apresentar os problemas encontrados.

Somente implementar correções quando solicitado.