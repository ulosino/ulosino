import { Container, Flex, useColorModeValue } from "@chakra-ui/react";

import StartNavigation from "src/components/StartNavigation";
import EndNavigation from "src/components/EndNavigation";
import LegalNavigation from "./components/LegalNavigation";
import JSWarning from "src/components/JSWarning";
import PopulationWarning from "src/components/PopulationWarning";

export default function UIProvider({ children }) {
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      <noscript>
        <JSWarning />
      </noscript>
      <Flex display={{ base: "none", sm: "block" }}>
        <PopulationWarning />
      </Flex>
      {/* Margin is not used here because of desktop/mobile variability */}
      <Container maxW="container.lg">
        <StartNavigation />
      </Container>
      <Container maxW="container.lg" flex="1" mb={8}>
        {children}
      </Container>
      <Container
        maxW="container.lg"
        display={{ base: "none", md: "block" }}
        mt={12}
        mb={4}
      >
        <EndNavigation />
      </Container>
      <Container
        maxW="container.lg"
        display={{ base: "block", md: "none" }}
        my={4}
      >
        <LegalNavigation />
      </Container>
    </Flex>
  );
}
