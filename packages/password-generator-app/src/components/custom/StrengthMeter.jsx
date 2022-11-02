import { useEffect, useState } from "react";
import { Text } from "../Components";
import { Box, Flex } from "../Layout";

const getComplexity = (strength) => {
  if (strength <= 2) {
    return ["green", "LOW"];
  } else if (strength <= 4) {
    return ["orange", "MEDIUM"];
  } else {
    return ["red", "HIGH"];
  }
};

export default function StrengthMeter({ strength = 2 }) {
  const [complexity, setComplexity] = useState(getComplexity(strength));

  useEffect(() => {
    setComplexity(getComplexity(strength));
  }, [strength]);

  return (
    <>
      <Text size="0.9rem" sx={{ "margin-right": "0.6rem" }}>
        {complexity[1]}
      </Text>
      <Flex gap="0.2rem">
        {Array(4)
          .fill(null)
          .map((_, key) => (
            <Box
              key={key}
              border="1px solid var(--light)"
              h="1.1rem"
              w="0.4rem"
              bg={strength > key + 1 ? complexity[0] : ""}
            />
          ))}
      </Flex>
    </>
  );
}
