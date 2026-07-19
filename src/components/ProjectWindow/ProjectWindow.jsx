import { useState } from 'react';
import Window from '../Window/Window';
import Tag from '../shared/Tag';
import EvolutionLog from './EvolutionLog';
import { projects } from '../../data/projects';
import { getStatusTone } from '../../utils';
import './ProjectWindow.css';

const TABS = ['Overview', 'Evolution Log', 'Links'];

// Opens as a "MISSION" briefing window when a project card is clicked.
// `projectId` comes from the WindowManagerContext descriptor set in
// Workspace.jsx — we just look up the matching object in data/projects.js.
export default function ProjectWindow({ projectId, onClose }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const project = projects.find((p) => p.id === projectId);

  // Defensive fallback — shouldn't happen through normal clicks, but keeps
  // the app from crashing if projectId ever points at something missing.
  if (!project) return null;

  return (
    <Window
      title={`MISSION ${project.missionNumber} — ${project.title}`}
      onClose={onClose}
      size="large"
    >
      <div className="project-header">
        <div className="project-header-text">
          <span className="project-mission-number">MISSION {project.missionNumber}</span>
          <h2 className="project-title">
            {project.title}
            {project.subtitle && <span className="project-subtitle"> ({project.subtitle})</span>}
          </h2>
          <div className="project-tags">
            <Tag>{project.type}</Tag>
            <Tag tone={getStatusTone(project.status)}>{project.status}</Tag>
          </div>
          <p className="project-short-desc">{project.shortDescription}</p>
        </div>

        <div
          className="project-visual"
          style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
          aria-hidden="true"
        />
      </div>

      <div className="project-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`project-tab ${activeTab === tab ? 'project-tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="project-tab-content">
        {activeTab === 'Overview' && (
          <div className="project-overview">
            {/* Overview text is written with blank lines between paragraphs
                in data/projects.js — split on those so it renders as
                separate <p> tags instead of one wall of text. */}
            {project.overview.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {activeTab === 'Evolution Log' && <EvolutionLog entries={project.evolutionLog} />}

        {activeTab === 'Links' && (
          <ul className="project-links">
            {project.links.github && (
              <li>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub repository →
                </a>
              </li>
            )}
            {project.links.live && (
              <li>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live deployment →
                </a>
              </li>
            )}
            {project.links.paper && (
              <li>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  Paper / write-up →
                </a>
              </li>
            )}
            {!project.links.github && !project.links.live && !project.links.paper && (
              <li className="project-links-empty">Links coming soon.</li>
            )}
          </ul>
        )}
      </div>
    </Window>
  );
}
