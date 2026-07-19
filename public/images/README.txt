This folder intentionally ships empty.

Drop project screenshots, an avatar, or any other real images in here, then
reference them by path (e.g. '/images/earth-fm-cover.png') in the relevant
data file:

  - Project card / project window visuals: the `image` field on a project
    in src/data/projects.js
  - Evolution Log milestone images: the `image` field on a milestone entry
    inside that project's evolutionLog array
  - About avatar: see src/components/AboutWindow/PixelAvatar.jsx — replace
    that component with an <img> tag pointing here once you have real art

See the main README.md ("Replacing placeholder art") for more detail.
