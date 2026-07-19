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

export const currentlyItems = [
  {
    id: 'project',
    title: 'Current Project',
    heading: 'Earth Foundation Model',
    description: 'Building the continual pretraining pipeline.',
    link: null,
  },
  {
    id: 'research',
    title: 'Research / Coursework',
    heading: 'Satellite Imagery Foundation Models',
    description: 'Specializing pretrained models for Indian geospatial data.',
    link: null,
  },
  {
    id: 'dsa',
    title: 'DSA',
    heading: "Striver's A2Z — Graphs",
    description: 'Grinding problems on LeetCode.',
    link: 'https://leetcode.com/YOUR-USERNAME',
  },
];