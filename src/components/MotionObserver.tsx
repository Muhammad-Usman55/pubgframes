'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');

    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    if (elements.length === 0) return;

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '120px 0px 120px 0px', threshold: 0.01 }
    );

    const immediateReveal: Element[] = [];
    const viewportThreshold = window.innerHeight * 0.95;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportThreshold) {
        immediateReveal.push(el);
      } else {
        observer.observe(el);
      }
    });

    if (immediateReveal.length > 0) {
      requestAnimationFrame(() => {
        for (const el of immediateReveal) {
          el.classList.add('is-visible');
        }
      });
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
