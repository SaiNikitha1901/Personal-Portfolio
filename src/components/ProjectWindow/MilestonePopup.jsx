// The small retro pop-up that appears when a milestone node is clicked,
// showing the date/title/image plus the "what happened" / "what I figured
// out" pair from the brief.
export default function MilestonePopup({ entry, onClose }) {
  return (
    <div className="milestone-popup">
      <div className="milestone-popup-header">
        <span>{entry.date}</span>
        <button className="milestone-popup-close" onClick={onClose} aria-label="Close milestone">
          ×
        </button>
      </div>

      <h4 className="milestone-popup-title">{entry.title}</h4>

      {entry.image ? (
        <img src={entry.image} alt="" className="milestone-popup-image" />
      ) : (
        <div
          className="milestone-popup-image milestone-popup-image--placeholder"
          aria-hidden="true"
        >
          screenshot / diagram
        </div>
      )}

      <div className="milestone-popup-section">
        <span className="milestone-popup-label">What happened</span>
        <p>{entry.whatHappened}</p>
      </div>

      <div className="milestone-popup-section">
        <span className="milestone-popup-label">What I figured out</span>
        <p>{entry.whatIFiguredOut}</p>
      </div>
    </div>
  );
}
