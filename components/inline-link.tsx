import React, { forwardRef } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

const InlineLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...props }, ref) => {

    const linkClassName = cn('underline text-primary', className)

    return (
      <Link className={linkClassName} {...props} ref={ref}>
       {children}
      </Link>
    );
  }
);

InlineLink.displayName = 'InlineLink'; // Helps with debugging

export default InlineLink;