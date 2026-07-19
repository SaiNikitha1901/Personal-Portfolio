import { currentlyItems, lastUpdated } from '../../data/currently';

// Top-right "Currently..." widgets. Reads from data/currently.js — update
// that file to change what shows here, this component never needs editing.

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function CurrentlyPanel() {
  return (
    <div className="currently-panel">
      <div className="currently-heading">
        <div className="currently-heading-left">
          <h2>Currently</h2>

          <span className="pixel-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>

        <span className="currently-updated">
          Updated {formatDate(lastUpdated)}
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
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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