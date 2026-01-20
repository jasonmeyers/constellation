import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: 'wide' | 'default' | 'narrow' | 'reading';
  children: ReactNode;
}

function Container({
  width = 'default',
  children,
  className = '',
  ...props
}: ContainerProps) {
  const baseStyles = 'mx-auto px-6 md:px-8';

  const widthStyles = {
    wide: 'max-w-[1440px]',
    default: 'max-w-7xl',
    narrow: 'max-w-5xl',
    reading: 'max-w-4xl',
  };

  const classes = `${baseStyles} ${widthStyles[width]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Container;
