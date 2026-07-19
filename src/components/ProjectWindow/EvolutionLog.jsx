import { useState } from 'react';
import MilestonePopup from './MilestonePopup';
import './EvolutionLog.css';

// How many milestone nodes sit in one row before the path turns and
// continues on the next row. Bump this up if you want wider rows.
const NODES_PER_ROW = 3;

// Splits a flat array into an array of arrays of size `size`.
// e.g. chunk([a,b,c,d,e], 3) -> [[a,b,c], [d,e]]
function chunk(array, size) {
  const rows = [];
  for (let i = 0; i < array.length; i += size) {
    rows.push(array.slice(i, i + size));
  }
  return rows;
}

// ============================================================================
// EvolutionLog
// ============================================================================
// Renders a project's milestones as a snake-like path: rows of nodes that
// alternate direction (left-to-right, then right-to-left, and so on), with
// a short connector between rows on whichever side continues the path.
//
// This is a deliberately simpler stand-in for a fully-generated SVG path —
// see the brief (section 7): "prioritize a clean, maintainable
// implementation over mathematically perfect complex path generation."
// Row direction just alternates with CSS (flex-direction: row-reverse on
// odd rows), so this scales to any number of entries without extra math.
// ============================================================================
export default function EvolutionLog({ entries }) {
  // Which milestone's popup is currently open, by index into `entries`.
  // null means no popup is open.
  const [activeIndex, setActiveIndex] = useState(null);

  if (!entries || entries.length === 0) {
    return <p className="evolution-empty">No milestones logged yet — check back soon.</p>;
  }

  const rows = chunk(entries, NODES_PER_ROW);

  return (
    <div className="evolution-log">
      {rows.map((row, rowIndex) => {
        const isReversed = rowIndex % 2 === 1;
        const rowStart = rowIndex * NODES_PER_ROW;
        const isLastRow = rowIndex === rows.length - 1;
        // Is the open popup's milestone inside THIS row? If so we render the
        // popup right after this row, which is what gives the "opens in
        // that place itself" feel from the wireframe without needing to
        // calculate exact pixel coordinates for the popup.
        const activeInThisRow =
          activeIndex !== null && activeIndex >= rowStart && activeIndex < rowStart + row.length;

        return (
          <div key={rowIndex} className="evolution-row-group">
            <div className={`evolution-row ${isReversed ? 'evolution-row--reversed' : ''}`}>
              {row.map((entry, colIndex) => {
                const globalIndex = rowStart + colIndex;
                const isActive = activeIndex === globalIndex;
                return (
                  <button
                    key={globalIndex}
                    className={`evolution-node ${isActive ? 'evolution-node--active' : ''}`}
                    onClick={() => setActiveIndex(isActive ? null : globalIndex)}
                  >
                    <span className="evolution-node-dot" />
                    <span className="evolution-node-date">{entry.date}</span>
                  </button>
                );
              })}
            </div>

            {/* Connector down to the next row, on the edge the path
                continues from — right after a normal row, left after a
                reversed one — so the whole thing reads as one continuous
                snake rather than separate disconnected rows. */}
            {!isLastRow && (
              <div
                className={`evolution-connector ${
                  isReversed ? 'evolution-connector--left' : 'evolution-connector--right'
                }`}
                aria-hidden="true"
              />
            )}

            {activeInThisRow && (
              <MilestonePopup entry={entries[activeIndex]} onClose={() => setActiveIndex(null)} />
            )}
          </div>
        );
      })}
    </div>
  );
}
