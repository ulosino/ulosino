import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Heading, Text, Button, Box, Stack, Center } from "@chakra-ui/react";
import { FiChevronLeft, FiRefreshCw } from "react-icons/fi";
import AlertIcon from "src/components/AlertIcon";

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

import UIProvider from "src/UIProvider";

export default function Custom500() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Offline</title>
      </Head>

      <Center mt={12}>
        <Card variant="alert">
          <Stack direction={["column", "row"]} spacing={10}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={4}>
              <Text textStyle="secondary" as="h1">
                Disconnected From Server
              </Text>
              <Heading size="lg" as="h3">
                You're offline
              </Heading>
              <Stack direction="column" spacing={2}>
                <Text>There were issues reaching the server.</Text>
                <Text>Check your data or networking settings.</Text>
                <Text>Refresh to try again.</Text>
              </Stack>
              <Stack direction="column" spacing={2} pt={2}>
                <Button
                  leftIcon={<FiRefreshCw />}
                  size="lg"
                  variant="solid"
                  onClick={() => router.reload()}
                >
                  Try Again
                </Button>
                <Button
                  leftIcon={<FiChevronLeft />}
                  size="sm"
                  variant="solid"
                  onClick={() => router.back()}
                >
                  Go Back
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Center>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
