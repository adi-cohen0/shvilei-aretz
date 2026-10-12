export const DIFFICULTY_LABELS = {
  easy: 'קלה',
  medium: 'בינונית',
  hard: 'קשה',
};

export const ROUTE_LABELS = {
  circular: 'מעגלי',
  linear: 'קווי',
};

export function filterTrips(trips, filters = {}) {
  const { category, region, difficulty, maxHours } = filters;
  const hoursLimit = maxHours === '' || maxHours === undefined ? null : Number(maxHours);

  return trips.filter((trip) => {
    if (category && !trip.categories.includes(category)) return false;
    if (region && trip.region !== region) return false;
    if (difficulty && trip.difficulty !== difficulty) return false;
    if (hoursLimit !== null && trip.durationHours > hoursLimit) return false;
    return true;
  });
}

export function getTripById(trips, id) {
  return trips.find((trip) => trip.id === id);
}

export function getRegions(trips) {
  return [...new Set(trips.map((trip) => trip.region))].sort((a, b) => a.localeCompare(b, 'he'));
}

export function formatDuration(hours) {
  if (hours === 0.5) return 'חצי שעה';
  if (hours === 1) return 'שעה';
  if (hours === 1.5) return 'שעה וחצי';
  if (hours === 2) return 'שעתיים';
  if (Number.isInteger(hours)) return `${hours} שעות`;
  return `${Math.floor(hours)} וחצי שעות`;
}

export function getTopTrips(trips, count = 3) {
  return [...trips].sort((a, b) => b.baseLikes - a.baseLikes).slice(0, count);
}