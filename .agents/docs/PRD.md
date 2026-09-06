# PRD — ABAcaTEA

## 1. Visão geral

A ABAcaTEA é uma clínica multidisciplinar pediátrica fictícia.

O projeto consiste em desenvolver um site institucional moderno,
responsivo, acolhedor e profissional.

O site será utilizado como projeto acadêmico para demonstrar
Git, GitHub, testes automatizados e CI/CD.

---

# 2. Objetivos

O site deve:

- apresentar a clínica;
- apresentar suas especialidades;
- apresentar sua equipe;
- explicar seu método de atendimento;
- apresentar seus diferenciais;
- apresentar depoimentos;
- disponibilizar FAQ;
- disponibilizar formulário de contato;
- funcionar em desktop e mobile;
- possuir testes automatizados;
- possuir pipeline CI/CD.

---

# 3. Público-alvo

O público principal:

- pais;
- mães;
- responsáveis;
- familiares;
- pessoas buscando atendimento pediátrico especializado.

A comunicação deve ser:

- acolhedora;
- clara;
- profissional;
- humanizada.

---

# 4. Identidade

Nome:

ABAcaTEA

Tipo:

Clínica Multidisciplinar Pediátrica

Slogan sugerido:

"Cuidar, desenvolver e transformar juntos."

---

# 5. Stack

Preferencialmente:

- React;
- Vite;
- JavaScript;
- CSS;
- Vitest;
- React Testing Library;
- GitHub Actions.

Não instalar bibliotecas sem necessidade.

---

# 6. Estrutura do site

O site deverá conter:

1. Navbar
2. Hero
3. Sobre
4. Especialidades
5. Como funciona
6. Equipe
7. Diferenciais
8. Depoimentos
9. FAQ
10. Contato
11. Footer

---

# 7. Navbar

Deve possuir:

- logo ABAcaTEA;
- menu;
- botão "Agendar atendimento".

Links:

- Início;
- Sobre nós;
- Especialidades;
- Equipe;
- Diferenciais;
- Contato.

No mobile:

- menu hamburger;
- navegação adequada para telas pequenas.

---

# 8. Hero

Título:

"Cuidado que acolhe. Desenvolvimento que transforma."

Texto:

"Na ABAcaTEA, cada criança é única. Unimos diferentes
especialidades e profissionais para oferecer um cuidado
individualizado, acolhedor e baseado nas necessidades
de cada criança."

Botões:

- Conheça nossa clínica;
- Agendar atendimento.

---

# 9. Sobre

Título:

"Cuidado multidisciplinar para cada criança"

A seção deve explicar que a clínica trabalha de forma integrada
e individualizada.

Destacar:

- atendimento individualizado;
- equipe multidisciplinar;
- ambiente acolhedor;
- participação da família.

---

# 10. Especialidades

Criar cards para:

## Psicologia

Acompanhamento psicológico infantil e orientação familiar.

## Fonoaudiologia

Desenvolvimento da comunicação, linguagem e fala.

## Terapia Ocupacional

Estímulo da autonomia, habilidades funcionais e integração sensorial.

## Psicopedagogia

Acompanhamento dos processos de aprendizagem.

## Terapia ABA

Intervenções baseadas na Análise do Comportamento Aplicada.

## Fisioterapia

Acompanhamento do desenvolvimento motor.

---

# 11. Como funciona

Criar uma sequência:

1. Conheça a clínica
2. Primeira conversa
3. Avaliação
4. Plano individualizado
5. Acompanhamento

Pode ser representada como timeline ou etapas.

---

# 12. Equipe

Criar profissionais fictícios:

- Dra. Mariana Alves — Psicóloga Infantil
- Dra. Camila Rocha — Fonoaudióloga
- Dra. Juliana Martins — Terapeuta Ocupacional
- Dr. Lucas Ferreira — Psicopedagogo
- Dra. Ana Beatriz Souza — Fisioterapeuta

Os dados são fictícios.

---

# 13. Diferenciais

Criar cards para:

- Atendimento individualizado;
- Equipe integrada;
- Participação da família;
- Ambiente acolhedor;
- Acompanhamento contínuo.

---

# 14. Depoimentos

Criar três depoimentos fictícios.

Deixar claro no código/documentação que os depoimentos são
demonstrativos e não correspondem a pacientes reais.

