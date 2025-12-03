import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none rounded-full tracking-wide";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/20 hover:-translate-y-1",
    secondary: "bg-sand-200 text-brand-900 hover:bg-sand-300",
    outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-50",
  };

  const sizes = {
    sm: "h-10 px-6 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};