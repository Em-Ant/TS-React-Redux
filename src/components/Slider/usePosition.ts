import { useLayoutEffect, RefObject } from 'react';

interface Refs {
  container: RefObject<HTMLDivElement>;
  popover?: RefObject<HTMLDivElement>;
  arrow?: RefObject<HTMLDivElement>;
}

const usePosition = (position: number, { container, popover, arrow }: Refs) => {
  useLayoutEffect(() => {
    if (container.current && popover?.current && arrow?.current) {
      const { width } = popover.current.getBoundingClientRect();
      const {
        left: leftParent,
        right: rightParent,
      } = container.current.getBoundingClientRect();

      const handleSizeAdjustment = 16 - (32 / 100) * position;
      popover.current.style.left = `calc(${position}% + ${
        -width / 2 + handleSizeAdjustment
      }px)`;
      arrow.current.style.left = `calc(${position}% + ${
        handleSizeAdjustment - 3.5
      }px)`;

      const { x: leftComputed } = popover.current.getBoundingClientRect();
      const rightComputed = leftComputed + width;

      const outboundLeft = leftParent - leftComputed;
      const outboundRight = rightComputed - rightParent;
      if (outboundRight > 0) {
        popover.current.style.left = `calc(${position}% + ${
          -width / 2 + handleSizeAdjustment - outboundRight
        }px)`;
      }
      if (outboundLeft > 0) {
        popover.current.style.left = '0';
      }
    }
  });
};

export default usePosition;
