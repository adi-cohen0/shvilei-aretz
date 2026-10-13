import { Link } from 'react-router-dom';
import { DIFFICULTY_LABELS } from '../utils/trips.js';

export default function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <div className={`trip-card-banner tone-${trip.tone}`}>🥾</div>
      <div className="trip-card-body">
        <div>
          <div className="trip-card-meta">
            <span className="badge">{trip.region}</span>
            <span className="trip-card-level">רמה: {DIFFICULTY_LABELS[trip.difficulty]}</span>
          </div>
          <h3 className="trip-card-title">{trip.name}</h3>
          <p className="trip-card-summary">{trip.summary}</p>
        </div>
        <div className="trip-card-footer">
          <span className="trip-card-stats">⏱️ {trip.durationHours} שעות | 📏 {trip.lengthKm} ק"מ</span>
          <Link to={`/trips/${trip.id}`} className="trip-card-link">לפרטים מלאים ←</Link>
        </div>
      </div>
    </div>
  );
}
