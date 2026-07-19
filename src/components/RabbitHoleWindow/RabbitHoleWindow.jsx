import { useRef, useState } from 'react';
import Window from '../Window/Window';
import PortalNode from './PortalNode';
import Rabbit from './Rabbit';
import TopicPopup from './TopicPopup';
import { learningTopics } from '../../data/learning';
import './RabbitHoleWindow.css';

export default function RabbitHoleWindow({ onClose }) {
  // Which topic's popup is open, by id. null = none open.
  const [activeTopicId, setActiveTopicId] = useState(null);
  const activeTopic = learningTopics.find((t) => t.id === activeTopicId);

  // The rabbit now acts as a custom cursor that follows the mouse instead
  // of hopping on its own — it needs this ref to measure mouse position
  // relative to the field (see Rabbit.jsx, and `cursor: none` on
  // .rabbit-hole-field in RabbitHoleWindow.css, which hides the real cursor
  // here only).
  const fieldRef = useRef(null);

  return (
    <Window title="Rabbit hole.exe" onClose={onClose} size="large">
      <p className="rabbit-hole-intro">
        Things I fell into while trying to understand how stuff works.
      </p>

      {/* `rabbit-hole-field` is a relatively-positioned box; every portal is
          absolutely positioned inside it using the x/y percentages from
          data/learning.js. */}
      <div className="rabbit-hole-field" ref={fieldRef}>
        {learningTopics.map((topic) => (
          <PortalNode
            key={topic.id}
            topic={topic}
            isActive={activeTopicId === topic.id}
            onClick={() => setActiveTopicId(activeTopicId === topic.id ? null : topic.id)}
          />
        ))}
        <Rabbit containerRef={fieldRef} />
      </div>

      {activeTopic && (
        <TopicPopup topic={activeTopic} onClose={() => setActiveTopicId(null)} />
      )}
    </Window>
  );
}