---

# 15. FAQ

Perguntas:

- Quais crianças podem ser atendidas?
- É necessário encaminhamento médico?
- Como faço para agendar uma avaliação?
- A família participa do tratamento?
- Quais especialidades estão disponíveis?

Utilizar accordion.

---

# 16. Contato

Informações fictícias:

Rua Exemplo, 123
Curitiba - PR

(41) 99999-9999

contato@abacatea.com.br

Segunda a sexta
08:00 às 18:00

---

# 17. Formulário

Campos:

- Nome;
- E-mail;
- Telefone;
- Nome da criança;
- Especialidade;
- Mensagem.

Obrigatórios:

- Nome;
- E-mail;
- Telefone;
- Mensagem.

Implementar validação.

Não enviar dados reais para serviços externos.

Após envio válido, exibir mensagem de sucesso.

---

# 18. WhatsApp

Adicionar botão flutuante.

O número deve ser fictício ou claramente configurado como placeholder.

---

# 19. Footer

Deve conter:

- logo;
- descrição;
- links;
- contato;
- redes sociais fictícias;
- copyright.

Texto:

"© 2026 ABAcaTEA. Projeto acadêmico demonstrativo."

---

# 20. Design

O design deve transmitir:

- acolhimento;
- confiança;
- profissionalismo;
- segurança;
- infância.

Não deve parecer um site infantil.

Evitar:

- excesso de cores;
- fontes caricatas;
- excesso de animações;
- excesso de sombras;
- excesso de elementos decorativos.

---

# 21. Cores

Referência:

Primária:
#6C63A8

Secundária:
#8CC7C5

Fundo:
#F8F7FC

Texto:
#292735

Destaque:
#F2B880

Branco:
#FFFFFF

As cores podem ser ajustadas para melhorar contraste e acessibilidade.

---

# 22. Tipografia

Preferência:

- Inter;
- Poppins;
- Nunito Sans.

---

# 23. Responsividade

Suportar:

Desktop:
1920px
1440px
1366px

Tablet:
1024px
768px

Mobile:
430px
390px
375px

Não permitir:

- overflow horizontal;
- elementos cortados;
- botões fora da tela;
- imagens deformadas.

---

# 24. Acessibilidade

Implementar:

- HTML semântico;
- alt text;
- labels;
- foco via teclado;
- contraste;
- aria-label quando necessário;
- botões semanticamente corretos.

---

# 25. SEO

Utilizar:

<title>ABAcaTEA | Clínica Multidisciplinar Pediátrica</title>

Meta description:

"ABAcaTEA — Clínica multidisciplinar pediátrica com atendimento
acolhedor e individualizado para crianças e suas famílias."

---

# 26. Testes

Utilizar:

- Vitest;
- React Testing Library.

Criar testes para:

- renderização;
- Navbar;
- especialidades;
- formulário;
- validação;
- FAQ;
- componentes principais.

---

# 27. CI/CD

Criar:

.github/workflows/ci.yml

O pipeline deve executar:

1. checkout;
2. Node.js;
3. instalação das dependências;
4. lint;
5. testes;
6. build.

O pipeline deve ser executado em Pull Requests e alterações
na branch principal.

---

# 28. Git

Branch principal:

main

Criar branch adicional, por exemplo:

develop

ou branches de feature.

Exemplos:

feature/hero-section
feature/specialties
feature/contact-form
feature/testing
feature/cicd

---

# 29. Commits

Utilizar Conventional Commits.

Exemplos:

feat: adiciona seção de especialidades

fix: corrige validação do formulário

style: melhora responsividade

test: adiciona testes do formulário

ci: configura GitHub Actions

docs: atualiza README

---

# 30. Requisito acadêmico

O projeto deve possuir:

- repositório público;
- branch main;
- pelo menos uma branch adicional;
- pelo menos 5 commits;
- Pull Request;
- merge da Pull Request;
- testes automatizados;
- GitHub Actions;
- build funcionando.

---

# 31. Critério de conclusão

O projeto está concluído quando:

- site funciona;
- layout está responsivo;
- testes passam;
- lint passa;
- build passa;
- GitHub Actions passa;
- existem pelo menos 5 commits;
- existe branch adicional;
- existe PR;
- PR foi mergeada;
- repositório é público.