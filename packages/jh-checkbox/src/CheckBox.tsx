import React from 'react';

export interface CheckBoxProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const CheckBox = ({ 
  variant = 'primary', 
  children, 
  onClick 
}: CheckBoxProps) => {
  const baseStyles = "px-4 py-2 rounded";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 pd-3"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};