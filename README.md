# 🔐 Passkey — Secure Password Manager

<p align="center">
  <img src="./public/icon.png" alt="Passkey Logo" width="120" />
</p>

<p align="center">
  A modern, secure, and privacy-focused password manager built with Next.js.
</p>

<p align="center">

<a href="https://passkey-codewithmsami.netlify.app">
  <img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge" />
</a>

<a href="https://github.com/CodeWithMSami/Passkey">
  <img src="https://img.shields.io/github/stars/CodeWithMSami/Passkey?style=for-the-badge" />
</a>

<a href="https://github.com/CodeWithMSami/Passkey/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/CodeWithMSami/Passkey?style=for-the-badge" />
</a>

</p>

## 🚀 Overview

**Passkey** is a secure password management application that helps users store, organize, and manage their credentials inside a protected digital vault.

The project focuses on modern web security practices, clean architecture, responsive UI, and a smooth user experience.

🌐 **Live Application**

https://passkey-codewithmsami.netlify.app/

---

# ✨ Features

## 🔐 Authentication

* Secure user authentication
* Protected routes
* Session management
* Login and signup system
* Authentication state handling
* Forgot & reset password handling

## 🔑 Password Vault

* Create password entries
* Edit existing credentials
* Delete saved passwords
* Organize passwords by category
* Secure password management interface

## 🛡️ Security Focused

* Encrypted password storage
* Secure server-side operations
* Row-level database security
* Protected user data access
* Privacy-focused architecture

## 🎨 Modern UI

* Responsive design
* Smooth interactions
* Toast notifications
* Mobile-friendly layouts

## ⚡ Performance

* Next.js App Router architecture
* Server Components
* Optimized metadata
* SEO-friendly pages
* Automatic sitemap generation

---

# 🏗️ Tech Stack

## Frontend

| Technology   | Purpose         |
| ------------ | --------------- |
| Next.js      | React framework |
| React        | UI library      |
| TypeScript   | Type safety     |
| Tailwind CSS | Styling         |

## Backend / Data

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| Supabase       | Database & authentication |
| PostgreSQL     | Data storage              |
| Server Actions | Secure mutations          |

## Deployment

| Service        | Purpose |
| -------------- | ------- |
| Netlify        | Hosting |
| GitHub Actions | CI/CD   |

---

# 📂 Project Architecture

```
src
│
├── app
│   │
│   ├── (auth)
│   │   ├── login
│   │   └── signup
│   │
│   ├── passwords
│   │   ├── add
│   │   ├── edit
│   │   └── delete
│   │
│   ├── privacy-policy
│   ├── terms-of-use
│   ├── cookie-policy
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
│
├── components
│
├── actions
│
└── assets
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/CodeWithMSami/Passkey.git

cd Passkey
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

PASSWORD_SECRET_KEY=
PASSWORD_SALT=
```

---

# ▶️ Development

Run:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔒 Security Model

Passkey follows a security-first approach:

* User data isolation
* Authentication protected resources
* Encrypted sensitive information
* Secure database policies

---

# 🌎 SEO Features

The application includes:

✅ Dynamic metadata  
✅ Open Graph support  
✅ Twitter cards  
✅ Canonical URLs  
✅ Sitemap generation  
✅ Robots configuration  
✅ Search engine verification support

---

# 📱 Pages

| Route             | Description         |
| ----------------- | ------------------- |
| `/`               | Landing page        |
| `/login`          | User authentication |
| `/signup`         | Account creation    |
| `/passwords`      | Password vault      |
| `/contact`        | Contact page        |
| `/features`       | Features Showcase   |
| `/privacy-policy` | Privacy policy      |
| `/terms`          | Terms of use        |
| `/cookie-policy`  | Cookie policy       |

---

# 🚀 Deployment

The project is deployed using Netlify.

Production URL:

```
https://passkey-codewithmsami.netlify.app
```

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Muhammad Sami Ullah**

GitHub:

https://github.com/CodeWithMSami

---

⭐ If you like this project, consider giving it a star!
