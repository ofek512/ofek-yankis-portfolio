import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options = {}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          if (options.once) {
            observer.unobserve(target);
          }
        }
      });
    }, {
      threshold: options.threshold || 0.05,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    });

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [callback, options]);

  return targetRef;
};

export default useIntersectionObserver;