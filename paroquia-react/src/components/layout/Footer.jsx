import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import siteConfig from '../../data/siteConfig.json';

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 text-white"
      style={{ background: 'linear-gradient(160deg, #1a2332 0%, #2c3e50 100%)' }}
    >
      {/* Top gradient stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-light to-accent" />

      <div className="container">
        <div className="grid gap-16 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl text-accent-light mb-4 tracking-wide">
              {siteConfig.parishFullName.split(' de ')[0]}
            </h3>
            <p className="text-white/75 leading-[1.7]">{siteConfig.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-xl text-accent-light mb-4 tracking-wide">Links Rápidos</h3>
            <ul className="list-none space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/75 no-underline inline-block transition-all duration-300 hover:text-accent-light hover:pl-1.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-xl text-accent-light mb-4 tracking-wide">Siga-nos</h3>
            <div className="flex gap-4">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-[1.3rem] no-underline w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/8 transition-all duration-300 hover:bg-accent hover:scale-110 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/8 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
