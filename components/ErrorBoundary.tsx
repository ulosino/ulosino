import React from "react";

// Imports for the fallback view
import UIProvider from "providers/UIProvider";
import {
  Heading,
  Text,
  Button,
  Box,
  Stack,
  Container,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineRefresh, HiCursorClick } from "react-icons/hi";
import { AlertIcon } from "components/Icons";
import { useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

import { useRouter } from "next/router";
import VersionTroubleshoot from "components/VersionTroubleshoot";

// Render a fallback view in the event of an exception
function ErrorFallbackView() {
  const router = useRouter();
  return (
    <UIProvider>
      <Container maxW="container.sm" mt={16}>
        <Stack direction="column" spacing={8}>
          <Text textStyle="secondary" as="h6">
            Page Crash
          </Text>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={2}>
              <Heading size="md">Something went wrong.</Heading>
              <Text>There's a fault in this page or feature.</Text>
              <VersionTroubleshoot />
            </Stack>
          </Stack>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <Card p={2} pb={1} rounded="2xl">
                <Icon as={HiCursorClick} w={12} h={12} />
              </Card>
            </Box>
            <Stack direction="column" spacing={2} w="full">
              <Button
                leftIcon={<HiOutlineRefresh />}
                size="lg"
                onClick={() => router.reload()}
              >
                Try Again
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </UIProvider>
  );
}

// Handle an exception
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <ErrorFallbackView />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
