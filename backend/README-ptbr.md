# Back-end

Este é o back-end do sistema URL Shortener, desenvolvido em Node.js com TypeScript, utilizando Express e MongoDB para persistência dos dados.

## Sumário 📄
* [Requisitos](#requisitos)
* [Configurando Ambiente](#configurando-ambiente)
* [Endpoints](#endpoints)
* [Scripts](#scripts)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Versão EN-US](README.md)

---

## <span id="requisitos">Requisitos</span>

- Node.js
- MongoDB (pode ser local ou via Docker)

---

## <span id="configurando-ambiente">Configurando Ambiente</span>

1. **Clone o repositório:**
    ```shell
    git clone https://github.com/Mfrozzz/Url-shortener.git
    cd backend
    ```

2. **Instale as dependências:**
    ```shell
    npm install
    ```

3. **Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:**
    ```dotenv
    MONGO_URL=mongodb://localhost:27017/url_shortener
    PORT=3333
    ```

4. **Suba o MongoDB com Docker (caso não tenha local):**
    ```shell
    docker run --name url-shortener-mongo -d -p 27017:27017 mongo:latest
    ```

5. **Inicie o servidor:**
    ```shell
    npm run dev
    ```

---

## <span id="endpoints">Endpoints</span>

### URLs

#### POST `/api/url/shorten`
Cria uma nova URL curta.
- Request Body:
    ```json
    {
      "originalUrl": "https://example.com/your-long-link"
    }
    ```
- Response:
    ```json
    {
      "_id": "id",
      "originalUrl": "https://example.com/your-long-link",
      "shortUrl": "abc123",
      "createdAt": "2025-05-13T12:35:47.942Z"
    }
    ```

#### GET `/api/url/shorten/urls/index`
Lista todas as URLs cadastradas.
- Response:
    ```json
    "urls": [
      {
        "_id": "id",
        "originalUrl": "https://example.com/your-long-link",
        "shortUrl": "abc123",
        "createdAt": "2025-05-13T12:35:47.942Z"
      }
    ]
    ```

#### GET `/api/url/u/:shortUrl`
Redireciona para a URL original.

#### GET `/api/url/shorten/:id`
Listas as informações da URL pelo seu ID.
- Response:
    ```json
    {
        "_id": "id",
        "originalUrl": "https://example.com/your-long-link",
        "shortUrl": "abc123",
        "createdAt": "2025-05-13T12:35:47.942Z"
    }
    ```

#### DELETE `/api/url/shorten/:id`
Remove uma URL cadastrada pelo seu ID.

---

## <span id="scripts">Scripts</span>

- `npm run dev`: Inicia o servidor em modo desenvolvimento.
- `npm start`: Inicia o servidor em modo produção.
- `npm test`: Executa os testes automatizados (se houver).

---

## <span id="estrutura-de-pastas">Estrutura de Pastas</span>

```
backend/
├── .env
├── package.json
├── package-lock.json
├── tsconfig.json
├── README-ptbr.md
├── README.md
├── node_modules/
└── src/
    ├── config/
    |   └──mongoConnection.ts
    ├── modules/
    │   └── urls/
    │       ├── controllers/
    |       |   └── UrlController.ts
    │       ├── model/
    |       |   ├── Url.ts
    |       |   └── UrlSchema.ts
    │       ├── routes/
    |       |   └── url.routes.ts
    │       ├── services/
    |       |   ├── CreateUrlService.ts
    |       |   ├── DeleteUrlService.ts
    |       |   ├── ListUrlsService.ts
    |       |   ├── RedirectUrlService.ts
    |       |   └── ShowUrlService.ts
    │       └── validations/
    |           └── urlValidation.ts
    └── shared/
        └── http/
            ├── middlewares/
            |   └── RateLimiter.ts
            |   └── validateRequest.ts
            ├── routes/
            |   └── index.ts
            └── server.ts
```