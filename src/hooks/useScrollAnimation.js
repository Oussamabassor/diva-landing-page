import { useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations on scroll
 * Uses Intersection Observer API for SEO-friendly, performant animations
 * @param {string} animationClass - Tailwind animation class name
 * @param {boolean} once - Only animate once when element enters viewport
 * @returns {React.RefObject} - Ref to attach to element
 */
export function useScrollAnimation(animationClass = 'animate-fade-in-up', once = true) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add(animationClass);
          
          // Stop observing if only animate once
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // Remove animation class when element leaves viewport (if not once)
          entry.target.classList.remove(animationClass);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationClass, once]);

  return ref;
}
