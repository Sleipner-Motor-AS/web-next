import type { ReactElement } from 'react';
import { cn } from '../../lib/utils';
import Link from 'next/link';
import type { LinkProps } from 'next/link';

type ButtonVariant = 'petroleum' | 'petroleum-outline' | 'petroleum-text' | 'white' | 'white-outline' | 'white-text';
type ButtonSize = 'sm' | 'md' | 'lg';
type IconPosition = 'none' | 'left' | 'right' | 'both';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  className?: string;
  children?: React.ReactNode;
  as?: typeof Link;
  href?: string;
}

const STYLES = {
  variant: {
    petroleum:
      'border border-petroleum-700 bg-petroleum-700 text-white hover:bg-petroleum-500 hover:border-petroleum-500',
    'petroleum-outline': 'border border-petroleum-700 text-petroleum-700 hover:bg-petroleum-400/20',
    'petroleum-text': 'border border-transparent text-petroleum-700 hover:bg-petroleum-400/20',
    white: 'border border-white bg-white text-petroleum-700 hover:bg-petroleum-100 hover:border-petroleum-100',
    'white-outline': 'border border-white text-white hover:bg-petroleum-100/10',
    'white-text': 'border border-transparent text-white hover:bg-petroleum-100/10',
  },
  size: {
    sm: 'h-8 text-sm gap-1.5',
    md: 'h-10 text-base gap-2',
    lg: 'h-12 text-xl gap-2.5',
  },
  iconOnly: {
    sm: 'aspect-square p-0 w-8 justify-center',
    md: 'aspect-square p-0 w-10 justify-center',
    lg: 'aspect-square p-0 w-12 justify-center',
  },
  padding: {
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
  },
  base: 'inline-flex items-center rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
};

function getIconPosition(hasLeftIcon: boolean, hasRightIcon: boolean): IconPosition {
  if (hasLeftIcon && hasRightIcon) return 'both';
  if (hasLeftIcon) return 'left';
  if (hasRightIcon) return 'right';
  return 'none';
}

export function Button({
  children,
  variant = 'petroleum',
  size = 'md',
  disabled = false,
  className,
  iconLeft,
  iconRight,
  as,
  href,
  ...props
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const hasLeftIcon = !!iconLeft;
  const hasRightIcon = !!iconRight;
  const hasIconOnly = !children && (hasLeftIcon || hasRightIcon);
  const iconPosition = getIconPosition(hasLeftIcon, hasRightIcon);

  const buttonStyles = cn(
    STYLES.base,
    STYLES.variant[variant],
    STYLES.size[size],
    hasIconOnly ? STYLES.iconOnly[size] : STYLES.padding[iconPosition][size],
    className,
  );

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (as === Link && href) {
    return (
      <Link href={href} className={buttonStyles} {...(props as Omit<LinkProps, 'href' | 'className'>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
