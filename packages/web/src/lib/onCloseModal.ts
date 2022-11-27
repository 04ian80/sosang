import { type RefObject } from 'react';

export const onCloseModal = <T extends HTMLElement = HTMLElement>(
  buttonRef: RefObject<T>,
  setIsVisible: (boolean: boolean) => void,
  e?: Event,
) => {
  const isButton =
    buttonRef.current?.contains(e?.target as Node) || buttonRef.current === e?.target;
  if (isButton) return;
  setIsVisible(false);
};
