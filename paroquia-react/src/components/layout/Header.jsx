import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useScrollShadow from '../../hooks/useScrollShadow';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollShadow();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="header-logo">
              <span className="header-cross-icon">{siteConfig.crossIcon}</span>
              <span className="header-church-name">{siteConfig.parishName}</span>
            </Link>
            <button
              className={`mobile-menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
