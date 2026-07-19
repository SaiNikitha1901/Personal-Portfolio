import { currentlyItems } from '../../data/currently';

// Top-right "Currently..." widgets. Reads from data/currently.js — update
// that file to change what shows here, this component never needs editing.
export default function CurrentlyPanel() {
  return (
    <div className="currently-panel">
      <div className="currently-heading">
        <h2>Currently</h2>
        {/* Small staggered-blink pixel dots — purely decorative, driven by
            animation-delay in Desktop.css. Safe to remove if it's too much. */}
        <span className="pixel-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>

      <ul className="currently-list">
        {currentlyItems.map((item) => {
          const widgetContent = (
            <>
              <span className="currently-label">{item.label}</span>
              <span className="currently-value">{item.value}</span>
            </>
          );

          return (
            <li key={item.id} className="currently-widget">
              {/* Only widgets with a `link` in the data file become clickable
                  (this is how the DSA widget links out to LeetCode). */}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {widgetContent}
                </a>
              ) : (
                widgetContent
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
