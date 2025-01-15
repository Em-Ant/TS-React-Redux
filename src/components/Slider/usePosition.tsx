import { RefObject, useLayoutEffect } from 'react';

 

const clamp = (val: number, [min, max]: [number, number]): number => {
  if (max < min) {
    throw new Error('slider - wrong range');
  }
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
};

type Values = [v: number, min: number, max: number];
interface Refs {
  container: RefObject<HTMLDivElement | null>;
  progress: RefObject<HTMLDivElement | null>;
  popover: RefObject<HTMLDivElement | null>;
  arrow: RefObject<HTMLDivElement | null>;
}

const setDynamicStyles = (
  [value, min, max]: Values,
  { container, popover, arrow, progress }: Refs,
  handleSize = 32,
) => {
  if (!container.current) {
    return;
  }

  const clampedValue = clamp(value, [min, max]);
  const position = (clampedValue - min) / (max - min);

  const {
    left: containerLeft,
    right: containerRight,
    width,
  } = container.current.getBoundingClientRect();

  const adjustmentForHandleSize = handleSize * (0.5 - position);

  if (progress.current) {
    const progressWidth = width * position + adjustmentForHandleSize;
    progress.current.style.width = `${progressWidth}px`;
  }

  if (popover.current && arrow.current) {
    const { width: popoverWidth } = popover.current.getBoundingClientRect();

    const popoverPosition =
      width * position - popoverWidth / 2 + adjustmentForHandleSize;
    popover.current.style.left = `${popoverPosition}px`;

    const arrowPosition = width * position + adjustmentForHandleSize;
    arrow.current.style.left = ` ${arrowPosition}px`;

    // check if popover out if borders - measure it again
    const { left: popoverLeft, right: popoverRight } =
      popover.current.getBoundingClientRect();

    // check and adjust the right side
    if (popoverRight > containerRight) {
      const outboundRight = popoverRight - containerRight;
      const popoverRightClampedPosition = popoverPosition - outboundRight;
      popover.current.style.left = `${popoverRightClampedPosition}px`;
    }

    // check and adjust the left side - this will have priority
    // in case of very large popover exceeding both sides.
    if (popoverLeft < containerLeft) {
      popover.current.style.left = '0';
    }
  }
};

const usePosition = (values: Values, refs: Refs) => {
  useLayoutEffect(() => {
    setDynamicStyles(values, refs);
  });
};

export { usePosition };
