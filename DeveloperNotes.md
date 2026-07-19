# Nikitha's Portfolio

A personal portfolio built as a retro digital workspace — a "desktop" you
explore, where each section (Work, About, Experience, Learning) opens as its
own retro app window on top.

This README is written for future-you maintaining this yourself. If
something below doesn't match reality anymore, trust the code over the doc.

---

## 1. Project structure

```
nikitha-portfolio/
├── index.html              # HTML shell + Google Fonts links + favicon
├── public/
│   ├── images/              # drop project screenshots / avatar art here
│   └── sounds/               # drop click/open/close .mp3 files here
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # top-level layout + which window is open
│   ├── utils.js                # tiny shared helpers (e.g. status → tag color)
│   ├── context/
│   │   ├── WindowManagerContext.jsx   # tracks which overlay window is open
│   │   └── SoundContext.jsx            # mute state + playSound()
│   ├── data/                    # <-- edit THESE files to update content
│   │   ├── projects.js           # Work section + Evolution Logs
│   │   ├── experience.js          # Experience / Community / Awards
│   │   ├── learning.js             # Rabbit hole.exe topics
│   │   ├── currently.js             # "Currently..." homepage widgets
│   │   └── social.js                 # LinkedIn / GitHub / email / resume
│   ├── styles/
│   │   ├── tokens.css            # every color/font/spacing variable
│   │   └── global.css             # reset + base styles
│   └── components/
│       ├── Window/                # shared "app chrome" used by every window
│       ├── shared/                 # Tag, SoundToggle — small reused pieces
│       ├── Desktop/                 # the homepage
│       ├── ProjectWindow/            # project detail window + Evolution Log
│       ├── AboutWindow/               # About window + placeholder avatar
│       ├── ExperienceWindow/           # file-explorer style window
│       └── RabbitHoleWindow/            # Learning window + portals + rabbit
└── package.json
```

**The rule of thumb:** if you want to change *what's on the site*, edit a
file in `src/data/`. If you want to change *how it looks or behaves*, edit
the matching component/CSS. You should rarely need to touch both at once.

---

## 2. How the homepage works

`Desktop.jsx` composes four pieces:

- `Header.jsx` — your name + intro (static text, rarely changes)
- `CurrentlyPanel.jsx` — reads `data/currently.js`
- `Workspace.jsx` — reads `data/projects.js` for the Work cards, and renders
  the About/Experience/Learning tiles
- `LinkBar.jsx` — reads `data/social.js`

Nothing on the homepage manages its own "is a window open" state — clicking
a project card or a tile calls `openWindow(...)` from
`WindowManagerContext`, and `App.jsx` decides what to render based on that.

---

## 3. How window navigation works

There's exactly one place that knows about all four overlay windows:
`ActiveWindow` inside `App.jsx`. It reads `activeWindow` from
`WindowManagerContext` — an object like `{ type: 'about' }` or
`{ type: 'project', projectId: 'thread' }` — and renders the matching
window component.

Every window shares the same chrome (title bar, close button, dimmed
backdrop, open/close sound) via the `Window` component in
`components/Window/Window.jsx`. If you want to change how ALL windows look
(border thickness, shadow, animation), that's the one file to edit.

Windows close via: the × button, clicking the dimmed backdrop, or pressing
Escape — all three call the same `closeWindow()`.

---

## 4. How projects are stored

Every project card and everything inside its Project Window comes from the
`projects` array in `src/data/projects.js`. See the big comment block at the
top of that file for the exact shape.

### To add a new project
1. Copy one of the existing objects in `projects.js`.
2. Give it a unique `id` (lowercase, hyphenated, no spaces).
3. Fill in the fields — use `'Details coming soon.'` for anything you don't
   have yet.
4. Save. It shows up as a new card on the homepage and gets its own Project
   Window automatically — no component changes needed.

### To add an Evolution Log entry
Add another object to that project's `evolutionLog` array:

```js
{
  date: "JUL 26 '26",
  title: 'Short milestone title',
  image: null, // or '/images/your-screenshot.png'
  whatHappened: 'What you did.',
  whatIFiguredOut: 'What you learned.',
}
```

