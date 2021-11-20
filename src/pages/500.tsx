import { GetStaticProps } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Icon,
  Button,
  Box,
  Stack,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiSlash, FiRefreshCw, FiChevronLeft } from "react-icons/fi";

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
        <title>ULOSINO &mdash; Internal Server Error</title>
      </Head>

      <Center>
        <Card variant="alert">
          <Stack direction="column" spacing={4}>
            <Center my={8}>
              <Icon as={FiSlash} w={24} h={24} />
            </Center>
            <Stack direction="column" spacing={6}>
              <Stack direction="column" spacing={2}>
                <Heading size="md">Can't download data from server</Heading>
                <Text>Try again later.</Text>
              </Stack>
              <Stack direction="column" spacing={2}>
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
              <Text fontSize="xs">Error code: 500</Text>
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
