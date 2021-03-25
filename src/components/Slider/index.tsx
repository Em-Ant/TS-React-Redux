import React, { useState, HTMLProps, useRef, ReactNode } from 'react';
import { Wrap, Track, Progress, Outer, Popover, Arrow } from './styled';
import { usePosition } from './usePosition';

export interface RangeInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  defaultValue?: number;
  popoverContent?: ReactNode;
}

const RangeInput = ({
  min = 0,
  max = 100,
  step = 1,
  onChange,
  className,
  value,
  defaultValue,
  style,
  popoverContent,
  ...props
}: RangeInputProps) => {
  const [localValue, setLocalValue] = useState(value ?? defaultValue ?? min);

  const container = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const popover = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLDivElement>(null);

  usePosition([value ?? localValue, min, max], {
    container,
    popover,
    arrow,
    progress,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (value === undefined) {
      // the component is "controlled" - disallow local state change
      setLocalValue(Number(e.target?.value));
    }
  };

  const showPopover = !!popoverContent;

  return (
    <Outer className={className} style={style}>
      <Wrap ref={container} showPopover={showPopover}>
        {showPopover && (
          <>
            <Arrow ref={arrow} />
            <Popover ref={popover}>{popoverContent}</Popover>
          </>
        )}
        <Track />
        <Progress ref={progress} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value ?? localValue}
          onChange={handleOnChange}
          {...props}
        />
      </Wrap>
    </Outer>
  );
};

export default RangeInput;
export { Track, Progress, Wrap, Popover };
