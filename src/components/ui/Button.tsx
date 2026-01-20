import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-soft hover:shadow-md-soft',
    secondary: 'bg-accent-subtle text-accent hover:bg-accent hover:text-white shadow-soft hover:shadow-md-soft',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-soft hover:shadow-md-soft',
    ghost: 'text-foreground hover:text-accent hover:bg-accent-ghost',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
