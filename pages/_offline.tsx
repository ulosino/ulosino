import { GetStaticProps } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Button,
  Box,
  Stack,
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

export default function CacheFallback() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Disconnected</title>
      </Head>

      <Container maxW="container.sm" mt={16}>
        <Stack direction="column" spacing={8}>
          <Text textStyle="secondary" as="h6">
            Disconnected From Server
          </Text>
          <Stack direction="row" spacing={8}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={2}>
              <Heading size="md">You're offline.</Heading>
              <Text>
                There were issues downloading data from the server. Check your
                data or networking settings and get back online.
              </Text>
              <Text fontSize="xs">
                If you are connected, please hold on as the server may be down.
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
