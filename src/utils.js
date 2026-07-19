// Small shared helpers used by more than one component. Keeping this as a
// plain function (not a hook, not a class) since there's no state involved —
// just a lookup.

// Maps a project/experience status string to one of the three accent tones
// defined in Tag.css, so "Completed" is always green, "In Progress" is
// always amber, etc. without repeating this logic in every component.
export function getStatusTone(status) {
  const normalized = (status || '').toLowerCase();
  if (normalized.includes('progress') || normalized.includes('falling')) return 'amber';
  if (normalized.includes('complete') || normalized.includes('deep')) return 'green';
  return 'neutral';
}
