import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{siteConfig.parishFullName.replace('Paróquia ', 'Paróquia ').split(' de ')[0]}</h3>
            <p>{siteConfig.tagline}</p>
          </div>
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Siga-nos</h3>
            <div className="footer-social-links">
              {siteConfig.socialLinks.map((social) => (
                <a key={social.label} href={social.url} className="footer-social-link" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
