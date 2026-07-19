import { currentlyItems, lastUpdated } from '../../data/currently';

// Turns the raw 'YYYY-MM-DD' from data/currently.js into 'Jul 18' (no year —
// this sits right next to the heading, so it stays short and subtle).
// Appending 'T00:00:00' makes the Date parse in the visitor's local
// timezone instead of UTC, so the day doesn't shift backward for anyone
// west of UTC.
function formatUpdatedDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Top-right "Currently" sidebar. Reads from data/currently.js — update that
// file to change what shows here, or when it was last touched; this
// component never needs editing.
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
        <time className="currently-updated" dateTime={lastUpdated}>
          Updated {formatUpdatedDate(lastUpdated)}
        </time>
      </div>

      <ul className="currently-list">
        {currentlyItems.map((item) => {
          // Each widget is title (small category) + heading (the prominent
          // line) + description (one supporting line) — see the shape
          // documented at the top of data/currently.js.
          const widgetBody = (
            <>
              <span className="currently-item-title">{item.title}</span>
              <h3 className="currently-item-heading">{item.heading}</h3>
              <p className="currently-item-description">{item.description}</p>
            </>
          );

          return (
            <li key={item.id} className="currently-widget">
              {/* Only widgets with a `link` in the data file become
                  clickable — both variants share `.currently-widget-inner`
                  so the layout is identical either way. */}
              {item.link ? (
                <a className="currently-widget-inner" href={item.link} target="_blank" rel="noopener noreferrer">
                  {widgetBody}
                </a>
              ) : (
                <div className="currently-widget-inner">{widgetBody}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}