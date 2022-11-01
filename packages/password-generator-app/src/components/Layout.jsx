import styled from "styled-components";
import { common, sx } from "../util/props";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? ""};
  justify-content: ${(props) => props.justify ?? ""};
  align-items: ${(props) => props.align ?? ""};
  gap: ${(props) => props.gap ?? ""};
  flex: ${(props) => props.flex ?? ""};
  ${(props) => common(props)};
  ${(props) => sx(props)};
`;

export { Flex };
