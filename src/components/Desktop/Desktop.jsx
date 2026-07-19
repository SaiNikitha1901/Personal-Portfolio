import Header from './Header';
import CurrentlyPanel from './CurrentlyPanel';
import Workspace from './Workspace';
import LinkBar from './LinkBar';
import './Desktop.css';

// Desktop is the homepage — the persistent "workspace" that every other
// window opens on top of. It's just a composition of four smaller pieces;
// all the real logic lives in each of those.
export default function Desktop() {
  return (
    <main className="desktop">
      <div className="desktop-top">
        <Header />
        <CurrentlyPanel />
      </div>
      <Workspace />
      <LinkBar />
    </main>
  );
}
