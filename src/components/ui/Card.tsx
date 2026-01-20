import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'elevated';
  interactive?: boolean;
  children: ReactNode;
}

function Card({
  variant = 'default',
  interactive = false,
  children,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl p-8 md:p-10 transition-all duration-300';

  const variantStyles = {
    default: 'bg-white shadow-soft',
    subtle: 'bg-background-subtle shadow-soft',
    elevated: 'bg-white shadow-md-soft',
  };

  const interactiveStyles = interactive ? 'hover:shadow-lg-soft cursor-pointer' : '';

  const classes = `${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Card;
