import { useEffect, useCallback } from 'react';
import { useSoundSettings } from '../../context/SoundContext';
import './Window.css';

// ============================================================================
// Window
// ============================================================================
// The shared "app chrome" used by every overlay in the site (About /
// Experience / Learning / a Project). It owns the dimmed backdrop over the
// Desktop, the title bar (pixel dots + title + close button), an optional
// decorative menu bar, and the open/close sound effect — so every individual
// window just has to pass its own content as `children`.
// ============================================================================
export default function Window({
  title,
  onClose,
  children,
  menuItems, // optional array of strings, e.g. ['File', 'Edit', 'View', 'Help']
  size = 'medium', // 'medium' | 'large' — controls max width, see Window.css
}) {
  const { playSound } = useSoundSettings();

  // Play the "open" sound once, the moment this window appears.
  useEffect(() => {
    playSound('open');
    // We only want this on mount, not every time playSound identity changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => {
    playSound('close');
    onClose();
  }, [onClose, playSound]);

  // Clicking the dimmed backdrop (but not the window itself) closes it —
  // the behaviour people expect from any overlay/modal.
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) handleClose();
  }

  return (
    <div className="window-backdrop" onClick={handleBackdropClick}>
      <div className={`window window--${size}`} role="dialog" aria-modal="true" aria-label={title}>
        <div className="window-titlebar">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">{title}</span>
          <button className="window-close" onClick={handleClose} aria-label="Close window">
            ×
          </button>
        </div>

        {/* Decorative menu bar — visual reference to old creative apps.
            Not wired to real dropdown menus for V1 (see brief, section 8). */}
        {menuItems && (
          <div className="window-menubar" aria-hidden="true">
            {menuItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        <div className="window-content">{children}</div>
      </div>
    </div>
  );
}
