import React from 'react';
import InputGroup from './InputGroup';

interface TextInputProps {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  pattern?: string;
  label?: string;
  value?: string;
  setValue?: (str: string) => void;
  required?: boolean;
  error?: string | undefined;
}

const TextInput = ({
  className,
  type = 'text',
  name,
  placeholder,
  pattern,
  label,
  value,
  setValue,
  required,
  error,
}: TextInputProps) => {
  // Enter시 자동 submit 막기
  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <InputGroup className={className} name={name} label={label} required={required} error={error}>
      {setValue ? (
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          id={name}
          className="base-input"
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      ) : (
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          id={name}
          className="base-input"
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          autoComplete="off"
        />
      )}
    </InputGroup>
  );
};

export default TextInput;
