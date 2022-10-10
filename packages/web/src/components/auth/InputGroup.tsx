import React from 'react';

interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  className = 'flex flex-col mb-2',
  type = 'text',
  placeholder,
  value,
  error,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        className="w-full p-2 transition duration-200 border border-gray-200 rounded text-sm focus:bg-white hover:bg-white"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <small className="pt-1 pl-2 font-medium text-red-400">{error}</small>
    </div>
  );
};

export default InputGroup;
