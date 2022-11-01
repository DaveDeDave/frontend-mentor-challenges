import { useState } from "react";
import styled from "styled-components";
import { Button, Text } from "./components/Components";
import { CopyIcon } from "./components/Icons";
import { Flex } from "./components/Layout";

const Wrapper = ({ children }) => (
  <Flex
    direction="row"
    justify="center"
    align="center"
    bg="var(--blue-dark)"
    sx={{ height: "100vh" }}
  >
    {children}
  </Flex>
);

const IconWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Slider = styled.input``;

export default function App() {
  const [password, setPassword] = useState("");
  const [factors, setFactors] = useState([
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols"
  ]);

  return (
    <Wrapper>
      <Flex direction="column" gap="1rem" max-w="325px" w="100%">
        <Flex
          direction="row"
          align="center"
          bg="var(--blue-light)"
          p="1rem 1rem"
        >
          <Text
            my="auto"
            color={password == "" ? "var(--grey)" : "var(--light)"}
            weight="600"
            size="1.3rem"
            sx={{
              flex: 1
            }}
          >
            {password != "" ? password : "P4$5W0rD!"}
          </Text>
          <IconWrapper>
            <CopyIcon size="1.25rem" color="var(--green)" />
          </IconWrapper>
        </Flex>
        <Flex
          direction="column"
          gap="1rem"
          p="1.2rem"
          bg="var(--blue-light)"
          color="var(--light)"
        >
          <Flex>
            <Text sx={{ flex: 1 }}>Character Length</Text>
            <Text>0</Text>
          </Flex>
          <Slider type="range" />
          <div>
            {factors.map((_, key) => (
              <div key={key}>
                <input id={`password-factor-${key}`} type="checkbox"></input>
                <label for={`password-factor-${key}`}>
                  Include Uppercase Letters
                </label>
              </div>
            ))}
          </div>
          <Flex p="1.2rem" bg="var(--blue-alternative)">
            <Text size=".8rem" weight="600" color="var(--grey)">
              STRENGTH
            </Text>
          </Flex>
          <Button
            py="0.9rem"
            rounded="0.25rem"
            bg="var(--green)"
            color="var(--blue-alternative)"
            sx={{
              "font-weight": 600
            }}
          >
            GENERATE →
          </Button>
        </Flex>
      </Flex>
    </Wrapper>
  );
}
