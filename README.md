# Joon's Portfolio

This is Youngjoon Park(Joon)'s portfolio. It presents who is Youngjoon Park(Joon), what skills I have, and what kind of work experience I had. Also, it provides my contact information.

The site is built as a macOS-like desktop: draggable/resizable windows, a dock, a menu bar with a
live clock, desktop widgets, and a light/dark theme. On tablet and phone widths it falls back to a
mobile layout.

## Apps

| App            | What it does                                                                                |
| -------------- | ------------------------------------------------------------------------------------------- |
| **Welcome**    | Typewriter intro that plays on load — who I am and how to reach me                            |
| **About**      | Personal info, work experience (per-company detail), and education                            |
| **Skills**     | Tech stack by category: Front-End, Back-End, Mobile, Programming Languages                    |
| **Projects**   | Project list with stack, description, screenshots, and repo / live links                      |
| **Resume**     | My resume, embedded                                                                           |
| **Terminal**   | Interactive shell — see below                                                                 |
| **Calculator** | macOS-style calculator (four operations, percent, sign flip, thousands grouping)              |
| **Todo**       | My current learning / career goals list                                                       |
| **Calendar**   | Month view of the current date                                                                |
| **Weather**    | Vancouver, BC current conditions + 7-day forecast, from the key-less Open-Meteo API           |
| **Utils**      | Finder-style folder that opens Terminal, Calculator, Calendar, Weather, Todo, and Settings     |
| **Settings**   | Light / dark theme switch (persisted)                                                         |

Calendar, Weather, and Todo also render as desktop widgets — clicking a widget opens its window.

### Terminal

The Terminal window is an interactive shell that shares the Welcome window's look — the same
`joon@MacBook-Air ▸ ~/portfolio/` arrow badge prompt and line styling — and the same markdown
files the Welcome window reads.

Available commands:

| Command       | Description                     |
| ------------- | ------------------------------- |
| `ls`          | list the files in the directory |
| `cat <file>`  | print a file                    |
| `help`        | show the command list           |
| `date`        | current date/time               |
| `echo ...`    | print text                      |
| `clear`       | clear the screen                |

Readable files: `intro.md`, `contact.md`, `skills.md`, `experience.md`, `projects.md`.
Arrow Up / Down cycles through command history.

## Tech Stack

React + TypeScript, Vite, Tailwind CSS, Zustand for window state, react-rnd for window
drag/resize, deployed to GitHub Pages.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the Vite dev server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (set `PORT` to override).

The page will reload if you make edits.

### `yarn build`

Type-checks with `tsc --noEmit`, then builds the app for production to the `build` folder.

### `yarn preview`

Serves the production build locally.

### `yarn deploy`

It deploys this website to the Github Page. It should be used in `main` branch.
