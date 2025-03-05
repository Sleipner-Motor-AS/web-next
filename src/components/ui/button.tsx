import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'default', size = 'md', className, ...props }: ButtonProps) {
  const variantStyles = {
    default: 'bg-petroleum-700 text-white hover:bg-petroleum-800',
    outline: 'border border-petroleum-700 text-petroleum-700 hover:bg-petroleum-100',
    ghost: 'text-petroleum-700 hover:bg-petroleum-100/10',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      className={cn('rounded-md font-medium transition-colors', variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
