import { Link } from 'react-router-dom';
import { SITE_NAME, CONTACT_EMAIL } from '../config.js';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-right">
          <h3 className="text-white font-bold text-lg mb-1">{SITE_NAME}</h3>
          <p className="text-sm text-slate-400">יוצאים לטבע, מגלים מקומות חדשים ויוצרים חוויות.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition-colors">דף הבית</Link>
          <Link to="/trips" className="hover:text-white transition-colors">כל המסלולים</Link>
          <Link to="/register" className="hover:text-white transition-colors">הרשמה לטיול</Link>
          <Link to="/about" className="hover:text-white transition-colors">אודות</Link>
        </div>
        
        <div className="text-xs text-slate-500">
          לתמיכה ופניות: {CONTACT_EMAIL}
        </div>
      </div>
    </footer>
  );
}
