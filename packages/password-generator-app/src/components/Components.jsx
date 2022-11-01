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

export { Button, Text };
