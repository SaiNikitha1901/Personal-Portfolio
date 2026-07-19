import { createContext, useContext, useState, useCallback, useRef } from 'react';

// ============================================================================
// SoundContext
// ============================================================================
// Handles the site's small retro click/open/close sound effects.
//
// IMPORTANT — no sound files ship with this project. Drop real .mp3 files
// into the public/sounds/ folder using the exact names below and playback
// starts working immediately, no code changes needed. See public/sounds
// for the full list. Until you add files, playSound() just fails quietly
// (see the .catch() below) instead of throwing errors.
//
// Sound is OFF by default (muted = true) and only ever plays after the
// visitor explicitly turns it on via the toggle in the corner — this
// project intentionally never autoplays audio.
// ============================================================================

const SOUND_FILES = {
  click: '/sounds/click.mp3',
  open: '/sounds/open.mp3',
  close: '/sounds/close.mp3',
  hover: '/sounds/hover.mp3',
};

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(true);

  // One cached <audio> element per sound so we're not creating a new Audio
  // object (and a new network request) on every single click.
  const audioCache = useRef({});

  const toggleMute = useCallback(() => setMuted((prev) => !prev), []);

  const playSound = useCallback(
    (name) => {
      if (muted) return;
      const src = SOUND_FILES[name];
      if (!src) return;

      if (!audioCache.current[name]) {
        audioCache.current[name] = new Audio(src);
      }
      const audio = audioCache.current[name];
      audio.currentTime = 0;
      // play() rejects if the file is missing (which it is, until you add
      // one) — we swallow that instead of letting it surface as an error.
      audio.play().catch(() => {});
    },
    [muted]
  );

  return (
    <SoundContext.Provider value={{ muted, toggleMute, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundSettings() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundSettings must be used inside a SoundProvider');
  }
  return context;
}
