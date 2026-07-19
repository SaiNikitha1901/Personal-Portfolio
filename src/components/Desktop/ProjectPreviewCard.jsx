import Tag from '../shared/Tag';
import { getStatusTone } from '../../utils';

// One project card inside the horizontally-scrolling Work section.
// Clicking it opens the full Project Window (handled by the parent via
// the onClick prop, which calls openWindow from WindowManagerContext).
export default function ProjectPreviewCard({ project, onClick }) {
  return (
    <button className="project-preview-card" onClick={onClick}>
      <div
        className="project-preview-visual"
        style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
        aria-hidden="true"
      >
        {/* If project.image isn't set in data/projects.js, this striped
            pattern (defined in Desktop.css) stands in as a placeholder. */}
        <span className="project-preview-mission">MISSION {project.missionNumber}</span>
      </div>
      <div className="project-preview-body">
        <h3 className="project-preview-title">{project.title}</h3>
        <Tag tone={getStatusTone(project.status)}>{project.status}</Tag>
        <p className="project-preview-desc">{project.shortDescription}</p>
      </div>
    </button>
  );
}
