# Plug Social

O **Plug Social** é um site informativo sobre **Inclusão Digital**, organizado em três pilares:

- **Acesso** à internet e dispositivos
- **Alfabetização digital** (uso com autonomia e segurança)
- **Iniciativas** (ações e programas que reduzem barreiras)

O projeto também simula um sistema simples de **cadastro e login** (sem back-end), para demonstrar **controle de acesso** à página de Iniciativas.

## 🎯 Objetivo

Demonstrar, em um projeto acadêmico/prático:

- Site multipágina com navegação consistente
- Layout responsivo com **Bootstrap 5**
- JavaScript em módulos (ES Modules)
- Validações de formulário reutilizáveis
- Simulação de autenticação com `localStorage` e `sessionStorage`

## 👥 Público-alvo

- Estudantes e iniciantes em desenvolvimento web
- Professores e avaliação acadêmica de front-end
- Pessoas interessadas no tema de inclusão digital

## 🛠 Tecnologias

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript (ES Modules)
- localStorage / sessionStorage

## ▶️ Como executar

1. Baixe/clique em “Download” ou clone o repositório.
2. Abra a pasta do projeto.
3. Execute o `index.html` no navegador.

## 📂 Estrutura de pastas (resumo)

- `pages/`: páginas do site
- `javascript/`: scripts em módulos (sem JS inline no HTML)
  - `auth.js`: sessão, login/cadastro, proteção
  - `validators.js`: validações reutilizáveis
  - `ui.js`: funções de UI (ex.: alerta)
  - `main.js`: alterna elementos conforme login/logout
  - `login.js`, `register.js`, `contact.js`: lógica de cada página
  - `protect.js`: protege páginas restritas
- `assets/css/styles.css`: estilos customizados