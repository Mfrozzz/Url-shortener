# Back-end

This is the back-end of the URL Shortener system, developed in Node.js with TypeScript, using Express and MongoDB for data persistence.

## Table of Contents 📄
* [Requirements](#requirements)
* [Environment Setup](#environment-setup)
* [Endpoints](#endpoints)
* [Scripts](#scripts)
* [Folder Structure](#folder-structure)
* [Versão PT-BR](README-ptbr.md)

---

## <span id="requirements">Requirements</span>

- Node.js
- MongoDB (can be local or via Docker)

---

## <span id="environment-setup">Environment Setup</span>

1. **Clone the repository:**
    ```shell
    git clone https://github.com/Mfrozzz/Url-shortener.git
    cd backend
    ```

2. **Install dependencies:**
    ```shell
    npm install
    ```

3. **Create a `.env` file in the project root and add the environment variables:**
    ```dotenv
    MONGO_URL=mongodb://localhost:27017/url_shortener
    PORT=3333
    ```

4. **Start MongoDB with Docker (if you don't have it locally):**
    ```shell
    docker run --name url-shortener-mongo -d -p 27017:27017 mongo:latest
    ```

5. **Start the server:**
    ```shell
    npm run dev
    ```

---

## <span id="endpoints">Endpoints</span>

### URLs

#### POST `/api/url/shorten`
Creates a new short URL.
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
Lists all registered URLs.
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
Redirects to the original URL.

#### GET `/api/url/shorten/:id`
Lists the information of the URL by its ID.
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
Removes a registered URL by its ID.

---

## <span id="scripts">Scripts</span>

- `npm run dev`: Starts the server in development mode.
- `npm start`: Starts the server in production mode.
- `npm test`: Runs automated tests (if any).

---

## <span id="folder-structure">Folder Structure</span>

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