# 🎬 Users & Movies API

API REST développée avec **Node.js, Express et Prisma** permettant de gérer des utilisateurs et des films avec authentification JWT.

---

## 🚀 Fonctionnalités

### 🔐 Authentification
- Inscription (`/api/auth/register`)
- Connexion (`/api/auth/login`)
- Utilisateur connecté (`/api/auth/me`)

### 👤 Utilisateurs
- CRUD utilisateurs
- Pagination (`/api/users?page=1&limit=2`)
- Routes protégées
- Password sécurisé (bcrypt)

### 🎬 Movies
- CRUD complet
- Recherche (`/api/movies/search`)
- Routes protégées

### ⚙️ Sécurité & Qualité
- Middleware `authenticate`
- Gestion des erreurs (Prisma + custom)
- Architecture en couches (Routes → Controllers → Services)

---

## 🛠️ Technologies utilisées

- Node.js
- Express
- Prisma
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt

---

## 📦 Installation

```bash
git clone https://github.com/yahiathiernom-star/backend-backend-users-movies-movies.git
cd backend-backend-users-movies-movies
npm install
