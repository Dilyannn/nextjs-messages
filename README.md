<!-- markdownlint-disable -->
# 📨 Next.js Messages: Caching Deep Dive

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JS](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQLite](https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A high-performance demonstration of **Next.js App Router** caching strategies. This project explores how to optimize data fetching and state management using modern React and Next.js features.

---

## 🚀 Key Features

- **Advanced Caching**: Implements `unstable_cache` and React's `cache` function to minimize database load.
- **Dual Data Sources**: Showcases seamless integration with a local **SQLite** database and a separate **Express.js** backend.
- **Revalidation Mastery**: Demonstrates time-based revalidation (`revalidateTag`, `revalidatePath`) and dynamic rendering configurations.
- **Server Components**: Leverages Next.js Server Components for lightning-fast initial page loads and SEO optimization.
- **Client Components**: Interactive message handling with optimized client-side state.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React 18/19](https://react.dev/)
- **Database**: [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- **Backend API**: [Express.js](https://expressjs.com/)
- **Styling**: Standard CSS with Next.js optimization

---

## 🏁 Getting Started

### 1. Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Dilyannn/nextjs-messages.git

# Install dependencies for frontend
npm install

# Install dependencies for backend
cd backend
npm install
```

### 3. Running the Project
```bash
# Start the backend server (on port 8080)
npm start # inside /backend

# Start the Next.js frontend (on port 3000)
npm run dev # in the root directory
```

---

## 📖 Main Focus: Caching
The directory [lib/messages.js](lib/messages.js) contains the core caching logic. It uses `unstable_cache` to wrap database calls, providing a robust way to persist data across different requests while maintaining the ability to purge or revalidate that data on demand.

*Happy Coding!* 🚀
