import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  onClick 
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded";
  const variantStyles = {
    primary: "bg-blue-500 text-red border hover:text-green hover:bg-blue-600",
    secondary: "bg-gray-500 text-green border hover:bg-gray-600 px-5"
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