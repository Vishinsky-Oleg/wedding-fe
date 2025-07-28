// hooks/useIntersectionObserverOnce.ts

import { type RefObject, useEffect, useState } from 'react';

export const useIntersectionObserverOnce = (
  elementRef: RefObject<HTMLDivElement | null>,
  options: IntersectionObserverInit = {}
): boolean => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return; // Если уже анимировали — не наблюдаем

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true);
        observer.unobserve(entry.target); // Прекращаем наблюдение
      }
    }, options);

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options, hasAnimated]);

  return hasAnimated;
};
