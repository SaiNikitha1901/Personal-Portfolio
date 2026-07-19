// Reusable tile for the About / Experience / Learning entry points on the
// homepage. Same component, three different labels/hints/onClick handlers —
// this is what the brief means by "reusable components where appropriate".
export default function AppTile({ label, hint, onClick }) {
  return (
    <button className="app-tile" onClick={onClick}>
      <span className="app-tile-label">{label}</span>
      {hint && <span className="app-tile-hint">{hint}</span>}
    </button>
  );
}
