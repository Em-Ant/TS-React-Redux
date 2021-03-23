import React, { useState, HTMLProps, useRef, ReactNode } from 'react';
import { Wrap, Track, Progress, Outer, PopoverWrap, Arrow } from './styled';
import Popover from './Popover';
import usePosition from './usePosition';

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
  defaultValue,
  value,
  onChange,
  className,
  style,
  popoverContent,
  ...props
}: RangeInputProps) => {
  const [localValue, setLocalValue] = useState(value ?? defaultValue ?? 0);
  const outer = useRef<HTMLDivElement>(null);
  const popover = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLDivElement>(null);

  const position = Math.round(((value ?? localValue) / (max - min)) * 100);

  usePosition(position, { container: outer, popover, arrow });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    // if the component is "controlled" - disallow local state change
    value === undefined && setLocalValue(Number(e.target?.value));
  };

  const showPopover = !!popoverContent;

  return (
    <Outer className={className} style={style}>
      <Wrap ref={outer} showPopover={showPopover}>
        {showPopover && (
          <>
            <Arrow ref={arrow} />
            <Popover ref={popover}>{popoverContent}</Popover>
          </>
        )}
        <Track />
        <Progress progress={position} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={handleOnChange}
          value={value ?? localValue}
          {...props}
        />
      </Wrap>
    </Outer>
  );
};

export default RangeInput;
export { Track, Progress, Wrap, PopoverWrap as Popover };
