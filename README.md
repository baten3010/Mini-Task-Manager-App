# Mini Task Manager

A small React app that manages a list of tasks, built to practice `useState`,
`useRef`, `useEffect`, React Router, and the Context API.

# Features

-> **useState & Immutability** — tasks are kept in an array of `{ id, title, completed }`
  objects. Adding a task uses the spread operator (`[...prevTasks, newTask]`) instead
  of mutating the array directly.
-> **useRef** — the task-title input is auto-focused on page load, and a task-count
  label (`x / y done`) is updated directly through a ref.
-> **useEffect + API call** — on load, the app fetches 5 sample tasks from
  `https://jsonplaceholder.typicode.com/todos?_limit=5` using `async/await`, with a
  loading state shown while the request is in flight.
-> **Toggle complete** — clicking a task's checkbox flips its `completed` status using
  an immutable state update (`map` + spread).
-> **React Router** — two routes: `/` (task list) and `/about` (a static info page),
  with a navbar using `NavLink` to switch between them.
-> **Context API** — a `ThemeContext` provides light/dark mode app-wide; a button in
  the navbar toggles the theme.

# Project structure

```
src/
  components/
    Navbar.jsx        # nav links + theme toggle button
    TaskItem.jsx       # single task row with checkbox
  context/
    ThemeContext.jsx   # light/dark theme provider + useTheme hook
  pages/
    TaskList.jsx        # main "/" route: add tasks, fetch, toggle
    About.jsx           # static "/about" route
  App.jsx
  main.jsx
  index.css
```

# How to run the project

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

   This will start Vite's dev server (usually at `http://localhost:5173`).
   Open that URL in your browser.

3. **Build for production** (optional)

   ```bash
   npm run build
   npm run preview
   ```

# Requirements

- Node.js 18+ and npm installed.

# Notes

- The starter tasks come from JSONPlaceholder's free fake API
  (`/todos?_limit=5`), so you'll see 5 sample tasks pre-loaded when the app starts.
- Any task you add yourself is stored only in memory (component state), so it
  will reset on page refresh — this matches the scope of the assignment.
