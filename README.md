# ABAcaTEA — Clínica Multidisciplinar Pediátrica

Site institucional moderno, acolhedor e responsivo da **ABAcaTEA**, clínica multidisciplinar pediátrica. O projeto busca apresentar a clínica, suas especialidades e informações de contato por meio de uma experiência acessível e intuitiva.

> **Projeto acadêmico:** o desenvolvimento deste site faz parte de uma atividade prática de desenvolvimento web e DevOps. A ABAcaTEA é uma clínica real.

---

## 📌 Sobre o projeto

O objetivo é desenvolver uma aplicação web institucional utilizando tecnologias modernas, aplicando boas práticas de desenvolvimento, versionamento, testes automatizados, integração contínua e conteinerização.

### Objetivos técnicos

* Desenvolver uma aplicação com React e Vite.
* Criar componentes reutilizáveis e organizados.
* Aplicar princípios de acessibilidade e responsividade.
* Utilizar Git e GitHub para controle de versão.
* Automatizar verificações por meio do GitHub Actions.
* Configurar notificações de atualizações no Discord.
* Executar a aplicação em um container Docker.

---

## ✨ Funcionalidades

* **Navegação responsiva:** menu com navegação por seções e suporte para dispositivos móveis.
* **Apresentação institucional:** seção inicial com chamadas para ação.
* **Sobre a clínica:** apresentação da proposta e dos pilares de atendimento.
* **Especialidades:** Psicologia, Fonoaudiologia, Terapia Ocupacional, Psicopedagogia, Terapia ABA e Fisioterapia.
* **Como funciona:** apresentação das etapas do atendimento.
* **Equipe multidisciplinar:** seção de apresentação dos profissionais.
* **Diferenciais:** informações sobre a proposta de atendimento.
* **Depoimentos:** seção demonstrativa para a proposta acadêmica.
* **FAQ:** perguntas frequentes em formato expansível e acessível.
* **Contato:** informações de contato e formulário com validação no navegador.
* **WhatsApp:** botão de acesso rápido.
* **Rodapé:** navegação, informações institucionais e nota acadêmica.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia            | Finalidade                                |
| --------------------- | ----------------------------------------- |
| React                 | Construção da interface                   |
| Vite                  | Ambiente de desenvolvimento e build       |
| JavaScript / JSX      | Lógica e componentes                      |
| CSS                   | Estilização e responsividade              |
| Vitest                | Testes automatizados                      |
| React Testing Library | Testes de componentes                     |
| ESLint                | Análise estática do código                |
| Git e GitHub          | Versionamento e colaboração               |
| GitHub Actions        | Automação de CI/CD                        |
| Discord Webhook       | Notificações de atualizações              |
| Docker                | Conteinerização da aplicação              |
| Nginx                 | Servir os arquivos estáticos da aplicação |

---

## 📂 Estrutura do projeto

```text
abacatea/
├── .agents/                   # Diretrizes e documentação dos agentes
├── .github/
│   └── workflows/
│       ├── ci.yml             # Pipeline de integração contínua
│       └── discord-alerts.yml # Notificações no Discord
├── public/                    # Arquivos públicos e favicon
├── src/
│   ├── components/            # Componentes da interface
│   ├── data/                  # Dados utilizados pelas seções
│   ├── styles/                # Estilos globais e design system
│   ├── test/                  # Configuração dos testes
│   ├── App.jsx                # Componente principal
│   ├── App.test.jsx            # Testes de integração
│   └── main.jsx               # Ponto de entrada
├── .dockerignore              # Arquivos ignorados pelo Docker
├── .gitignore                 # Arquivos ignorados pelo Git
├── Dockerfile                 # Construção da imagem Docker
├── eslint.config.js           # Configuração do ESLint
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts
├── package-lock.json          # Dependências fixadas
├── README.md                  # Documentação
└── vite.config.js             # Configuração do Vite e Vitest
```

---

## 🚀 Como executar localmente

