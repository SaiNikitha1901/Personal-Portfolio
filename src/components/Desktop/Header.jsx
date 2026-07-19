// Top-left of the homepage: name + short intro. Static content on purpose —
// this is the one part of the site that basically never changes, so it
// doesn't need its own data file (compare to CurrentlyPanel, which does).
export default function Header() {
  return (
    <div className="desktop-header">
      <h1 className="desktop-name">Nikitha</h1>
      <p className="desktop-intro">
        Hi, I'm Nikitha — a Computer Science (AI &amp; ML) student who likes
        figuring out how things work, and building things I'd actually want
        to use.
      </p>
    </div>
  );
}
