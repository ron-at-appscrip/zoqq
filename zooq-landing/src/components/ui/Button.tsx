import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon' | 'text' | 'text-arrow';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  className = '',
  icon,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-7 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    icon: 'btn-icon',
    text: 'btn-text',
    'text-arrow': 'btn-text-arrow',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {variant === 'text-arrow' && <span className="ml-1">→</span>}
    </button>
  );
};

export default Button; 