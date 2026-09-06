# ABAcaTEA — Clínica Multidisciplinar Pediátrica

Site institucional moderno, acolhedor e acessível da **ABAcaTEA**, uma clínica multidisciplinar pediátrica fictícia focada no desenvolvimento integral de crianças em parceria ativa com suas famílias.

---

## 🎯 Contexto e Objetivo Acadêmico

Este projeto foi desenvolvido com finalidade acadêmica para demonstrar a aplicação prática de:

- **Desenvolvimento Web Moderno** com React e Vite;
- **Arquitetura de Componentes** limpa, modular e reutilizável;
- **Design System** acessível e responsivo com Vanilla CSS e tokens padronizados;
- **Git & GitHub**: fluxo com branches (`main` e `develop`), Conventional Commits e Pull Requests;
- **Testes Automatizados** de unidade e integração com Vitest e React Testing Library;
- **Integração Contínua (CI/CD)** automatizada via GitHub Actions.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 18](https://react.dev/) e [Vite 6](https://vitejs.dev/)
- **Linguagem**: JavaScript (ESModules / JSX)
- **Estilização**: Vanilla CSS (Tokens de cores, tipografia, grid fluido e resets acessíveis)
- **Testes Automatizados**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/) e [jsdom](https://github.com/jsdom/jsdom)
- **Qualidade de Código**: [ESLint 9](https://eslint.org/) (Flat Config)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

---

## 🌟 Funcionalidades e Estrutura do Site

1. **Navbar Fixa e Responsiva**: Navegação por âncoras internas, botão CTA *"Agendar atendimento"* e menu mobile hambúrguer acessível por teclado com suporte a tecla `Escape`.
2. **Hero Section**: Apresentação principal com o lema oficial (*"Cuidado que acolhe. Desenvolvimento que transforma."*), botões de ação e composição visual acolhedora.
3. **Sobre Nós**: Missão da clínica e os 4 pilares de atendimento (*Atendimento individualizado*, *Equipe multidisciplinar*, *Ambiente acolhedor* e *Participação da família*).
4. **Especialidades**: Cards informativos para 6 áreas integradas: Psicologia, Fonoaudiologia, Terapia Ocupacional, Psicopedagogia, Terapia ABA e Fisioterapia.
5. **Como Funciona**: Linha do tempo estruturada em 5 etapas da jornada clínica do paciente.
6. **Equipe Multidisciplinar**: Apresentação dos 5 profissionais fictícios com especialidades, mini-bios e número de registro demonstrativo.
7. **Diferenciais**: Destaques do modelo humanizado de atendimento da clínica.
8. **Depoimentos**: Relatos acolhedores demonstrativos com aviso de simulação acadêmica.
9. **FAQ Acessível**: Perguntas frequentes organizadas em accordion expansível via teclado com atributos `aria-expanded` e `role="region"`.
10. **Contato & Formulário**: Canais da clínica e formulário completo com validação no cliente (campos obrigatórios, formato de e-mail e telefone) com tela de confirmação de envio simulado.
11. **Botão Flutuante do WhatsApp**: Acesso rápido com mensagem pré-formatada utilizando o número demonstrativo do projeto.
12. **Footer Completo**: 4 colunas de navegação, especialidades, canais, copyright e nota de responsabilidade acadêmica.

---

## 📂 Estrutura de Diretórios

```
abacatea/
├── .agents/                      # Diretrizes dos agentes, PRD e Skills do projeto
├── .github/
│   └── workflows/
│       └── ci.yml                # Pipeline automatizado de CI/CD (GitHub Actions)
├── public/
│   └── favicon.svg               # Favicon institucional vetorial
├── src/
│   ├── components/               # Componentes modulares e seus testes
│   │   ├── common/               # Componentes compartilhados (ex: SectionHeader)
│   │   ├── Navbar/               # Cabeçalho e navegação mobile
│   │   ├── Hero/                 # Apresentação de topo
│   │   ├── About/                # Seção Sobre Nós e pilares
│   │   ├── Specialties/          # Cards de especialidades
│   │   ├── HowItWorks/           # Linha do tempo do método
│   │   ├── Team/                 # Apresentação da equipe clínica
│   │   ├── Differentials/        # Diferenciais acolhedores
│   │   ├── Testimonials/         # Depoimentos demonstrativos
│   │   ├── FAQ/                  # Accordion de dúvidas frequentes
│   │   ├── Contact/              # Informações de contato e formulário validado
│   │   ├── Footer/               # Rodapé institucional e copyright
│   │   └── WhatsAppButton/       # Botão flutuante acessível
│   ├── data/                     # Dados estáticos desacoplados e testes de integridade
│   ├── styles/                   # Design System (variables.css e global.css)
│   ├── test/                     # Configuração de setup do Vitest
│   ├── App.jsx                   # Layout raiz da aplicação
│   ├── App.test.jsx              # Testes de integração global e acessibilidade
│   └── main.jsx                  # Ponto de entrada React com StrictMode
├── .gitignore                    # Regras de exclusão Git
├── eslint.config.js              # Configuração do ESLint 9
├── index.html                    # HTML semântico com metatags de SEO e fontes Google
├── package.json                  # Manifesto do projeto e scripts
├── package-lock.json             # Árvore de dependências fixada
├── README.md                     # Documentação do projeto
└── vite.config.js                # Configuração do Vite e Vitest
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão LTS 20.x ou superior recomendada)
- **npm** (versão 10.x ou superior)

### 1. Clonar o repositório e acessar a pasta
```bash
git clone <URL_DO_REPOSITORIO>
cd abacatea
```

### 2. Instalar as dependências
```bash
npm ci
# ou: npm install
```

### 3. Executar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

---

## 🧪 Validação e Testes Automatizados

O projeto conta com comandos para garantir a estabilidade e conformidade do código:

### Executar os testes automatizados:
```bash
npm test
```
*Executa a suíte de testes com Vitest, testando renderização, acessibilidade, navegação, accordion do FAQ, formulário de contato e validações.*

### Executar a verificação de código (Lint):
```bash
npm run lint
```
*Verifica regras de estilo, formatação e boas práticas com ESLint 9.*

### Gerar o build de produção:
```bash
npm run build
```
*Gera os arquivos otimizados e minificados na pasta `dist/`.*

---

## 🔄 Integração Contínua (CI/CD)

O projeto possui um workflow configurado no GitHub Actions em [`.github/workflows/ci.yml`](.github/workflows/ci.yml) que é acionado automaticamente em:

- **Push** para a branch `main`;
- **Push** para a branch `develop`;
- **Pull Requests** direcionadas para a branch `main`.

### Etapas do Pipeline:
1. **Checkout**: Obtém o código-fonte mais recente do repositório;
2. **Setup Node.js**: Configura o ambiente com Node.js v20 LTS e ativa o cache do npm;
3. **Instalação**: Executa `npm ci` para instalação reprodutível e rápida;
4. **Lint**: Valida as regras de código via `npm run lint`;
5. **Testes**: Executa toda a suíte de testes automatizados via `npm test`;
6. **Build**: Compila e valida o pacote de produção via `npm run build`.

Se qualquer uma das etapas falhar, o pipeline bloqueia o fluxo de integração.

---

## ⚠️ Observação Legal e Acadêmica

A **ABAcaTEA**, seu nome, profissionais, especialidades, endereços, números de telefone, registros profissionais (CRP, CRFa, CREFITO, ABPp) e depoimentos apresentados neste projeto são **fictícios** e foram concebidos exclusivamente para fins acadêmicos e demonstrativos de desenvolvimento web e DevOps.