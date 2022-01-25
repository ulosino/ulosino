// Provides a global user interface; imported on most pages but not applied to app.tsx (global)

import { Container, Flex, useColorModeValue } from "@chakra-ui/react";

import {
  StartNavigationDesktop,
  StartNavigationMobile,
} from "components/StartNavigation";

import dynamic from "next/dynamic";
import Loading from "components/Loading";
const EndNavigation = dynamic(() => import("components/EndNavigation"), {
  loading: () => <Loading />,
});
const LegalNavigation = dynamic(() => import("components/LegalNavigation"), {
  loading: () => <Loading />,
});

export default function UIProvider({ children }) {
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      {/* Start of page navigation */}
      <Container
        maxW="container.lg"
        display={{ base: "none", md: "block" }}
        mb={12}
      >
        <StartNavigationDesktop />
      </Container>
      <Container
        maxW="container.lg"
        display={{ base: "block", md: "none" }}
        mb={8}
      >
        <StartNavigationMobile />
      </Container>
      {/* Page Container */}
      <Container maxW="container.lg" flex="1" mb={8}>
        {children}
      </Container>
      {/* End of page navigation and footer */}
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
