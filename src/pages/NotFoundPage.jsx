import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="message-box">
      <div className="message-icon">🧭</div>
      <h1 className="message-title">הדף לא נמצא</h1>
      <p className="message-text">נראה שהלכתם לאיבוד בדרך. בואו נחזור לשביל.</p>
      <Link to="/" className="btn-primary">חזרה לדף הבית</Link>
    </div>
  );
}
