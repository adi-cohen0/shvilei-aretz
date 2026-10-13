// לוגיקה בלבד. הצבעים נמצאים ב-styles/base.css (tone-clay וכו')
export const DIFFICULTY_LABELS = { easy: 'קלה', medium: 'בינונית', hard: 'קשה' };
export const ROUTE_LABELS = { circular: 'מעגלי', linear: 'קווי' };

export function getTripById(trips, id) {
  return trips.find((trip) => trip.id === id);
}

export function getTopTrips(trips, count = 3) {
  return [...trips].sort((a, b) => b.baseLikes - a.baseLikes).slice(0, count);
}

export function formatDuration(hours) {
  if (hours === 1) return 'שעה';
  if (hours === 2) return 'שעתיים';
  return `${hours} שעות`;
}
