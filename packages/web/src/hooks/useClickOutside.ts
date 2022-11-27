import { type RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (e: Event) => void,
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = ref?.current;
      if (!el || el.contains(e?.target as Node)) {
        return;
      }

      handler(e);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
