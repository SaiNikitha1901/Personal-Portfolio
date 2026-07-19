// ============================================================================
// "CURRENTLY..." PANEL DATA
// ============================================================================
// Powers the Currently sidebar on the homepage. Update this file whenever
// what you're working on changes — ideally once a week, alongside
// `lastUpdated` below.
//
// Each item in `currentlyItems` is one widget:
//   id           — unique, used as the React key
//   title        — small category label at the top (e.g. "Current Project")
//   heading      — the prominent line — what it actually is
//   description  — one short supporting line
//   link         — optional URL; set this to make the whole widget
//                  clickable (this is how the DSA widget links to
//                  LeetCode), leave null for a plain (non-clickable) widget
// ============================================================================

// Shown next to the "Currently" heading as "Updated <date>". Just the date
// you last touched this file, in YYYY-MM-DD — the component formats it for
// display, so you only ever need to edit this one string.
export const lastUpdated = '2026-07-18';

// ============================================================================
// "CURRENTLY..." PANEL DATA
// ============================================================================
// The three widgets in the top-right of the homepage. This is meant to be a
// live-feeling snapshot of what you're doing right now — update it whenever
// that changes. No API integration on purpose (see README) — just edit the
// strings below and redeploy.
//
// `link` is optional — leave it null for a plain text widget, or set it to
// a URL (like your LeetCode profile) to make the widget clickable.
// ============================================================================

export const currentlyItems = [
  {
    id: 'project',
    label: 'Current project: ',
    value: 'Earth Foundation Model — continual pretraining pipeline',
    link: null,
  },
  {
    id: 'research',
    label: 'Learning: ',
    value: 'Docker',
    link: null,
  },
  {
    id: 'dsa',
    label: 'DSA: ',
    value: "Working through Striver's A2Z — Arrays",
    link: null,
  },
];
