import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ variant = 'primary', href, onClick, type, children, className = '' }) {
  const cls = `btn btn-${variant} ${className}`;

  if (href) {
    return <Link to={href} className={cls}>{children}</Link>;
  }

  return <button type={type || 'button'} onClick={onClick} className={cls}>{children}</button>;
}
