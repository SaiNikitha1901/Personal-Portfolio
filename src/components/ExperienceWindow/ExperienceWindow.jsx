import { useState } from 'react';
import Window from '../Window/Window';
import { experienceEntries, communityEntries, awardEntries } from '../../data/experience';
import './ExperienceWindow.css';

// Three "folders" in the sidebar, each pointing at one of the arrays from
// data/experience.js. Add a new folder here (and a matching data array) if
// you ever want a fourth category.
const FOLDERS = [
  { id: 'experience', label: 'Experience', entries: experienceEntries },
  { id: 'community', label: 'Community', entries: communityEntries },
  { id: 'awards', label: 'Awards', entries: awardEntries },
];

export default function ExperienceWindow({ onClose }) {
  // Which folder is currently selected — this is the only state this
  // component needs, everything else is derived from it.
  const [selectedFolderId, setSelectedFolderId] = useState('experience');
  const folder = FOLDERS.find((f) => f.id === selectedFolderId);

  return (
    <Window title="Experience — file explorer" onClose={onClose} size="large">
      <div className="experience-layout">
        <nav className="experience-sidebar" aria-label="Experience categories">
          {FOLDERS.map((f) => (
            <button
              key={f.id}
              className={`experience-folder ${
                selectedFolderId === f.id ? 'experience-folder--active' : ''
              }`}
              onClick={() => setSelectedFolderId(f.id)}
            >
              <span className="experience-folder-icon" aria-hidden="true" />
              {f.label}
            </button>
          ))}
        </nav>

        <div className="experience-content">
          <h3 className="experience-content-heading">{folder.label}</h3>

          {folder.entries.length === 0 && <p className="experience-empty">Nothing here yet.</p>}

          <ul className="experience-entry-list">
            {folder.entries.map((entry) => (
              <li key={entry.id} className="experience-entry">
                <div className="experience-entry-top">
                  {/* Awards use `title` instead of `role` — this handles
                      both shapes without needing two separate list
                      components. */}
                  <span className="experience-entry-title">{entry.role || entry.title}</span>
                  {entry.period && <span className="experience-entry-period">{entry.period}</span>}
                </div>
                {entry.org && <span className="experience-entry-org">{entry.org}</span>}
                <p className="experience-entry-desc">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}
