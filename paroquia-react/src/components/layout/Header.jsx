import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useScrollShadow from '../../hooks/useScrollShadow';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollShadow();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header
      className={[
        'fixed w-full top-0 z-[1000] border-b-2 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-[var(--shadow-md)] border-accent backdrop-blur-[12px]'
          : 'bg-white/85 backdrop-blur-[12px] border-transparent shadow-[var(--shadow-sm)]',
      ].join(' ')}
    >
      <nav className="py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-ink no-underline hover:opacity-85 transition-opacity duration-300"
            >
              <span
                className="text-accent text-[2rem] transition-transform duration-500"
                style={{ display: 'inline-block' }}
              >
                {siteConfig.crossIcon}
              </span>
              <span className="font-heading">{siteConfig.parishName}</span>
            </Link>

            {/* Mobile toggle */}
            <button
              className={`md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 items-center justify-center w-9 h-9 ${isMenuOpen ? 'menu-open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>

            {/* Nav menu */}
            <ul
              className={[
                'list-none flex gap-2',
                'max-md:absolute max-md:top-full max-md:left-0 max-md:right-0',
                'max-md:flex-col max-md:px-8 max-md:py-4',
                'max-md:bg-white/97 max-md:backdrop-blur-[16px]',
                'max-md:shadow-[var(--shadow-lg)] max-md:border-b-2 max-md:border-accent-light',
                'max-md:transition-all max-md:duration-300',
                isMenuOpen
                  ? 'max-md:opacity-100 max-md:translate-y-0 max-md:visible max-md:pointer-events-auto'
                  : 'max-md:opacity-0 max-md:-translate-y-2 max-md:invisible max-md:pointer-events-none',
              ].join(' ')}
            >
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      [
                        'nav-link-line no-underline font-medium text-[0.95rem] transition-colors duration-300',
                        'px-4 py-2 rounded-sm block',
                        'max-md:rounded-md max-md:w-full',
                        isActive
                          ? 'text-accent font-semibold nav-link-active max-md:bg-[rgba(201,162,39,0.1)] max-md:border-l-[3px] max-md:border-accent'
                          : 'text-ink hover:text-accent max-md:hover:bg-[rgba(201,162,39,0.08)]',
                      ].join(' ')
                    }
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
