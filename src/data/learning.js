// ============================================================================
// RABBIT HOLE.EXE DATA
// ============================================================================
// One object per "portal" in the Learning window. `position` is a
// percentage-based x/y (of the window's content area), so the layout holds
// up reasonably well across window sizes without needing pixel math.
//
// TO ADD A NEW RABBIT HOLE: add another object below with a unique `id` and
// a `position` that doesn't overlap the others. That's it.
//
// `status` is just a short label (see the brief for the intended set:
// Peeking In / Falling / Deep In / Climbed Out / Got Distracted) — purely
// text, no special logic attached to specific values.
// ============================================================================

export const learningTopics = [
  {
    id: 'earth-fms',
    label: 'Earth FMs',
    status: 'Deep In',
    currentFocus: 'Foundation model pretraining, remote sensing, continual learning & domain adaptation for Indian satellite imagery.',
    resources: [
      { label: 'Prithvi EO', url: 'https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M-TL/tree/main' },
      { label: 'Clay Foundation Model', url: 'https://clay-foundation.github.io/model/' },
      { label: 'Sentinel-2(GEE)', url: 'https://developers.google.com/earth-engine/datasets/catalog/sentinel-2' },
    ],
    position: { x: '14%', y: '16%' },
  },
  {
    id: 'dsa',
    label: 'DSA',
    status: 'Falling',
    currentFocus: 'Arrays',
    resources: [
      {
        label: "Striver's A2Z",
        url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
      },
      { label: 'LeetCode', url: 'https://leetcode.com' },
    ],
    position: { x: '80%', y: '20%' },
  },
  {
    id: 'core-cs',
    label: 'Core CS',
    status: 'Peeking In',
    currentFocus: 'Building stronger fundamentals through Operating Systems, DBMS, Networking and distributed systems.',
    resources: [ { label: 'DBMS', url: 'https://youtu.be/dl00fOOYLOM?si=tGGqOXKoxL1zMiVW',},
      {  label: 'Computer Networking',},
       { label: 'Operating Systems',
       },],
    position: { x: '47%', y: '48%' },
  },
  {
    id: 'ml',
    label: 'ML',
    status: 'Peeking In',
    currentFocus: 'Working through GeeksforGeeks Machine Learning & Data Science course.',
    resources: [
     
    ],
    position: { x: '16%', y: '78%' },
  },
  {
    id: 'ai',
    label: 'AI',
    status: 'Peeking In',
    currentFocus: 'Learning how LLMs, agents and retrieval systems are built by creating real projects.',
    resources: [],
    position: { x: '81%', y: '80%' },
  },
];
