import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  style = {},
  disabled = false,
  ...rest
}) => {
  const baseStyles: CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.6 : 1,
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: '1px solid #007bff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#ffffff',
      border: '1px solid #6c757d',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '1px solid #007bff',
    },
    text: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '1px solid transparent',
    },
  };

  const sizeStyles: Record<string, CSSProperties> = {
    small: {
      padding: '6px 12px',
      fontSize: '14px',
    },
    medium: {
      padding: '10px 20px',
      fontSize: '16px',
    },
    large: {
      padding: '14px 28px',
      fontSize: '18px',
    },
  };

  const buttonStyle: CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(fullWidth && { width: '100%' }),
    ...style,
  };

  return (
    <button style={buttonStyle} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
