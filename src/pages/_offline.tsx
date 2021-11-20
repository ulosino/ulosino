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
import { FiWifiOff, FiRefreshCw, FiChevronLeft } from "react-icons/fi";

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

export default function Offline() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Offline</title>
      </Head>

      <Center>
        <Card variant="alert" my={4}>
          <SimpleGrid minChildWidth="240px" spacing={4}>
            <Box>
              <Center>
                <Icon as={FiWifiOff} w={24} h={24} mt={8} />
              </Center>
            </Box>
            <Stack direction="column" spacing={6} mt={2}>
              <Stack direction="column" spacing={2}>
                <Heading size="md">Can't connect to server</Heading>
                <Text>
                  Check data or network settings and return to ULOSINO.
                </Text>
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
            </Stack>
          </SimpleGrid>
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
