import { TRIPS } from '../data/trips.js';
import TripCard from '../components/TripCard.jsx';

export default function TripsPage() {
  return (
    <div className="page">
      <h1 className="page-title">כל המסלולים</h1>
      <p className="page-subtitle">בחרו מסלול כדי לראות את כל הפרטים</p>
      <div className="grid-trips">
        {TRIPS.map((t) => <TripCard key={t.id} trip={t} />)}
      </div>
    </div>
  );
}
