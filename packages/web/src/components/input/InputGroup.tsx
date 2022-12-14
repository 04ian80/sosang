import React from 'react';
import { setShowMapSearch } from '../../stores/setShowMapSearch';

interface InputGroupProps {
  className?: string;
  name?: string;
  label?: string;
  required?: boolean;
  error?: string | undefined;
  children?: JSX.Element;
  searchViaMap?: boolean;
}

const InputGroup = ({
  className,
  name,
  label,
  required,
  error,
  children,
  searchViaMap,
}: InputGroupProps) => {
  // Enter시 자동 submit 막기
  const openMapSearch = setShowMapSearch((state) => state.openMapSearch);

  if (searchViaMap) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-end">
          <label htmlFor={name} className="flex ml-2">
            {label}
          </label>
          {required && <small className="text-red-500 ml-1">&#40;필수&#41;</small>}
          {searchViaMap && (
            <button
              type="button"
              onClick={openMapSearch}
              className="ml-auto mr-2 text-sm text-brandGreen-800/70 hover:text-brandGreen-800 underline"
            >
              <span>지도로 찾기 &gt;</span>
            </button>
          )}
        </div>
        {children}
        {error && <small className="pt-1 pl-2 font-medium text-red-400">{error}</small>}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-end">
        <label htmlFor={name} className="flex ml-2">
          {label}
        </label>
        {required && <small className="text-red-500 ml-1">&#40;필수&#41;</small>}
      </div>
      {children}
      {error && <small className="pt-1 pl-2 font-medium text-red-400">{error}</small>}
    </div>
  );
};

export default InputGroup;
