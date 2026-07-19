import { useState } from 'react';
import Window from '../Window/Window';
import PixelAvatar from './PixelAvatar';
import './AboutWindow.css';

// Purely decorative color swatches at the bottom, echoing the "Outfit of
// the Day" style image-editor reference. Not wired to anything for V1
// (see brief section 8: "the controls can mostly be decorative").
const PALETTE_SIZE = 6;

// Future-expansion tabs. Clicking one reveals a small "coming soon" note —
// enough interactivity to not feel broken, without building out real
// content sections for them yet.
const SIDE_TABS = ['Side quests', 'Travel', 'Movies', 'Music'];

export default function AboutWindow({ onClose }) {
  const [openTab, setOpenTab] = useState(null);

  return (
    <Window
      title="About — who-i-am.txt"
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Help']}
      size="medium"
    >
      <PixelAvatar />

      <div className="about-bio">
        <p>I'm Nikitha. I study Computer Science (AI &amp; ML) at PES University.</p>
        <p>
          I'm the kind of person who asks "but why does it work like that?" and then
          occasionally falls down a three-hour rabbit hole trying to find out.
        </p>
        <p>
          I'm currently figuring out how to build things I actually want to use, how to
          navigate software engineering in an AI-everywhere world, and generally what
          kind of engineer I want to become.
        </p>
        <p>
          Outside my laptop, you'll probably find me singing, dancing badly/greatly with
          my friends, or trying another cafe.
        </p>
      </div>

      <div className="about-footer">
        <div className="about-palette" aria-hidden="true">
          {Array.from({ length: PALETTE_SIZE }).map((_, i) => (
            <span key={i} className={`about-swatch about-swatch--${i % 3}`} />
          ))}
        </div>

        <div className="about-tabs">
          {SIDE_TABS.map((tab) => (
            <button
              key={tab}
              className={`about-tab ${openTab === tab ? 'about-tab--active' : ''}`}
              onClick={() => setOpenTab(openTab === tab ? null : tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {openTab && <p className="about-tab-note">{openTab} — coming soon.</p>}
    </Window>
  );
}
