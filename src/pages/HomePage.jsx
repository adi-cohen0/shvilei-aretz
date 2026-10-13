import { Link } from 'react-router-dom';
import { SITE_NAME } from '../config.js';
import { TRIPS } from '../data/trips.js';
import { CATEGORIES } from '../data/categories.js';
import { getTopTrips } from '../utils/trips.js';
import CategoryCard from '../components/CategoryCard.jsx';
import TripCard from '../components/TripCard.jsx';

export default function HomePage() {
  const topTrips = getTopTrips(TRIPS, 3);
  return (
    <div>
      <section className="hero">
        <div className="hero-icon">🌿</div>
        <h1 className="hero-title">ברוכים הבאים ל{SITE_NAME}</h1>
        <p className="hero-text">מסלולי טיול, שמורות טבע ונופים מרהיבים בכל רחבי הארץ. בחרו מסלול ויוצאים לדרך.</p>
        <Link to="/trips" className="btn-primary">לכל המסלולים</Link>
      </section>

      <section className="section">
        <h2 className="section-title">איזה טיול מתאים לכם?</h2>
        <div className="grid-3">
          {CATEGORIES.map((c) => <CategoryCard key={c.key} category={c} />)}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">המסלולים האהובים ביותר</h2>
        <div className="grid-3">
          {topTrips.map((t) => <TripCard key={t.id} trip={t} />)}
        </div>
      </section>
    </div>
  );
}
