# Front-end

This is the front-end of the URL Shortener system, built with **React**, **TypeScript**, **React Router**, and **Tailwind CSS**.

## Table of Contents 📄
* [Requirements](#requirements)
* [Environment Setup](#environment-setup)
* [Scripts](#scripts)
* [Folder Structure](#folder-structure)
* [Features](#features)
* [Endpoints Consumed](#endpoints-consumed)
* [PT-BR Version](README-ptbr.md)

---

## <span id="requirements">Requirements</span>

- Node.js (v18+ recommended)
- npm

---

## <span id="environment-setup">Environment Setup</span>

1. **Clone the repository:**
    ```shell
    git clone https://github.com/Mfrozzz/Url-shortener.git
    cd frontend
    ```

2. **Install dependencies:**
    ```shell
    npm install
    ```

3. **(Optional) Configure environment variables:**  
   Create a `.env` file if you want to customize API endpoints (default is `http://localhost:3333`).

4. **Start the development server:**
    ```shell
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## <span id="scripts">Scripts</span>

- `npm run dev`: Starts the development server with hot reload.
- `npm run build`: Builds the application for production.
- `npm run start`: Serves the production build.
- `npm run typecheck`: Runs TypeScript type checking.

---

## <span id="folder-structure">Folder Structure</span>

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

## <span id="features">Features</span>

- Modern and responsive UI with Tailwind CSS
- Create, list, and delete short URLs
- Copy and open short URLs easily
- Loading and error feedback
- Navigation bar and footer components
- Ready for Docker deployment

---

## <span id="endpoints-consumed">Endpoints Consumed</span>

- `POST   /api/url/shorten` — Create a new short URL
- `GET    /api/url/shorten/urls/index` — List all URLs
- `DELETE /api/url/shorten/:id` — Delete a URL
- `GET    /api/url/u/:shortUrl` — Redirect to the original URL

---

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for fast and modern styling.  
You can customize or extend the styles as you wish.