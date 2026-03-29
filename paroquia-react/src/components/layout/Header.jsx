import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useScrollShadow from '../../hooks/useScrollShadow';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollShadow();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navWrapper}>
            <Link to="/" className={styles.logo}>
              <span className={styles.crossIcon}>{siteConfig.crossIcon}</span>
              <span className={styles.churchName}>{siteConfig.parishName}</span>
            </Link>
            <button
              className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
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
