import { useState, useEffect } from 'react';

export default function useScrollShadow(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return isScrolled;
}
