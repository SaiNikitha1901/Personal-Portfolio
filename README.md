# Nikitha's Portfolio

An interactive portfolio built as a retro desktop workspace rather than a traditional scrolling website.

Instead of navigating between pages, visitors explore projects, research, experience, and ongoing learning through desktop-style windows. The portfolio is designed to present not only completed work, but also the thinking, experimentation, and learning process behind it.

The project emphasizes a data-driven architecture, where nearly all portfolio content is managed through structured data files rather than hardcoded components, making it easy to maintain and extend over time.

---

## Features

- Desktop-inspired interface with window-based navigation
- Interactive project windows with dedicated overview, evolution log, and links
- Evolution Logs documenting the progression of projects from idea to implementation
- Rabbit Hole.exe, a visual map of current learning interests and research
- Data-driven content architecture for projects, experience, learning, and homepage widgets
- Custom pixel-art illustrations created specifically for each major project
- Optional retro sound effects with user-controlled playback

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- Context API

---

## Project Structure

```
src/
├── components/
├── context/
├── data/
├── styles/
└── utils.js
```

The application separates content from presentation. Portfolio content lives in `src/data`, while reusable UI components are organized by feature under `src/components`.

For implementation details and architecture documentation, see **DEVELOPER_NOTES.md**.

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Live Demo

Coming soon.

---

## License

This project is available for learning and reference purposes. Please do not copy the design or content directly.