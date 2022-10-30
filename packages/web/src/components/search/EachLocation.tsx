import React, { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { setCurrentLocation } from '../../stores/setLocation';

interface LocationProps {
  onClose(e?: Event): void;
  visible: boolean;
}

const EachLocation = ({ onClose, visible }: LocationProps) => {
  const locationArr: string[] = ['지역', '성남', '제주'];
  const { setLocation } = setCurrentLocation();
  const locationRef = useRef<HTMLDivElement>(null);

  const handleLocation = (e: any) => {
    setLocation(e.target.value);
  };

  useClickOutside(locationRef, (e) => {
    onClose(e);
  });

  return (
    <>
      {visible && (
        <div
          ref={locationRef}
          className="absolute top-10 left-3 w-auto bg-white rounded-b divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="states-button"
          >
            {locationArr.map((item, i) => (
              <li key={i}>
                <button
                  value={item}
                  onClick={handleLocation}
                  type="button"
                  className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EachLocation;
