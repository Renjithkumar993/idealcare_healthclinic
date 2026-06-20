import React from 'react';
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';

interface CustomButtonProps extends BootstrapButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({ 
  variant = 'primary', 
  size, 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <BootstrapButton 
      variant={variant} 
      size={size} 
      className={`rounded-pill fw-bold shadow-sm px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
};