import React, { ReactNode, forwardRef } from 'react';
import { PopoverWrap } from './styled';

export interface PopoverProps {
  children?: ReactNode;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children }, ref) => {
    return <PopoverWrap ref={ref}>{children}</PopoverWrap>;
  }
);

Popover.displayName = 'Popover';

export default Popover;
