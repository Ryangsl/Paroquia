import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>{siteConfig.parishFullName.replace('Paróquia ', 'Paróquia ').split(' de ')[0]}</h3>
            <p>{siteConfig.tagline}</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul className={styles.footerLinks}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Siga-nos</h3>
            <div className={styles.socialLinks}>
              {siteConfig.socialLinks.map((social) => (
                <a key={social.label} href={social.url} className={styles.socialLink} aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
