# OpsLevelOA — Todo List

A React todo list app with priority tracking and missing-priority detection.

## Stack

- **React** (Vite + TypeScript)
- **Redux Toolkit** — in-memory state
- **Mantine** — UI components
- **Tailwind CSS** — layout and styling

## Getting started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- Create, list, and delete todo items
- Assign a positive integer priority (lower = higher priority)
- View missing priorities (gaps from 1 to the highest assigned value)
