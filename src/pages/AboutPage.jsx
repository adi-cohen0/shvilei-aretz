import { SITE_NAME } from '../config.js';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="page-title-spaced">אודות {SITE_NAME}</h1>
      <div className="about-card">
        <p>{SITE_NAME} הוא אתר שמרכז מסלולי טיול ושמורות טבע בכל רחבי הארץ, כדי שיהיה קל למצוא את הטיול הבא שלכם.</p>
        <p>לכל מסלול מופיעים הפרטים החשובים: משך הטיול, רמת הקושי, האם מותר להדליק אש, איפה להחנות ומה כדאי להביא.</p>
        <p>האתר מיועד לכולם: מיטיבי לכת, משפחות עם ילדים, ומטיילים שזקוקים למסלולים נגישים.</p>
      </div>
    </div>
  );
}
