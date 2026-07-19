import './Tag.css';

// Small colored pill used for project type/status, award periods, etc.
// `tone` maps to one of the three accent colors defined in tokens.css —
// pick whichever reads correctly for the meaning (see Tag.css).
export default function Tag({ children, tone = 'neutral' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}
