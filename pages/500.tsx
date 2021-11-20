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

      <Card variant="alert" my={4}>
        <SimpleGrid minChildWidth="240px" spacing={4}>
          <Box>
            <Center>
              <Icon as={FiSlash} w={24} h={24} mt={12} />
            </Center>
          </Box>
          <Stack direction="column" spacing={6} mt={2}>
            <Stack direction="column" spacing={2}>
              <Heading size="md">Try again later</Heading>
              <Text>There appears to be a problem with ULOSINO servers.</Text>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Button
                leftIcon={<FiRefreshCw />}
                size="lg"
                onClick={() => router.reload()}
              >
                Try Again
              </Button>
              <Button
                leftIcon={<FiChevronLeft />}
                size="sm"
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Text fontSize="xs">Reference code: 500</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Card>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
