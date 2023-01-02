import React from 'react';
import { setShowMapSearch } from '../../stores/setShowMapSearch';
import InputGroup from './InputGroup';

interface LocationInputProps {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  pattern?: string;
  label?: string;
  value?: string;
  required?: boolean;
}

const LocationInput = ({
  className,
  type = 'text',
  name,
  placeholder,
  pattern,
  label,
  value,
  required,
}: LocationInputProps) => {
  const openMapSearch = setShowMapSearch((state) => state.openMapSearch);
  // Enter시 자동 submit 막기
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <InputGroup className={className} name={name} label={label} required={required} searchViaMap>
      <div className="relative mb-4">
        <input
          id={name}
          className="base-input"
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          readOnly
          defaultValue={value}
          onClick={() => {
            openMapSearch();
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <input
          id="detailed-address"
          className="base-input"
          type={type}
          placeholder="상세 정보를 입력해주세요.(예: 소상동 1층)"
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </div>
    </InputGroup>
  );
};

export default LocationInput;
