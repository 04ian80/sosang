import React, { useState } from 'react';
import { setCurrentLocation } from '../../stores/setLocation';
import CaretDownFill from '../svg/CaretDownFill';
import EachLocation from './EachLocation';

const LocationOption = () => {
  const [option, setOption] = useState(false);
  const { location } = setCurrentLocation();

  return (
    <div className="flex-shrink-0" onClick={() => setOption((prev) => !prev)}>
      <button
        className="relative group z-10 translate-x-1 inline-flex items-center px-2 text-sm font-medium text-center text-gray-700 hover:text-gray-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
        type="button"
      >
        {location}
        <span className="translate-x-1 invisible group-hover:visible group">
          <CaretDownFill size={12} color="#9ca3af" />
        </span>
      </button>
      {option && <EachLocation />}
    </div>
  );
};

export default LocationOption;
