<h1 align="center">
  Bugees | Bug Tracker
</h1>
<p align="center">
  A bug tracker built Next.js, Tailwind CSS, Prisma and more.
</p>

## Getting Started

Follow these steps in order to get the website up and running locally on your machine.

### 1. Clone the repository then navigate to the root directory

### 2. Install all required dependencies

```sh
npm install
```

### 3. Setup your development database

- I use a local PostgreSQL database for development.

### 4. Setup your environment variables. An example file is provided

- File must be named `.env.local` for development.
- Ensure you use the custom scripts that use this file.

### 5. Create/sync the database

```sh
npm run db:push
```

### 6. Host a local development server

```sh
npm run dev
```

## Production

### 1. Host on your preferred platform

- Here are my current hosts:

  - Website: Vercel
  - Database: Railway

### 2. Use this build command

```sh
npm run production:build
```

## Contact

- [LinkedIn](https://linkedin.com/in/lucas-winkler)
- [Github](https://github.com/lucaswinkler)
- [Email](mailto:lucaswinkler@gmail.com)
