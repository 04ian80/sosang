import React from 'react';
import InputGroup from './InputGroup';

interface LocationInputProps {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  pattern?: string;
  label?: string;
  value?: string;
  setValue?: (str: string) => void;
  setIsRequiredFilled?: (bool: boolean) => void;
  required?: boolean;
  error?: string | undefined;
}

const LocationInput = ({
  className,
  type = 'text',
  name,
  placeholder,
  pattern,
  label,
  value,
  setValue,
  setIsRequiredFilled,
  required,
  error,
}: LocationInputProps) => {
  // Enter시 자동 submit 막기
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setIsRequiredFilled && (e.target as HTMLInputElement).value === '') {
      setIsRequiredFilled(false);
    } else if (setIsRequiredFilled && (e.target as HTMLInputElement).value !== '') {
      setIsRequiredFilled(true);
    }
  };

  return (
    <InputGroup className={className} name={name} label={label} required={required} error={error}>
      <div className="mb-4">
        <input
          id={name}
          className="base-input"
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          id={name}
          className="base-input"
          type={type}
          placeholder="상세 정보를 입력해주세요.(예: 소상동 1층)"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
    </InputGroup>
  );
};

export default LocationInput;
