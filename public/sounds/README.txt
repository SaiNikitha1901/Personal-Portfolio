This folder intentionally ships empty.

Drop real .mp3 files in here using these exact names to make the site's
click/open/close sounds work — no code changes needed:

  click.mp3   — general button/tile clicks
  hover.mp3   — optional hover sound (not wired to anything by default)
  open.mp3    — plays when any window opens
  close.mp3   — plays when any window closes

See src/context/SoundContext.jsx for how these are loaded, and the main
README.md ("Adding sound") for more detail.
