import { Link } from 'react-router-dom';
import { DIFFICULTY_LABELS } from '../utils/trips.js';

export default function TripCard({ trip }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
              {trip.region}
            </span>
            <span className="text-sm text-slate-500">
              {DIFFICULTY_LABELS[trip.difficulty]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{trip.name}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{trip.summary}</p>
        </div>
        
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs text-slate-500">
            ⏱️ {trip.durationHours} שעות | 📏 {trip.lengthKm} ק"מ
          </span>
          <Link
            to={`/trips/${trip.id}`}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            לפרטים מלאים ←
          </Link>
        </div>
      </div>
    </div>
  );
}