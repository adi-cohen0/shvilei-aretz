import { useState } from 'react';
import { TRIPS } from '../data/trips.js';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tripId, setTripId] = useState('');
  const [people, setPeople] = useState(1);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="message-box">
        <div className="message-icon">🎉</div>
        <h1 className="message-title">תודה, {name}!</h1>
        <p className="message-text">נרשמתם בהצלחה. נחזור אליכם למייל {email} עם כל הפרטים.</p>
      </div>
    );
  }

  return (
    <div className="form-page">
      <h1 className="page-title-spaced">הרשמה לטיול</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <div>
          <label className="field-label">שם מלא</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">אימייל</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">איזה מסלול?</label>
          <select required value={tripId} onChange={(e) => setTripId(e.target.value)} className="field-input">
            <option value="">בחרו מסלול</option>
            {TRIPS.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
        <div>
          <label className="field-label">מספר משתתפים</label>
          <input type="number" min="1" max="20" value={people} onChange={(e) => setPeople(e.target.value)} className="field-input" />
        </div>
        <button type="submit" className="btn-submit">שליחה</button>
      </form>
    </div>
  );
}