It appears as the next node on the snake path automatically. The path lays
out 3 nodes per row (see `NODES_PER_ROW` in `EvolutionLog.jsx`) and
alternates direction every row using pure CSS (`flex-direction: row-reverse`
on odd rows) — this is a simplified version of a "true" generated path, on
purpose (see the original brief, section 7), and it scales to any number of
entries without needing new code.

---

## 5. How to update "Currently"

Edit the `currentlyItems` array in `src/data/currently.js`. Each item is:

```js
{ id: 'unique-id', label: 'Short label', value: 'What you're doing', link: null }
```

Set `link` to a URL to make that widget clickable (this is how the DSA
widget links to LeetCode); leave it `null` for plain text.

---

## 6. How to add a Learning rabbit hole

Edit `src/data/learning.js`. Add an object with a unique `id`, a `label`,
`status`, `currentFocus`, a `resources` array (`{ label, url }` pairs — can
be empty), and a `position` (`x`/`y` as percentages, so it doesn't overlap
existing portals). It appears as a new portal in Rabbit hole.exe
automatically.

---

## 7. Replacing placeholder art

Nothing in this project depends on real image or sound assets — everything
placeholder is built with CSS/SVG so the site never breaks with missing
files. Replace them whenever you're ready:

- **Project visuals**: set `image: '/images/your-file.png'` on a project in
  `data/projects.js` (put the file in `public/images/` first).
- **Evolution Log images**: same idea, on the `image` field of a milestone
  entry.
- **About avatar**: `src/components/AboutWindow/PixelAvatar.jsx` is a small
  hand-built SVG. Either edit the `<rect>` values directly, or replace the
  whole component with `<img src="/images/avatar.png" alt="Nikitha" />`.
- **Rabbit sprite**: same idea, in
  `src/components/RabbitHoleWindow/Rabbit.jsx`.

See `public/images/README.txt` for a quick reminder of all of this.

---

## 8. Adding sound

Sound is off by default and only ever plays after someone taps the
"SOUND: OFF/ON" toggle in the top-right corner — see `SoundContext.jsx` for
why (no autoplay, ever).

To make sounds actually play, drop real `.mp3` files into `public/sounds/`
using these exact names:

```
public/sounds/click.mp3   → button/tile clicks
public/sounds/open.mp3    → a window opening
public/sounds/close.mp3   → a window closing
public/sounds/hover.mp3   → available, not wired to anything by default
```

That's it — no code changes needed. Until you add files, `playSound()`
just fails quietly (see the `.catch()` in `SoundContext.jsx`), so the site
stays silent instead of throwing errors.

---

## 9. Running locally

You'll need [Node.js](https://nodejs.org) installed (v18+).

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, usually
`http://localhost:5173`) with hot-reload — edits to any file show up
instantly in the browser.

---

## 10. Building for production

```bash
npm run build
```

This outputs a static site into `dist/`. You can preview that build locally
with:

```bash
npm run preview
```

`dist/` is just static HTML/CSS/JS — deploy it anywhere that serves static
files (Vercel, Netlify, GitHub Pages, etc.).

---

## Notes on the code style

This project intentionally avoids clever abstractions in favor of code
that's easy to read top-to-bottom. A few patterns you'll see repeated on
purpose:

- **Data-driven sections** (`Workspace`, `ExperienceWindow`,
  `RabbitHoleWindow`) all follow the same shape: import an array from
  `data/`, `.map()` over it, render a small presentational component per
  item. Once you're comfortable with one, you're comfortable with all of
  them.
- **One shared `Window` component** for chrome, instead of four separate
  modal implementations.
- **Plain CSS files** per component/feature area (no CSS-in-JS, no Tailwind)
  — everything is a class name you can search for directly.
- **Two small Contexts** (`WindowManagerContext`, `SoundContext`) instead of
  any state management library — there just isn't enough shared state here
  to justify one.

No backend, database, or authentication — this is a static site, and it's
meant to stay that way for a while.
