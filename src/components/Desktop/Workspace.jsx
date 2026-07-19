import { projects } from '../../data/projects';
import ProjectPreviewCard from './ProjectPreviewCard';
import AppTile from './AppTile';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useSoundSettings } from '../../context/SoundContext';

// The middle "old computer workspace" section of the homepage: the Work
// area (project cards, data-driven from data/projects.js) plus the About /
// Experience / Learning tiles. This component owns the click handlers that
// open each overlay window via WindowManagerContext.
export default function Workspace() {
  const { openWindow } = useWindowManager();
  const { playSound } = useSoundSettings();

  function openProject(projectId) {
    playSound('click');
    openWindow({ type: 'project', projectId });
  }

  function openSection(type) {
    playSound('click');
    openWindow({ type });
  }

  return (
    <div className="workspace">
      <div className="workspace-hint">old computer workspace</div>

      <div className="workspace-row">
        <section className="work-tile" aria-label="Work">
          <h2 className="work-tile-heading">Work</h2>
          {/* Mapping over `projects` from data/projects.js is what makes this
              section data-driven — adding a project there is enough to make
              a new card show up here, no changes needed in this file. */}
          <div className="work-scroll">
            {projects.map((project) => (
              <ProjectPreviewCard
                key={project.id}
                project={project}
                onClick={() => openProject(project.id)}
              />
            ))}
          </div>
        </section>

        <div className="app-tile-group">
          <AppTile label="About" hint="who-i-am.txt" onClick={() => openSection('about')} />
          <AppTile label="Experience" hint="folder" onClick={() => openSection('experience')} />
          <AppTile label="Learning" hint="rabbit hole.exe" onClick={() => openSection('learning')} />
        </div>
      </div>
    </div>
  );
}
