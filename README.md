# 📊 Next.js 14+ Analytics Dashboard

A modern analytics dashboard built using **Next.js 14+ App Router**, **TypeScript**, **Zustand**, **React Query**, **Recharts**, **TanStack Table**, and **Tailwind CSS**. This project demonstrates a modular, full-featured dashboard with authentication, charts, data tables, and CSV export support.

---

## 🚀 Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**
```bash
npm install
# or
yarn
```

```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Build and preview production**
```bash
npm run build
npm start
```

---

## ✨ Features Overview

-  Modular Dashboard layout with sidebar and header
-  JWT-based Auth with protected routes
- 📈 Charts powered by Recharts (bar, line, pie, etc.)
- Sortable, filterable tables using TanStack Table
- 🔎 Global search for data filtering
-  CSV export functionality
- 🌗 Theme toggle (light/dark mode) with Zustand
- 🧠 State management using Zustand (Auth, Theme)
-  Mock data and artificial delay support
- 🔁 Server and Client Components (App Router)
- ✅ Responsive & mobile-friendly

---

##  Component Architecture

```
src/
│
├── app/                             → App Router structure
│   ├── (auth)/                      → Login and Signup pages
│   ├── (home)/                      → Protected dashboard routes
│   ├── error.tsx                    → App-level error boundary page
│   └── layout.tsx                   → Root layout (providers, fonts)
│
├── component/                       → Reusable UI components
│   ├── card/                        → Card wrapper for UI sections
│   ├── chart/                       → Reusable chart components (BarChart, PieChart etc.)
│   ├── common/                      → Layout components like Sidebar, Header, ProtectedLayout
│   ├── table/                       → Table wrapper using TanStack Table
│   └── theme/                       → ThemeToggle button and provider
│
├── store/                           → Zustand stores (authStore, themeStore)
├── lib/                             → Utility functions (e.g., CSV export)
├── utils/                           → Constants and helper types
│   ├── constants.ts                 → Application-wide constants
│   └── types.ts                     → Reusable TypeScript types and interfaces
│
├── mocks/                            → Mock data (user stats, activity logs, revenue etc.)
├── public/                          → Static assets (images, logos, etc.)

```

## 📦 Mock Data Description

The dashboard uses pre-defined **mock data** in the `/data` directory to simulate API responses. These mock files include artificial delays to mimic real-world scenarios.


> ⚠️ Data is mocked and fetched using artificial delays to simulate loading states. You can replace it with real API calls easily.

---

## 🛡️ Authentication

- Auth state is stored in **Zustand** and persisted in **`localStorage`**.
- Protected routes are wrapped in `<ProtectedLayout>` and redirect unauthenticated users to the login page.
- Roles (e.g., `admin`, `user`) are also supported to control access.

---

## 📁 CSV Export

- All filtered table data can be exported to CSV.
- Uses a utility function `exportToCSV()` inside `lib/exportCSV.ts`.
- Export is triggered by clicking the "Export CSV" button.

---

## 🌗 Theme Support

- Toggle between **light** and **dark** modes using the `ThemeToggle` component.
- State is managed using Zustand and persisted across sessions.