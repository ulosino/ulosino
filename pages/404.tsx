import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
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
import {
  HiChevronLeft,
  HiArrowNarrowLeft,
  HiCursorClick,
} from "react-icons/hi";
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

export default function Custom404() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Page Not Found</title>
      </Head>

      <Container maxW="container.sm" mt={16}>
        <Stack direction="column" spacing={8}>
          <Flex>
            <Text textStyle="secondary" as="h6">
              Page Not Found
            </Text>
            <Spacer />
            <Badge variant="alert">HTTP 404</Badge>
          </Flex>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={2}>
              <Heading size="md">There is nothing to show at this URL.</Heading>
              <Text>
                If you typed the URL manually, check it for spelling mistakes.
                If there was once a page here, it was probably moved or deleted.
              </Text>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <Card p={2} pb={1} rounded="2xl">
                <Icon as={HiCursorClick} w={12} h={12} />
              </Card>
            </Box>
            <Stack direction="column" spacing={2} w="full">
              <Link href="/" passHref>
                <Button leftIcon={<HiArrowNarrowLeft />} size="lg">
                  Go Home
                </Button>
              </Link>
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
