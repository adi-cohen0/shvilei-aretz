import { Link, useParams } from 'react-router-dom';
import { TRIPS } from '../data/trips.js';
import { DIFFICULTY_LABELS, ROUTE_LABELS, getTripById } from '../utils/trips.js';

export default function TripDetailsPage() {
  const { id } = useParams();
  const trip = getTripById(TRIPS, id);

  if (!trip) {
    return (
      <div className="message-box">
        <h1 className="message-title">המסלול לא נמצא</h1>
        <Link to="/trips" className="link-green">← חזרה לכל המסלולים</Link>
      </div>
    );
  }

  const stats = [
    { label: 'רמת קושי', value: DIFFICULTY_LABELS[trip.difficulty] },
    { label: 'משך', value: `${trip.durationHours} שעות` },
    { label: 'אורך', value: `${trip.lengthKm} ק"מ` },
    { label: 'סוג מסלול', value: ROUTE_LABELS[trip.route] },
  ];

  return (
    <div className="details">
      <Link to="/trips" className="details-back">← חזרה לכל המסלולים</Link>

      <div className={`details-header tone-${trip.tone}`}>
        <div className="details-icon">🥾</div>
        <h1 className="details-title">{trip.name}</h1>
        <p>{trip.reserve} | {trip.region}</p>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <section className="panel">
        <h2 className="panel-title">על המסלול</h2>
        <p className="panel-text">{trip.description}</p>
      </section>

      <section className="panel">
        <h2 className="panel-title">מידע שימושי</h2>
        <ul className="info-list">
          <li>🔥 <strong>אש:</strong> {trip.fire.allowed ? 'מותר' : 'אסור'} – {trip.fire.note}</li>
          <li>💧 <strong>מים:</strong> {trip.water}</li>
          <li>🅿️ <strong>חניה:</strong> {trip.parking}</li>
          <li>♿ <strong>נגישות:</strong> {trip.accessibility}</li>
          <li>👨‍👩‍👧 <strong>מתאים לילדים:</strong> {trip.kidsFriendly ? 'כן' : 'לא'}</li>
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">מה להביא?</h2>
        <div className="chips">
          {trip.bring.map((item) => <span key={item} className="chip">{item}</span>)}
        </div>
      </section>

      <section className="warning">
        <h2 className="warning-title">⚠️ חשוב לדעת</h2>
        <ul className="warning-list">
          {trip.warnings.map((w) => <li key={w}>{w}</li>)}
        </ul>
      </section>

      <div className="center-action">
        <Link to="/register" className="btn-primary">להרשמה לטיול</Link>
      </div>
    </div>
  );
}
