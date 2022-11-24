import React from 'react';

interface ButtonProps {
  id: string;
  type?: 'button' | 'submit' | undefined;
  children: string | JSX.Element;
  mode: 'form' | 'small' | 'medium' | 'large';
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor: string;
}

const Button = ({
  id,
  children,
  type = 'button',
  mode,
  handleClick,
  buttonColor,
  className,
}: ButtonProps) => {
  if (mode === 'form') {
    return (
      <button
        id={id}
        type={type}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
        className={`${className} w-full mt-1 p-2 border border-${buttonColor} rounded-lg text-sm text-${buttonColor}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      id={id}
      type={type}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      className="w-20 m-1 py-2 px-3 border border-brandGreen-800 rounded text-sm text-brandGreen-800"
    >
      {children}
    </button>
  );
};

export default Button;
