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
  setIsRequiredFilled?: (bool: boolean) => void;
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
  setIsRequiredFilled,
  required,
  error,
}: TextInputProps) => {
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

  if (required) {
    return (
      <InputGroup className={className} name={name} label={label} required={required} error={error}>
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
      </InputGroup>
    );
  }

  return (
    <InputGroup className={className} name={name} label={label} required={required} error={error}>
      <input
        id={name}
        className="base-input"
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={setValue ? (e) => setValue(e.target.value) : undefined}
        autoComplete="off"
      />
    </InputGroup>
  );
};

export default TextInput;
