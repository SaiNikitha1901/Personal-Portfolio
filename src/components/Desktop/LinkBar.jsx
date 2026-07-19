import { socialLinks } from '../../data/social';
import { useSoundSettings } from '../../context/SoundContext';

// Bottom bar of the homepage. Deliberately plain text links styled to feel
// part of the desktop, rather than a generic modern navbar — update the
// actual URLs in data/social.js.
export default function LinkBar() {
  const { playSound } = useSoundSettings();

  const links = [
    { label: 'LinkedIn', href: socialLinks.linkedin },
    { label: 'GitHub', href: socialLinks.github },
    { label: 'Email', href: socialLinks.email },
    { label: 'Resume', href: socialLinks.resume },
  ];

  return (
    <nav className="link-bar" aria-label="Contact and resume links">
      {links.map((link, index) => (
        <span key={link.label} className="link-bar-item">
          <a
            href={link.href}
            onClick={() => playSound('click')}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
          {index < links.length - 1 && (
            <span className="link-bar-divider" aria-hidden="true">
              |
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
