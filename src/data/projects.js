// ============================================================================
// PROJECT DATA
// ============================================================================
// Everything shown on a project card, and everything inside its Project
// Window (Overview / Evolution Log / Links tabs), comes from this one file.
// Adding a project or logging a milestone never requires touching a
// component — just edit the arrays below.
//
// ---- TO ADD A NEW PROJECT ----
//   1. Copy one of the objects in the `projects` array below.
//   2. Give it a unique `id` (lowercase, hyphenated — this is used
//      internally to know which project window to open, so it must be
//      unique and never contain spaces).
//   3. Fill in the fields. If you don't have something yet, leave a short
//      honest placeholder like 'Details coming soon.' rather than an empty
//      string — it reads better on the page.
//   4. It will automatically show up as a card in the Work section and get
//      its own Project Window — no other file needs to change.
//
// ---- TO ADD AN EVOLUTION LOG ENTRY ----
//   Add another object to that project's `evolutionLog` array, in this
//   shape:
//     {
//       date: 'JUL 26 \'26',
//       title: 'Short milestone title',
//       image: null,             // or '/images/your-screenshot.png'
//       whatHappened: '...',
//       whatIFiguredOut: '...',
//     }
//   It will appear as the next node on the snake path automatically.
// ============================================================================

export const projects = [
  {
    id: 'earth-foundation-model',
    missionNumber: '01',
    title: 'Earth Foundation Model',
    type: 'Research',
    status: 'In Progress',
    shortDescription:
      'Adapting a pretrained Earth observation foundation model to Indian geography.',
    overview: `Large foundation models trained on satellite imagery from all over the world often lose accuracy on regions that look different from what they mostly saw during pretraining. This project explores how to close that gap for Indian geospatial data.

I'm working with a pretrained satellite imagery transformer and specializing it further on Sentinel-2 imagery covering parts of India, using parameter-efficient fine-tuning (LoRA) instead of retraining the whole model from scratch. The core question I'm chasing: how much of a "global" foundation model's knowledge actually transfers to one region, and what's the most efficient way to adapt the rest.`,
    image: '/images/EarthFoundation.png', // e.g. '/images/earth-fm-cover.png' once you have one
    links: {
      github: '',
      live: '',
      paper: '',
    },
    evolutionLog: [
      {
    date: 'JUN 03 \'26',
    title: 'Started Research Internship',
    image: '/images/FM1.png',
    whatHappened:
      'Joined the PESU Research Foundation internship and began exploring the field of Earth Foundation Models. The first few weeks were dedicated to understanding remote sensing, satellite imagery, and the rapidly growing landscape of foundation models for Earth observation.',
    whatIFiguredOut:
      'Research starts with asking the right questions, not writing code. Building a strong understanding of existing work is just as important as implementation.',
  },
  {
    date: 'JUN 10 \'26',
    title: 'Literature Review & Research Direction',
    image: '/images/FM2.png',
    whatHappened:
      'Read and compared recent Earth Foundation Models including SatMAE, DOFA, Prithvi, Clay, TerraMind and related benchmarks. Explored different pretraining strategies and identified the research direction of adapting pretrained models for Indian satellite imagery.',
    whatIFiguredOut:
      'Every foundation model makes different design choices. Understanding why those choices were made became more valuable than simply comparing benchmark numbers.',
  },
  {
    date: 'JUNE 25 \'26',
    title: 'Model Agnostic Dataset Collection Pipeline',
    image: '/images/FM3.png',
    whatHappened:
      'Moved from reading papers to implementation by building the dataset download pipeline. Performed basic preprocessing.',
    whatIFiguredOut:
      'There existed no datasets for Indian satellite imagery in the format required by these models. Built and optimized a preprocessing workflow to create the datasets needed for experimentation.',
  },
  {
    date: 'JUL 03 \'26',
    title: 'Narrowed Research Scope',
    image: '/images/FM4.png',
    whatHappened:
      'After discussions with my mentor, refined the project into adapting a pretrained Earth observation foundation model for Indian geospatial data using parameter-efficient fine-tuning techniques.',
    whatIFiguredOut:
      'Narrowing the scope made the work far more focused and achievable. Now focusing on Karnataka and Andhra Pradesh regions and adding weather fusion data to the model input. This will allow the model to learn how weather patterns affect satellite imagery and improve its performance on Indian geospatial data.',
  },
  {
  date: 'JUL 07 \'26',
  title: 'Selected the Foundation Model',
  image: '/images/FM5.png',
  whatHappened:
    'Evaluated multiple Earth Foundation Models and selected Prithvi for further experimentation.',
  whatIFiguredOut:
    'Trying to compare every promising model spreads effort too thin. Focusing on one strong baseline makes it much easier to iterate, understand failures, and produce meaningful research.',
},
  {
    date: 'JUL 15 \'26',
    title: 'Verified Preprocessing and Continual Pretraining Loop',
    image: '/images/FM6.png',
    whatHappened:
      'Completed the preprocessing workflow for Prithvi and loaded checkpoint from huggingface. Also added LoRA layers to the model and started training on Indian satellite imagery. Debugged it on a small subset of the dataset before scaling up to the full dataset.',
    whatIFiguredOut:
      'Research is iterative. Every paper, experiment, and preprocessing decision contributed to a stronger foundation before training even began.',
  },

    ],
  },
  {
    id: 'vcs-project',
    missionNumber: '02',
    title: 'VCS Project',
    type: 'Product',
    status: 'Exploring',
    shortDescription: 'Building a version control system from scratch to understand how Git works under the hood.',
    overview: `Modern version control systems feel almost invisible until something goes wrong. We use commands like commit, branch, merge, and checkout every day, but it's easy to treat them as magic. 


    This project is my attempt to understand what actually happens beneath those commands by building a simplified version control system from scratch. 

    Instead of relying on existing Git implementations, I'm recreating the core ideas myself—tracking file changes, storing snapshots efficiently, maintaining commit history, and supporting branching and merging.
    
    The goal isn't to replace Git, but to explore the data structures and algorithms that make distributed version control reliable and fast.
    Building this project has given me a much deeper understanding of how software engineering tools are designed, and how seemingly simple commands are backed by carefully engineered systems.`,
    image: '/images/VCSImage.png', // e.g. '/images/vcs-project-cover.png' once you have one
    links: { github: 'https://github.com/SaiNikitha1901/PES2UG24AM142-pes-vcs', live: '', paper: '' },
    evolutionLog: [],
  },
  {
    id: 'thread',
    missionNumber: '03',
    title: 'Thread',
    subtitle: "previously called Tether",
    type: 'Product',
    status: 'Learning Components',
    shortDescription: 'Building the tool I wish existed to organize ideas, learning, and projects in one place.',
    overview: `Thread was born from a simple frustration: my ideas, research, tasks, and project notes were scattered across too many apps, making it difficult to maintain context. Instead of adapting my workflow to existing tools, I decided to build the workspace I always wished existed—one that connects everything in a single place.

    I'm intentionally approaching this project differently from my previous ones. Before writing code, I'm learning the technologies behind each feature, planning the architecture, and understanding the design decisions. The goal is to build a product I genuinely use every day while documenting its evolution from idea to reality.`,
    image: '/images/Thread.png', // e.g. '/images/thread-cover.png' once you have one
    links: { github: '', live: '', paper: '' },
    evolutionLog: [
      {
  date: 'JUL 15\'26',
  title: 'Project Kickoff',
  image: '/images/Try.png',
  whatHappened:
    'Thread began as an idea born from the frustration of scattered notes, browser tabs, and disconnected project documents. Instead of jumping straight into development, I decided to first understand the technologies behind each feature and design the architecture intentionally.',
  whatIFiguredOut:
    'A good product starts long before the first line of code. Spending time learning and planning now will make building much smoother later.',
},
{
  date: 'JUL 19\'26',
  title: 'Building the Foundation',
  image: '/images/Docker.png',
  whatHappened:
    'Started learning Docker and Docker Compose to create reproducible development environments for Thread. This marks the beginning of building the project\'s backend infrastructure.',
  whatIFiguredOut:
    'Development environment setup isn\'t just a prerequisite—it shapes how easily a project can be developed, tested, and deployed as it grows.',
},
    ],
  },
];