### Pré-requisitos

* Node.js 20 ou superior
* npm
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/vvizentin/abacatea.git
cd abacatea
```

### 2. Instale as dependências

```bash
npm ci
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

---

## 🧪 Testes e qualidade de código

O projeto utiliza ferramentas de validação automatizada para verificar o código e o funcionamento dos componentes.

### Executar os testes

```bash
npm test
```

### Executar o ESLint

```bash
npm run lint
```

### Gerar o build de produção

```bash
npm run build
```

O comando de build gera os arquivos de produção na pasta `dist/`.

---

## 🔄 Integração contínua — GitHub Actions

O projeto utiliza workflows do GitHub Actions para automatizar verificações durante o desenvolvimento.

### Pipeline de CI

Arquivo: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

O workflow é acionado em eventos de push para as branches `main` e `develop`, além de Pull Requests direcionadas à `main`.

Etapas executadas:

1. Checkout do repositório.
2. Configuração do Node.js.
3. Instalação das dependências com `npm ci`.
4. Verificação de código com ESLint.
5. Execução dos testes automatizados.
6. Geração do build de produção.

### Notificações no Discord

Arquivo: [`.github/workflows/discord-alerts.yml`](.github/workflows/discord-alerts.yml)

O workflow envia notificações para um canal do Discord quando ocorre um push na branch `main`.

As mensagens podem apresentar informações como:

* Repositório e branch.
* Autor da alteração.
* Mensagem do commit.
* Link para consultar o commit no GitHub.

A integração utiliza um **Discord Webhook**, configurado como segredo no repositório.

> O endereço do webhook deve ser armazenado em `Settings → Secrets and variables → Actions`, com o nome `DISCORD_WEBHOOK`. Não publique esse endereço no código ou no README.

---

## 🐳 Executando com Docker

A aplicação pode ser construída e executada em um container Docker. O Dockerfile utiliza uma construção em múltiplos estágios: Node.js para gerar o build e Nginx para servir os arquivos estáticos.

### Pré-requisitos

* Docker Desktop instalado e em execução.

### 1. Construir a imagem

Na raiz do projeto, execute:

```bash
docker build -t abacatea .
```

### 2. Iniciar o container

```bash
docker run -d --name abacatea -p 8080:80 abacatea
```

### 3. Acessar a aplicação

Abra no navegador:

```text
http://localhost:8080
```

### 4. Verificar o container

```bash
docker ps
```

### Comandos úteis

Parar o container:

```bash
docker stop abacatea
```

Iniciar novamente:

```bash
docker start abacatea
```

Remover o container:

```bash
docker rm -f abacatea
```

---

## 🌿 Versionamento

O projeto utiliza Git e GitHub para controle de versão, com branches e Pull Requests.

* `main`: branch principal.
* `develop`: branch de desenvolvimento.
* `feature/*`: branches para implementar funcionalidades específicas.

As alterações são registradas por meio de commits, seguindo a convenção **Conventional Commits**, por exemplo:

```text
feat: adiciona nova funcionalidade
fix: corrige comportamento da aplicação
ci: configura automação do pipeline
docs: atualiza documentação
```

---

## ♿ Acessibilidade e responsividade

A interface considera práticas como:

* Navegação por teclado.
* Elementos HTML semânticos.
* Identificação de campos e mensagens de validação.
* Estados de foco visíveis.
* Layout adaptável a diferentes tamanhos de tela.
* Respeito à preferência por movimento reduzido.

---

## 🎓 Finalidade acadêmica

Este repositório demonstra a aplicação prática de conceitos de desenvolvimento web, versionamento com Git, testes automatizados, GitHub Actions, notificações no Discord e Docker.

A ABAcaTEA é uma clínica real; o desenvolvimento e a entrega deste projeto possuem finalidade acadêmica.

---

## 🔗 Repositório

[github.com/vvizentin/abacatea](https://github.com/vvizentin/abacatea)