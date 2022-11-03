import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { common, sx } from "../util/props";

const Button = styled.button`
  border: ${(props) => props.border ?? "none"};
  border-radius: ${(props) => props.rounded ?? ""};
  cursor: pointer;
  ${(props) => common(props)}
  ${(props) => sx(props)}
`;

const Text = styled.p`
  font-weight: ${(props) => props.weight ?? ""};
  font-size: ${(props) => props.size ?? ""};
  ${(props) => common(props)}
  ${(props) => sx(props)}
`;

const trackStyle = css`
  width: 100%;
  height: 0.3rem;
  cursor: pointer;
  animate: 0.2s;
`;
const thumbStyle = css`
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 1rem;
  background: var(--light);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
`;

const activeThumbStyle = css`
  background: var(--blue-dark);
  border: 0.15rem solid var(--green);
`;

const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  height: 0.3rem;
  background-image: linear-gradient(
    to right,
    var(--green) 50%,
    var(--blue-dark) 0%
  );
  background-repeat: no-repeat;

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }
  &::-moz-range-track {
    ${trackStyle}
  }
  &::-ms-track {
    ${trackStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }
  &::-moz-range-thumb {
    ${thumbStyle}
  }
  &::-ms-thumb {
    ${thumbStyle}
  }

  &::-webkit-slider-thumb:active {
    ${activeThumbStyle}
  }
  &::-moz-range-thumb:active {
    ${activeThumbStyle}
  }
  &::-ms-thumb:active {
    ${activeThumbStyle}
  }
`;

function SliderInput({ min = 0, max = 10, step = 1, updateLength }) {
  const sliderRef = useRef(null);
  const [values] = useState(max - min);

  const calculatePercentage = (currentValue) => {
    return ((currentValue - min) / values) * 100;
  };

  useEffect(() => {
    const percentage = calculatePercentage(sliderRef.current.value);
    sliderRef.current.style.backgroundImage = `linear-gradient(to right, var(--green) ${percentage}%, var(--blue-dark) 0%)`;
  });

  return (
    <Slider
      ref={sliderRef}
      min={min}
      max={max}
      step={step}
      onChange={(e) => {
        updateLength(e.target.value);
        const percentage = calculatePercentage(e.target.value);
        e.target.style.backgroundImage = `linear-gradient(to right, var(--green) ${percentage}%, var(--blue-dark) 0%)`;
      }}
    />
  );
}

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  -webkit-transition: 0.1s;
  height: 0.9em;
  width: 0.9em;
  margin-right: 1rem;
  margin-bottom: auto;
  margin-top: auto;
  cursor: pointer;
  border-radius: 0.1rem;
  background-color: transparent;
  border: 0.1rem solid var(--light);
  transition: border 0.1s;
  &:hover {
    border: 0.1rem solid var(--green);
  }
  &:checked {
    border: 0.1rem solid var(--green);
    background-color: var(--green);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='-1 -2 24 24' stroke-width='5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export { Button, Text, SliderInput, Checkbox };
