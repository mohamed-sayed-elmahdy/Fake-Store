# Fake Store React App 🛍️

## Overview

This project is a simple React e-commerce application that fetches products from the [Fake Store API](https://fakestoreapi.com/docs) and displays them in a clean, responsive, and functional store interface. It uses **React**, **React Router**, **Tailwind CSS**, and **Vite** with a clean code architecture structure.

## Features

* ✅ Product List Page (Home)
* ✅ Product Details Page
* ✅ Shopping Cart with Global State Management (Context API)
* ✅ Add/Remove Products from Cart
* ✅ Cart Page with Total Calculation
* ✅ Loading and Error Handling UI
* ✅ Clean folder structure and modular components

---

## Tech Stack 📦

* React 18
* React Router DOM v7
* TailwindCSS v3
* Vite (for blazing fast dev environment)
* Context API (Global State Management)
* Eslint + Prettier + Tailwind plugin for code quality

---

## Project Structure 📁

```
src/
 ├── components/      # Reusable UI components (Navbar, ProductCard, Loading, Error)
 ├── context/         # Cart Context (Global State)
 ├── pages/           # Main Pages (Home, ProductDetails, Cart)
 ├── services/        # API service layer
 ├── App.jsx          # App entry point with Routing
 ├── index.jsx        # React DOM rendering
 └── index.css        # Tailwind CSS imports
```

---

## Getting Started 🚀

### 1. Clone the Repository

```bash
git clone https://github.com/mohamed-sayed-elmahdy/Fake-Store.git
cd Fake-Store

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Available Scripts 🛠️

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Runs the app in development mode.    |
| `npm run build`   | Builds the app for production.       |
| `npm run preview` | Serves the production build locally. |
| `npm run lint`    | Runs ESLint for code linting.        |

---

## Clean Code Architecture 🧹

* Modular Folder Structure ✅
* API Logic is separated in `services/` ✅
* Global State managed via Context API ✅
* UI Components are isolated in `components/` ✅
* Routing handled with React Router ✅
* Loading and Error Handling covered ✅
* ESLint and Prettier integrated ✅

---

## Author 👨‍💻

Mohamed Sayed Elmahdy

