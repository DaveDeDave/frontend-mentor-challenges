import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Text, SliderInput, Checkbox } from "./components/Components";
import StrengthMeter from "./components/custom/StrengthMeter";
import { ArrowRightIcon, CheckIcon, CopyIcon } from "./components/Icons";
import { Flex } from "./components/Layout";
import { generatePassword } from "./util/lib";

const Wrapper = ({ children }) => (
  <Flex
    direction="column"
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
  transition: transform 0.1s, color 0.1s;
  color: var(--green);
  margin-top: auto;
  padding-left: 0.5rem;
  &:hover {
    color: var(--light);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1) translateY(1px);
  }
`;

export default function App() {
  const [password, setPassword] = useState("");
  const [factors, setFactors] = useState([
    {
      enabled: true,
      text: "Include Uppercase Letters"
    },
    {
      enabled: false,
      text: "Include Lowercase Letters"
    },
    {
      enabled: false,
      text: "Include Numbers"
    },
    {
      enabled: false,
      text: "Include Symbols"
    }
  ]);
  const [factorsChanged, setFactorsChanged] = useState(0);
  const [length, setLength] = useState(6);
  const [strength, setStrength] = useState(1);
  const [copied, setCopied] = useState(false);
  const [copiedTimeout, setCopiedTimeout] = useState(null);

  const updateFactor = (i, enabled) => {
    setFactors((factors) => {
      factors[i].enabled = enabled;
      return factors;
    });
    setFactorsChanged(factorsChanged + 1);
  };

  useEffect(() => {
    let points = 0;
    if (length >= 6) points++;
    factors.forEach((factor) => {
      if (factor.enabled) points++;
    });
    setStrength(points);
  }, [length, factorsChanged]);

  return (
    <Wrapper>
      <Text
        color="var(--grey-light)"
        weight="600"
        sx={{ "margin-bottom": "1rem" }}
      >
        Password Generator
      </Text>
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
              flex: 1,
              overflow: "hidden"
            }}
          >
            {password != "" ? password : "P4$5W0rD!"}
          </Text>
          <IconWrapper
            onClick={() => {
              setCopied(true);
              if (copiedTimeout != null) clearTimeout(copiedTimeout);
              const timeout = setTimeout(() => {
                setCopied(false);
                setCopiedTimeout(null);
              }, 2000);
              setCopiedTimeout(timeout);
              const copy = document.createElement("textarea");
              document.body.appendChild(copy);
              copy.value = password;
              copy.select();
              document.execCommand("copy");
              document.body.removeChild(copy);
            }}
          >
            {copied ? (
              <CheckIcon color="var(--green)" size="1.25rem" />
            ) : (
              <CopyIcon size="1.25rem" />
            )}
          </IconWrapper>
        </Flex>
        <Flex
          direction="column"
          gap="1rem"
          p="1.2rem"
          bg="var(--blue-light)"
          color="var(--light)"
        >
          <Flex align="center">
            <Text size="0.8rem" sx={{ flex: 1 }}>
              Character Length
            </Text>
            <Text size="1.4rem" color="var(--green)">
              {length}
            </Text>
          </Flex>
          <SliderInput max={23} updateLength={setLength} />
          <Flex direction="column" gap="0.35rem">
            {factors.map((factor, key) => (
              <div key={key}>
                <Checkbox
                  id={`password-factor-${key}`}
                  checked={factor.enabled}
                  onChange={(e) => updateFactor(key, e.target.checked)}
                ></Checkbox>
                <Text
                  as="label"
                  size="0.8rem"
                  htmlFor={`password-factor-${key}`}
                >
                  {factor.text}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex align="center" p="1rem" bg="var(--blue-alternative)">
            <Text
              size=".75rem"
              weight="700"
              color="var(--grey)"
              sx={{ flex: 1 }}
            >
              STRENGTH
            </Text>
            <StrengthMeter strength={strength} />
          </Flex>
          <Button
            py="0.9rem"
            rounded="0.25rem"
            bg="var(--green)"
            hover-bg="transparent"
            color="var(--blue-alternative)"
            hover-color="var(--green)"
            hover-outline="1px solid var(--green)"
            active-transform="translateY(1px)"
            sx={{
              "font-weight": 600
            }}
            onClick={() => {
              setPassword(
                generatePassword(
                  length,
                  factors[0].enabled,
                  factors[1].enabled,
                  factors[2].enabled,
                  factors[3].enabled
                )
              );
            }}
          >
            &nbsp; GENERATE &nbsp;
            <ArrowRightIcon size="1rem" />
          </Button>
        </Flex>
      </Flex>
    </Wrapper>
  );
}
