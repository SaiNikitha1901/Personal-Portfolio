import { useSoundSettings } from '../../context/SoundContext';
import './SoundToggle.css';

// Fixed-position mute toggle, always visible (even over an open window) so
// there's never a moment where sound could play without an obvious way to
// turn it off. Sound defaults to OFF — see SoundContext.jsx.
export default function SoundToggle() {
  const { muted, toggleMute } = useSoundSettings();

  return (
    <button
      className="sound-toggle"
      onClick={toggleMute}
      aria-pressed={!muted}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
    >
      SOUND: {muted ? 'OFF' : 'ON'}
    </button>
  );
}
