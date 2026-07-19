import { useEffect, useRef } from 'react';
import './Rabbit.css';

// ============================================================================
// Rabbit — acts as a custom cursor inside Rabbit hole.exe only.
// ============================================================================
// It used to hop between portals on its own; now it just follows the
// visitor's mouse instead, standing in for the real cursor while they're
// inside the portal field (RabbitHoleWindow.jsx passes `containerRef`,
// which points at `.rabbit-hole-field` — that element has `cursor: none`
// in RabbitHoleWindow.css, which is what actually hides the real cursor;
// this component just draws the rabbit in its place).
//
// We track the mouse with a ref + direct DOM style writes instead of React
// state. Mousemove can fire dozens of times a second, and running a
// re-render on every single one is wasted work for something as simple as
// "move this element" — writing straight to rabbitRef.current.style is the
// "lightweight" approach the brief asks for.
export default function Rabbit({ containerRef }) {
  const rabbitRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const rabbit = rabbitRef.current;
    if (!container || !rabbit) return;

    // Moves the rabbit sprite to the cursor's position, measured relative
    // to the field (not the whole page) — that's what getBoundingClientRect
    // is for here.
    function handleMouseMove(event) {
      const bounds = container.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      rabbit.style.left = `${x}px`;
      rabbit.style.top = `${y}px`;
      rabbit.style.opacity = '1';
    }

    // The rabbit fades out the moment the mouse leaves the field. Combined
    // with `cursor: none` only being set on the field itself (not the
    // whole window), this is what makes the normal cursor "come back"
    // automatically as soon as you move outside the portal area — no
    // manual cleanup needed, it's just CSS scoped to one element.
    function handleMouseLeave() {
      rabbit.style.opacity = '0';
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  // aria-hidden because this is a decorative cursor stand-in, not real
  // content. pointer-events: none (see Rabbit.css) is what stops it from
  // ever intercepting clicks meant for the portal underneath it.
  return (
    <div ref={rabbitRef} className="rabbit" aria-hidden="true">
      <svg viewBox="0 0 40 30" className="rabbit-svg">
        {/* ears */}
        <rect x="10" y="2" width="5" height="12" fill="#fff" stroke="var(--color-chrome)" strokeWidth="1" />
        <rect x="11.5" y="4" width="2" height="8" fill="var(--color-magenta)" />
        <rect x="19" y="2" width="5" height="12" fill="#fff" stroke="var(--color-chrome)" strokeWidth="1" />
        <rect x="20.5" y="4" width="2" height="8" fill="var(--color-magenta)" />
        {/* body */}
        <rect x="6" y="12" width="22" height="14" fill="#fff" stroke="var(--color-chrome)" strokeWidth="1" />
        {/* eye */}
        <rect x="22" y="17" width="3" height="3" fill="var(--color-ink)" />
        {/* carrot */}
        <rect x="33" y="10" width="3" height="5" fill="var(--color-green)" />
        <rect x="33" y="15" width="4" height="10" fill="var(--color-amber)" stroke="var(--color-chrome)" strokeWidth="1" />
      </svg>
    </div>
  );
}
