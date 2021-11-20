import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Icon,
  Button,
  Box,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FiLoader, FiChevronLeft, FiChevronsLeft } from "react-icons/fi";

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

export default function Custom404() {
  const router = useRouter();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Page Not Found</title>
      </Head>

      <Center>
        <Card variant="alert">
          <Stack direction="column" spacing={4}>
            <Center my={8}>
              <Icon as={FiLoader} w={24} h={24} />
            </Center>
            <Stack direction="column" spacing={6}>
              <Stack direction="column" spacing={2}>
                <Heading size="md">Into the oblivion!</Heading>
                <Text>There is nothing to show at this URL.</Text>
                <Text>Return Home to search or find something new.</Text>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Link href="/" passHref>
                  <Button
                    leftIcon={<FiChevronsLeft />}
                    size="lg"
                    variant="solid"
                  >
                    Go Home
                  </Button>
                </Link>
                <Button
                  leftIcon={<FiChevronLeft />}
                  size="sm"
                  variant="solid"
                  onClick={() => router.back()}
                >
                  Go Back
                </Button>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Text fontSize="xs">
                  Got here through ULOSINO?{" "}
                  <Link href="/contact">Send Feedback...</Link>
                </Text>
                <Text fontSize="xs">Error code: 404</Text>
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
