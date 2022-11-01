import { css } from "styled-components";

const sx = (props) =>
  props.sx &&
  css`
    ${Object.entries(props.sx)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ")}
  `;

const common = (props) => `
  border: ${props.border ?? "none"};
  border-radius: ${props.rounded ?? ""};
  padding: ${
    props.p
      ? props.p
      : props.py
      ? `${props.py} 0`
      : props.px
      ? `0 ${props.px}`
      : "0"
  };
  margin: ${
    props.m
      ? props.m
      : props.my
      ? `${props.my} 0`
      : props.mx
      ? `0 ${props.mx}`
      : "0"
  };
  height: ${props.h ?? ""};
  width: ${props.w ?? ""};
  max-width: ${props["max-w"] ?? ""};
  max-height: ${props["max-h"] ?? ""};
  background-color: ${props.bg ?? ""};
  color: ${props.color ?? ""};
`;

export { common, sx };
