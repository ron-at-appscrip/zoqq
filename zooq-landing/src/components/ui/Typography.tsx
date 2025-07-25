import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2';
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  as,
}) => {
  const variantClasses = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    body1: 'text-body1',
    body2: 'text-body2',
  };

  const defaultElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body1: 'p',
    body2: 'p',
  };

  const Element = as || defaultElements[variant];
  const classes = `${variantClasses[variant]} ${className}`;

  const Component = Element as any;
  return <Component className={classes}>{children}</Component>;
};

export default Typography; 