# Front-end

Este é o front-end do sistema URL Shortener, construído com **React**, **TypeScript**, **React Router** e **Tailwind CSS**.

## Sumário 📄
* [Requisitos](#requisitos)
* [Configuração do Ambiente](#configuração-do-ambiente)
* [Scripts](#scripts)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Funcionalidades](#funcionalidades)
* [Endpoints Consumidos](#endpoints-consumidos)
* [Versão EN-US](README.md)

---

## <span id="requisitos">Requisitos</span>

- Node.js (recomendado v18+)
- npm

---

## <span id="configuração-do-ambiente">Configuração do Ambiente</span>

1. **Clone o repositório:**
    ```shell
    git clone https://github.com/Mfrozzz/Url-shortener.git
    cd frontend
    ```

2. **Instale as dependências:**
    ```shell
    npm install
    ```

3. **(Opcional) Configure variáveis de ambiente:**  
   Crie um arquivo `.env` caso queira customizar os endpoints da API (por padrão é `http://localhost:3333`).

4. **Inicie o servidor de desenvolvimento:**
    ```shell
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## <span id="scripts">Scripts</span>

- `npm run dev`: Inicia o servidor de desenvolvimento com hot reload.
- `npm run build`: Gera a aplicação para produção.
- `npm run start`: Serve o build de produção.
- `npm run typecheck`: Executa a checagem de tipos do TypeScript.

---

## <span id="estrutura-de-pastas">Estrutura de Pastas</span>

```
frontend/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
├── react-router.config.ts
├── tsconfig.json
├── vite.config.ts
├── README.md
├── README-ptbr.md
├── .react-router/
├── node_modules/
├── public/
├── app/
│   ├── app.css
│   ├── root.tsx
│   ├── routes.ts
│   ├── assets/
│   │   └── linkLogo.png
│   ├── components/
│   │   ├── Footer/
|   |   |   └── Footer.tsx
│   │   ├── Form/
|   |   |   ├── formUrl.module.css
|   |   |   └── FormUrl.tsx
│   │   ├── NavBar/
|   |   |   └── NavBar.tsx
│   │   └── UrlList/
|   |       ├── urlList.module.css
|   |       └── UrlList.tsx
│   ├── pages/
│   │   ├── Home/
|   |   |   └── homePage.tsx
│   │   ├── ListUrls/
|   |   |   └── ListUrls.tsx
│   │   └── NewUrl/
|   |   |   └── NewUrl.tsx
│   ├── routes/
|   |   └── home.tsx
│   └── services/
│       ├── CreateShortUrlService.ts
│       ├── DeleteShortUrlService.ts
│       └── ListShortUrlsService.ts
└── public/
    └── favicon.ico
```

---

## <span id="funcionalidades">Funcionalidades</span>

- Interface moderna e responsiva com Tailwind CSS
- Criação, listagem e exclusão de URLs curtas
- Copiar e abrir URLs curtas facilmente
- Feedback de carregamento e erro
- Componentes de barra de navegação e rodapé
- Pronto para deploy com Docker

---

## <span id="endpoints-consumidos">Endpoints Consumidos</span>

- `POST   /api/url/shorten` — Cria uma nova URL curta
- `GET    /api/url/shorten/urls/index` — Lista todas as URLs
- `DELETE /api/url/shorten/:id` — Deleta uma URL
- `GET    /api/url/u/:shortUrl` — Redireciona para a URL original

---

## Estilização

Este projeto utiliza [Tailwind CSS](https://tailwindcss.com/) para estilização rápida e moderna.  
Você pode customizar ou estender os estilos como desejar.