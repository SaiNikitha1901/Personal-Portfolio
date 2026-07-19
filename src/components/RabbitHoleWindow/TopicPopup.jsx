// Small retro pop-up shown when a portal is clicked — mirrors
// MilestonePopup's shape/behaviour in ProjectWindow, since they're solving
// the same "click a node, see details" problem.
export default function TopicPopup({ topic, onClose }) {
  return (
    <div className="topic-popup">
      <div className="topic-popup-header">
        <span>{topic.label}</span>
        <button className="topic-popup-close" onClick={onClose} aria-label={`Close ${topic.label}`}>
          ×
        </button>
      </div>

      <span className="topic-popup-status">{topic.status}</span>

      <div className="topic-popup-section">
        <span className="topic-popup-label">Current focus</span>
        <p>{topic.currentFocus}</p>
      </div>

      {topic.resources.length > 0 && (
        <div className="topic-popup-section">
          <span className="topic-popup-label">Resources</span>
          <ul className="topic-popup-resources">
            {topic.resources.map((resource) => (
              <li key={resource.url}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
