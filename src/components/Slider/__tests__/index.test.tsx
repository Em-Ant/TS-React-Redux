import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';

import Slider, { Popover, Progress } from '..';

describe('Slider component', () => {
  afterAll(cleanup);

  it('should render an input[type=range] html element', () => {
    const { container } = render(<Slider />);
    expect(container.querySelector('input[type="range"]')).toBeInTheDocument();
  });

  it('should not render the popover if popoverContent not passed as prop', () => {
    const { container } = render(<Slider />);
    const popoverClass = Popover.styledComponentId;
    expect(container.querySelector(`.${popoverClass}`)).toBeNull();
  });

  it('should render the popover if popoverContent passed as prop', () => {
    const { container } = render(<Slider popoverContent="test" />);
    const popoverClass = Popover.styledComponentId;

    expect(container.querySelector(`.${popoverClass}`)).toBeInTheDocument();
  });

  it('should call onChange function if passed as prop', () => {
    const onChange = jest.fn();

    const { container } = render(<Slider onChange={onChange} />);

    const input = container.querySelector('input[type="range"]');
    input && fireEvent.change(input, { target: { value: 5 } });

    expect(onChange).toBeCalledTimes(1);
  });

  it('should have a Progress element of the right length according to input value - 0%', () => {
    const { container } = render(<Slider value={0} />);

    const progressClass = Progress.styledComponentId;
    const progressElement = container.querySelector(
      `.${progressClass}`
    ) as HTMLElement;

    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveStyle('width: calc(0% + 16px)');
  });

  it('should have a Progress element of the right length according to input value - 50%', () => {
    const { container } = render(<Slider value={50} />);

    const progressClass = Progress.styledComponentId;
    const progressElement = container.querySelector(
      `.${progressClass}`
    ) as HTMLElement;

    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveStyle('width: calc(50% + 0px)');
  });

  it('should have a Progress element of the right length according to input value - 100%', () => {
    const { container } = render(<Slider value={100} />);

    const progressClass = Progress.styledComponentId;
    const progressElement = container.querySelector(
      `.${progressClass}`
    ) as HTMLElement;

    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveStyle('width: calc(100% + -16px)');
  });
});
