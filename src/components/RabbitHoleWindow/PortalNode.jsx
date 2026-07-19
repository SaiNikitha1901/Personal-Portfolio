import './PortalNode.css';

// One "black hole" / portal in the Rabbit hole field. Position comes from
// data/learning.js so new topics just need a free x/y percentage — no
// layout code to touch.
export default function PortalNode({ topic, isActive, onClick }) {
  return (
    <button
      className={`portal-node ${isActive ? 'portal-node--active' : ''}`}
      style={{ left: topic.position.x, top: topic.position.y }}
      onClick={onClick}
      aria-label={`${topic.label} — ${topic.status}`}
    >
      {/* A near-black circle with a soft purple glow and a slow inner
          swirl — see PortalNode.css for the gradient/animation doing the
          work. */}
      <span className="portal-node-hole" aria-hidden="true" />
      <span className="portal-node-label">{topic.label}</span>
    </button>
  );
}
