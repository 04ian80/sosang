import React, { useRef, useState } from 'react';
import { onCloseModal } from '../../lib/onCloseModal';
import { setCurrentLocation } from '../../stores/setLocation';
import CaretDownFill from '../svg/CaretDownFill';
import EachLocation from './EachLocation';

const LocationOption = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { location } = setCurrentLocation();

  const onClose = (e: Event) => {
    onCloseModal(buttonRef, setIsVisible, e);
  };

  return (
    <div className="flex-shrink-0 z-5555" onClick={() => setIsVisible(true)}>
      <button
        ref={buttonRef}
        className="relative group translate-x-1 inline-flex items-center z-5555 px-2 text-sm text-center text-gray-700 hover:text-gray-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
        type="button"
      >
        {location}
        <span className="translate-x-1 invisible group-hover:visible group">
          <CaretDownFill size={12} color="#9ca3af" />
        </span>
      </button>
      <EachLocation onClose={onClose} isVisible={isVisible} />
    </div>
  );
};

export default LocationOption;
