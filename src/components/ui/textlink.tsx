import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import type { ReactNode, ReactElement } from 'react';

type TextlinkColor = 'petroleum' | 'white';
type TextlinkSize = 'sm' | 'md' | 'lg';

type TextlinkProps = {
  children: ReactNode;
  size?: TextlinkSize;
  color?: TextlinkColor;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  className?: string;
  as?: 'button';
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
};

const STYLES = {
  color: {
    petroleum: 'text-petroleum-700',
    white: 'text-white',
  },
  size: {
    sm: 'text-sm gap-1.5',
    md: 'text-base gap-2',
    lg: 'text-xl gap-2.5',
  },
  text: 'decoration-aqua-500 font-medium underline decoration-2 underline-offset-4',
  base: 'inline-flex items-center',
};

export function Textlink({
  children,
  size = 'md',
  color = 'petroleum',
  iconLeft,
  iconRight,
  className,
  as,
  onClick,
  type = 'button',
  disabled = false,
  href,
  target,
  ...props
}: TextlinkProps & Omit<LinkProps, 'href' | 'className' | 'onClick' | 'as'>) {
  const hasIcon = !!iconLeft || !!iconRight;

  const styles = cn(
    STYLES.base,
    STYLES.size[size],
    STYLES.color[color],
    !hasIcon && [STYLES.text, 'font-medium'],
    className,
  );

  const content = hasIcon ? (
    <>
      {iconLeft}
      <span className={STYLES.text}>{children}</span>
      {iconRight}
    </>
  ) : (
    children
  );

  if (as === 'button') {
    return (
      <button className={styles} onClick={onClick} type={type} disabled={disabled}>
        {content}
      </button>
    );
  }

  // Default to Link - href is required for Link
  if (!href) {
    console.error('Textlink: href is required when not using as="button"');
    return null;
  }

  return (
    <Link href={href} className={styles} target={target} {...props}>
      {content}
    </Link>
  );
}
