import './PixelAvatar.css';


// A simple placeholder avatar built from a handful of flat-colored
// rectangles — intentionally blocky/pixel-style rather than a real photo
// (see brief section 8: "do not invent a photorealistic image of me").
//
// TO REPLACE WITH REAL ART: delete everything in the <svg> below and
// either paste in your own SVG, or swap this whole component for
// <img src="/images/avatar.png" alt="Nikitha" /> once you have a real
// pixel-art avatar in public/images/.
export default function PixelAvatar() {
  return (
    // <svg
    //   className="pixel-avatar"
    //   viewBox="0 0 100 120"
    //   role="img"
    //   aria-label="Placeholder pixel-art avatar"
    // >
    //   {/* shoulders / shirt */}
    //   <rect x="10" y="92" width="80" height="28" fill="var(--color-green)" />
    //   {/* neck */}
    //   <rect x="40" y="80" width="20" height="16" fill="#caa07a" />
    //   {/* hair block, sits behind the face rect so it frames it like a fringe */}
    //   <rect x="20" y="14" width="60" height="60" fill="var(--color-chrome)" />
    //   {/* face */}
    //   <rect x="28" y="30" width="44" height="46" fill="#caa07a" />
    //   {/* eyes */}
    //   <rect x="38" y="50" width="8" height="8" fill="var(--color-ink)" />
    //   <rect x="54" y="50" width="8" height="8" fill="var(--color-ink)" />
    //   {/* mouth */}
    //   <rect x="42" y="66" width="16" height="4" fill="var(--color-magenta)" />
    
    // </svg>
    <img
    
    src="/images/avatar.png"
    alt="Pixel portrait of Nikitha"
    className="pixel-avatar"
  />
  );
}
