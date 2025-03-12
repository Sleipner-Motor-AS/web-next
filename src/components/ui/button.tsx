import type { ButtonHTMLAttributes, ReactElement } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'petroleum' | 'petroleum-outline' | 'petroleum-text' | 'white' | 'white-outline' | 'white-text';
type ButtonSize = 'sm' | 'md' | 'lg';
type IconPosition = 'none' | 'left' | 'right' | 'both';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

// Variant styles mapping
const variantStyles: Record<ButtonVariant, string> = {
  petroleum:
    'border border-petroleum-700 bg-petroleum-700 text-white hover:bg-petroleum-500 hover:border-petroleum-500',
  'petroleum-outline': 'border border-petroleum-700 text-petroleum-700 hover:bg-petroleum-400/20',
  'petroleum-text': 'border border-transparent text-petroleum-700 hover:bg-petroleum-400/20',
  white: 'border border-white bg-white text-petroleum-700 hover:bg-petroleum-100 hover:border-petroleum-100',
  'white-outline': 'border border-white text-white hover:bg-petroleum-100/10',
  'white-text': 'border border-transparent text-white hover:bg-petroleum-100/10',
};

// Base size styles
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 text-sm gap-1.5',
  md: 'h-10 text-base gap-2',
  lg: 'h-12 text-xl gap-2.5',
};

// Icon-only button styles (square aspect ratio)
const iconOnlyStyles: Record<ButtonSize, string> = {
  sm: 'aspect-square p-0 w-8 justify-center',
  md: 'aspect-square p-0 w-10 justify-center',
  lg: 'aspect-square p-0 w-12 justify-center',
};

// Padding styles for different icon positions
const paddingStyles: Record<IconPosition, Record<ButtonSize, string>> = {
  none: {
    sm: 'px-4',
    md: 'px-5',
    lg: 'px-6',
  },
  left: {
    sm: 'pl-2 pr-3',
    md: 'pl-3 pr-5',
    lg: 'pl-4 pr-6',
  },
  right: {
    sm: 'pl-3 pr-2',
    md: 'pl-5 pr-3',
    lg: 'pl-6 pr-4',
  },
  both: {
    sm: 'px-2',
    md: 'px-3',
    lg: 'px-4',
  },
};

export function Button({
  children,
  variant = 'petroleum',
  size = 'md',
  disabled = false,
  className,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  const hasLeftIcon = !!iconLeft;
  const hasRightIcon = !!iconRight;
  const hasIconOnly = !children && (hasLeftIcon || hasRightIcon);

  // Determine padding style based on icon placement
  let iconPosition: IconPosition = 'none';
  if (hasLeftIcon && hasRightIcon) {
    iconPosition = 'both';
  } else if (hasLeftIcon) {
    iconPosition = 'left';
  } else if (hasRightIcon) {
    iconPosition = 'right';
  }

  // Apply appropriate styles based on button configuration
  const buttonStyles = cn(
    // Base styles
    'inline-flex items-center rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
    // Variant styles
    variantStyles[variant],
    // Size styles
    sizeStyles[size],
    // Icon position styles
    hasIconOnly ? iconOnlyStyles[size] : paddingStyles[iconPosition][size],
    // Additional custom classes
    className,
  );

  return (
    <button className={buttonStyles} disabled={disabled} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
