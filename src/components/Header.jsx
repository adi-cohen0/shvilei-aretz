import { Link } from 'react-router-dom';
import { SITE_NAME, NAV_LINKS } from '../config.js';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo"><span>🌿</span><span>{SITE_NAME}</span></Link>
        <nav className="nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
