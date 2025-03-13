import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import type { ReactNode, ReactElement } from 'react';

type ButtonLinkVariant = 'petroleum' | 'white';
type ButtonLinkSize = 'sm' | 'md' | 'lg';

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  size?: ButtonLinkSize;
  variant?: ButtonLinkVariant;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

// Variant styles mapping
const variantStyles: Record<ButtonLinkVariant, string> = {
  petroleum: 'text-petroleum-700',
  white: 'text-white',
};

// Base size styles
const sizeStyles: Record<ButtonLinkSize, string> = {
  sm: 'text-sm gap-1.5',
  md: 'text-base gap-2',
  lg: 'text-xl gap-2.5',
};

// Text decoration styles
const textStyles = 'decoration-aqua-500 font-medium underline decoration-2 underline-offset-4';

export function ButtonLink({
  children,
  size = 'md',
  variant = 'petroleum',
  iconLeft,
  iconRight,
  ...props
}: ButtonLinkProps) {
  const hasIcon = !!iconLeft || !!iconRight;

  // Apply appropriate styles based on link configuration
  const linkStyles = cn(
    // Base styles
    'inline-flex items-center',
    // Size styles
    sizeStyles[size],
    // Variant styles
    variantStyles[variant],
    // Apply text styles directly if no icon
    !hasIcon && [textStyles, 'font-medium'],
  );

  // Prepare content based on icon presence
  const content = hasIcon ? (
    <>
      {iconLeft}
      <span className={textStyles}>{children}</span>
      {iconRight}
    </>
  ) : (
    children
  );

  return (
    <Link {...props} className={linkStyles}>
      {content}
    </Link>
  );
}
