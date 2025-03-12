import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import type { ReactNode, ReactElement } from 'react';
import { Children, isValidElement } from 'react';

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'petroleum' | 'white';
}

interface SpanProps {
  children: ReactNode;
  className?: string;
}

const variantStyles = {
  petroleum: 'text-petroleum-700',
  white: 'text-white',
};

const sizeStyles = {
  sm: 'text-sm gap-1.5',
  md: 'text-base gap-2',
  lg: 'text-xl gap-2.5',
};

const textStyles = 'decoration-aqua-500 font-medium underline decoration-2 underline-offset-4';

export function ButtonLink({ children, size = 'md', variant = 'petroleum', ...props }: ButtonLinkProps) {
  // Check if children contain an icon
  const childrenArray = Children.toArray(children);
  const hasIcon = childrenArray.some(
    (child) =>
      isValidElement(child) && typeof child.type === 'function' && child.type.name && child.type.name.includes('Icon'),
  );

  // Apply styling based on whether there's an icon or not
  const linkClassName = cn(
    'inline-flex items-center',
    sizeStyles[size],
    variantStyles[variant],
    !hasIcon && [textStyles, 'font-medium'],
  );

  // If there's an icon, we need to process children to style text elements
  if (hasIcon) {
    const processedChildren = childrenArray.map((child, index) => {
      // If it's an icon, return as is
      if (
        isValidElement(child) &&
        typeof child.type === 'function' &&
        child.type.name &&
        child.type.name.includes('Icon')
      ) {
        return child;
      }

      // For text content (either direct string or inside span), wrap with styling
      if (isValidElement(child) && child.type === 'span') {
        const spanElement = child as ReactElement<SpanProps>;
        return (
          <span key={index} className={textStyles}>
            {spanElement.props.children}
          </span>
        );
      }

      // For direct text content
      return (
        <span key={index} className={textStyles}>
          {child}
        </span>
      );
    });

    return (
      <Link {...props} className={linkClassName}>
        {processedChildren}
      </Link>
    );
  }

  // If no icon, just render the link with children directly
  return (
    <Link {...props} className={linkClassName}>
      {children}
    </Link>
  );
}
