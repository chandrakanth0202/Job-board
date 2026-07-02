import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="brand">
          <span className="brand-mark">AH</span>
          <span className="brand-name">Afterhours</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Browse jobs
          </Link>
        </nav>
      </div>
    </header>
  );
}
