import { ButtonHTMLAttributes, Children, isValidElement, ReactElement, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'petroleum' | 'petroleum-outline' | 'petroleum-text' | 'white' | 'white-outline' | 'white-text';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'petroleum',
  size = 'md',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  // Analyze children to determine icon position
  const childrenArray = Children.toArray(children);

  // Helper function to check if a child is an icon
  const isIcon = (child: ReactNode): boolean => {
    if (isValidElement(child)) {
      const componentName = (child as ReactElement).type.toString();
      return typeof componentName === 'string' && (componentName.includes('Icon') || componentName.includes('/icons/'));
    }
    return false;
  };

  // Check if there's an icon and determine its position
  const hasLeftIcon = childrenArray.length > 1 && isIcon(childrenArray[0]);
  const hasRightIcon = childrenArray.length > 1 && isIcon(childrenArray[childrenArray.length - 1]);
  const hasIconOnly = childrenArray.length === 1 && isIcon(childrenArray[0]);

  const variantStyles = {
    petroleum:
      'border border-petroleum-700 bg-petroleum-700 text-white hover:bg-petroleum-500 hover:border-petroleum-500',
    'petroleum-outline': 'border border-petroleum-700 text-petroleum-700 hover:bg-petroleum-400/20',
    'petroleum-text': 'border border-transparent text-petroleum-700 hover:bg-petroleum-400/20',
    white: 'border border-white bg-white text-petroleum-700 hover:bg-petroleum-100 hover:border-petroleum-100',
    'white-outline': 'border border-white text-white hover:bg-petroleum-100/10',
    'white-text': 'border border-transparent text-white hover:bg-petroleum-100/10',
  };

  const sizeStyles = {
    sm: 'h-8 px-4 text-sm gap-1.5',
    md: 'h-10 px-5 text-base gap-2',
    lg: 'h-12 px-6 text-xl gap-2.5',
  };

  // Apply size-specific styling based on icon position
  let iconPositionStyles = '';

  if (hasIconOnly) {
    // Icon-only button (square aspect ratio)
    iconPositionStyles = {
      sm: 'aspect-square p-0 w-8 justify-center',
      md: 'aspect-square p-0 w-10 justify-center',
      lg: 'aspect-square p-0 w-12 justify-center',
    }[size];
  } else if (hasLeftIcon) {
    // Left icon button (more padding on right)
    iconPositionStyles = {
      sm: 'pl-2 pr-3',
      md: 'pl-3 pr-5',
      lg: 'pl-4 pr-6',
    }[size];
  } else if (hasRightIcon) {
    // Right icon button (more padding on left)
    iconPositionStyles = {
      sm: 'pl-3 pr-2',
      md: 'pl-5 pr-3',
      lg: 'pl-6 pr-4',
    }[size];
  }

  return (
    <button
      className={cn(
        'inline-flex items-center rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        iconPositionStyles,
        className,
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
