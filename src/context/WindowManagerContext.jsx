import { createContext, useContext, useState, useCallback, useEffect } from 'react';

// ============================================================================
// WindowManagerContext
// ============================================================================
// The whole site is one Desktop with "app windows" (About / Experience /
// Learning / a Project) that open on top of it. We only ever let ONE window
// be open at a time — that keeps the overlay/backdrop/z-index logic simple,
// and matches how the wireframes show it working.
//
// `activeWindow` is either null (nothing open) or a small descriptor object,
// e.g. { type: 'about' } or { type: 'project', projectId: 'thread' }.
// Components read `activeWindow` to decide what to render, and call
// `openWindow` / `closeWindow` to change it.
// ============================================================================

const WindowManagerContext = createContext(null);

export function WindowManagerProvider({ children }) {
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = useCallback((windowDescriptor) => {
    setActiveWindow(windowDescriptor);
  }, []);

  const closeWindow = useCallback(() => {
    setActiveWindow(null);
  }, []);

  // Let visitors close the open window with Escape — a small usability
  // touch that's essentially free to add.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') closeWindow();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeWindow]);

  // Lock the Desktop from scrolling behind an open window, so the "faint
  // background" effect doesn't jump around while someone reads a window.
  useEffect(() => {
    document.body.style.overflow = activeWindow ? 'hidden' : '';
  }, [activeWindow]);

  return (
    <WindowManagerContext.Provider value={{ activeWindow, openWindow, closeWindow }}>
      {children}
    </WindowManagerContext.Provider>
  );
}

// Custom hook so components just call useWindowManager() instead of
// importing useContext + WindowManagerContext everywhere.
export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used inside a WindowManagerProvider');
  }
  return context;
}
