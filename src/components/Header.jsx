import { Link } from 'react-router-dom';
import { SITE_NAME } from '../config.js'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-emerald-700 flex items-center gap-2">
          <span>🌿</span>
          <span>{SITE_NAME}</span>
        </Link>
        
        <nav className="flex gap-6 text-slate-600 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">דף הבית</Link>
          <Link to="/trips" className="hover:text-emerald-600 transition-colors">כל המסלולים</Link>
          <Link to="/register" className="hover:text-emerald-600 transition-colors">הרשמה לטיול</Link>
          <Link to="/about" className="hover:text-emerald-600 transition-colors">אודות</Link>
        </nav>
      </div>
    </header>
  );
}