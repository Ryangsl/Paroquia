import { useState, useRef, useEffect, useCallback } from 'react';

export default function useCarousel(itemCount) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || itemCount === 0) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const slideWidth = scrollWidth / itemCount;
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(Math.min(index, itemCount - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [itemCount]);

  const goTo = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const slideWidth = container.scrollWidth / itemCount;
    container.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  }, [itemCount]);

  const goNext = useCallback(() => {
    if (activeIndex < itemCount - 1) goTo(activeIndex + 1);
  }, [activeIndex, itemCount, goTo]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  return { scrollRef, activeIndex, goTo, goNext, goPrev };
}
