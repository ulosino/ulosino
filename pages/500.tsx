import { GetStaticProps } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Badge,
  Heading,
  Text,
  Button,
  Box,
  Stack,
  Flex,
  Spacer,
  Container,
  Icon,
} from "@chakra-ui/react";
import { HiChevronLeft, HiOutlineRefresh, HiCursorClick } from "react-icons/hi";
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

import UIProvider from "providers/UIProvider";

export default function Custom500() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Internal Server Error</title>
      </Head>

      <Container maxW="container.sm" mt={16}>
        <Stack direction="column" spacing={8}>
          <Flex>
            <Text textStyle="secondary" as="h6">
              Server Error
            </Text>
            <Spacer />
            <Badge variant="alert">HTTP 500</Badge>
          </Flex>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={2}>
              <Heading size="md">Something went wrong.</Heading>
              <Text>
                It appears that the server is experiencing problems. No further
                details are available.
              </Text>
              <Text>Try again later as the issue is likely temporary.</Text>
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
              <Button
                leftIcon={<HiChevronLeft />}
                size="sm"
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
