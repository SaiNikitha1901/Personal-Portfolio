import { WindowManagerProvider, useWindowManager } from './context/WindowManagerContext';
import { SoundProvider } from './context/SoundContext';
import Desktop from './components/Desktop/Desktop';
import ProjectWindow from './components/ProjectWindow/ProjectWindow';
import AboutWindow from './components/AboutWindow/AboutWindow';
import ExperienceWindow from './components/ExperienceWindow/ExperienceWindow';
import RabbitHoleWindow from './components/RabbitHoleWindow/RabbitHoleWindow';
import SoundToggle from './components/shared/SoundToggle';

// Renders whichever overlay window is currently active, based on
// WindowManagerContext's `activeWindow` descriptor. This is the ONE place
// in the app that knows about all four window types — every tile/card
// elsewhere just calls openWindow({ type: ... }) and doesn't need to know
// how its target window actually renders.
function ActiveWindow() {
  const { activeWindow, closeWindow } = useWindowManager();
  if (!activeWindow) return null;

  switch (activeWindow.type) {
    case 'project':
      return <ProjectWindow projectId={activeWindow.projectId} onClose={closeWindow} />;
    case 'about':
      return <AboutWindow onClose={closeWindow} />;
    case 'experience':
      return <ExperienceWindow onClose={closeWindow} />;
    case 'learning':
      return <RabbitHoleWindow onClose={closeWindow} />;
    default:
      return null;
  }
}

export default function App() {
  return (
    <SoundProvider>
      <WindowManagerProvider>
        <SoundToggle />
        <Desktop />
        <ActiveWindow />
      </WindowManagerProvider>
    </SoundProvider>
  );
}
