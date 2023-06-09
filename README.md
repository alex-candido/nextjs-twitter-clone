<img alt="banner" src="/public/images/twitter-banner.png" />

# Full Stack Twitter Clone

Twitter Clone is a fullstack web application built from scratch, it is based on interactions with Next API Routes, an API routing feature that allows you to create API endpoints, combining backend and frontend code, eliminating thus the need for extra codebases.

Its functionalities are, Notification System, Image Upload using Base64 strings, Prism ORM with MongoDB, Responsive Layout, 1 To Many Relationships (User - Post), Many To Many Relationships (Post - Comment), Following Functionality, Comments/ Answers, Likes functionality.

Approaches such as standardization of typescript projects, React, Tailwind, Next, Prisma, Mongo, NextAuth, React Hot Toast

Acesse [Twitter App](https://nextjs-twitter-clone-by-alex.vercel.app).

## 🚀 Approaches

- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)
- [Prisma](Prisma)
- [Mongo](https://www.mongodb.com)
- [NextAuth](https://next-auth.js.org)
- [React Hot Toast](https://react-hot-toast.com)

## 📌 Was used

#### Project Dependencies

- @next-auth/prisma-adapter: ^1.0.6,
- @prisma/client: ^4.13.0,
- @types/node: 18.15.13,
- @types/react: 18.0.38,
- @types/react-dom: 18.0.11,
- axios: ^1.3.6,
- bcrypt: ^5.1.0,
- date-fns: ^2.30.0,
- dotenv: ^16.0.3,
- eslint: 8.39.0,
- eslint-config-next: 13.3.1,
- mongodb: ^5.3.0,
- next: 13.3.1,
- next-auth: ^4.22.1,
- react: 18.2.0,
- react-dom: 18.2.0,
- react-dropzone: ^14.2.3,
- react-hot-toast: ^2.4.0,
- react-icons: ^4.8.0,
- react-spinners: ^0.13.8,
- react-toastify: ^9.1.3,
- swr: ^2.1.3,
- typescript: 5.0.4,
- zustand: ^4.3.7

#### Development Dependencies

- prisma: ^4.13.0
- autoprefixer: 10.4.14,
- @types/bcrypt: ^5.0.0,
- postcss: 8.4.23,
- tailwindcss: 3.3.1

## ▶️ Starting the application

#### Prerequisites

- Node version v16.16.0

- Clone this repository
```
$ git clone https://github.com/alex-candido/google-play-books.git
```
- Install dependencies
```
$ yarn add
```

- Setup .env file
```
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```
- Start Prisma
```
$ yarn prisma generate

$ yarn prisma db push
```

- Start the project
```
$ yarn dev
```

<img src="/public/images/home-page.png" alt="home">
<img src="/public/images/profile-page.png" alt="profile">

Made by Alex Cândido [Linkedin](https://www.linkedin.com/in/alexcndd/)