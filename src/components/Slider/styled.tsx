import styled, { css } from 'styled-components';

const commonThumbStyle = css`
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 7px solid #fff;
  background: #1c818d;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.14), 0px 6px 8px rgba(0, 0, 0, 0.12);
  cursor: pointer;
`;

export const Outer = styled.div`
  display: flex;
`;
type WrapProps = { showPopover: boolean };

const getWrapTopMargin = ({ showPopover }: WrapProps) =>
  // compensate for popover relative placement
  showPopover ? '40px' : '0';

export const Wrap = styled.div<WrapProps>`
  position: relative;
  display: flex;
  padding: 0;
  min-height: 10px;
  width: 100%;
  margin: 0;
  margin-top: ${getWrapTopMargin};

  & > input[type='range'] {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 32px;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 100%;

    background: transparent;
    &:focus {
      outline-width: 2px;
      outline-offset: 4px;
      outline-style: solid;
      outline-color: #0000ff;
    }
    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      margin-top: 0;
      ${commonThumbStyle}
    }
    &::-moz-range-thumb {
      ${commonThumbStyle}
    }
    &::-ms-thumb {
      ${commonThumbStyle}
    }
  }
`;

export const Track = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 11px; /* (handle height - track height) / 2 */
  border-radius: 50px;
  height: 10px;
  background-color: #ddd;
`;

type ProgressProps = { progress: number };

const getProgressSize = ({ progress }: ProgressProps) => {
  // adjust for the handle size of 32px
  const adjustment = 16 - (32 / 100) * progress;
  return `calc(${progress}% + ${adjustment}px);`;
};

export const Progress = styled.div<ProgressProps>`
  position: absolute;
  left: 0;
  bottom: 11px;
  width: ${getProgressSize};
  border-radius: 5px 0 0 5px;
  height: 10px;
  background-color: #1c818d;
`;

export const PopoverWrap = styled.div`
  position: relative;
  min-width: 80px;
  min-height: 32px;
  max-width: 254px;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c818d;
  color: white;
  font-family: 'Open Sans';
  font-weight: 700;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  top: -40px; /* track height + 8px distance */
`;

export const Arrow = styled.span`
  position: absolute;
  background-color: #1c818d;
  height: 6px;
  width: 6px;
  transform: rotate(45deg);
  bottom: 37px;
  z-index: 1;
`;
