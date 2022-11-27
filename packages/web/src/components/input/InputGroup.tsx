import React, { JSXElementConstructor } from 'react';

interface InputGroupProps {
  className?: string;
  name?: string;
  label?: string;
  required?: boolean;
  error?: string | undefined;
  children?: JSX.Element;
}

const InputGroup = ({ className, name, label, required, error, children }: InputGroupProps) => {
  // Enter시 자동 submit 막기

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
