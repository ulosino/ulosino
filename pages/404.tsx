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
  SimpleGrid,
} from "@chakra-ui/react";
import { FiMeh, FiChevronLeft, FiChevronsLeft } from "react-icons/fi";

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

      <Card variant="alert" my={4}>
        <SimpleGrid minChildWidth="240px" spacing={4}>
          <Box>
            <Center>
              <Icon as={FiMeh} w={24} h={24} mt={16} />
            </Center>
          </Box>
          <Stack direction="column" spacing={6} mt={2}>
            <Stack direction="column" spacing={2}>
              <Heading size="md">Into the oblivion!</Heading>
              <Text>
                The page you requested can't be found or doesn't exist.
              </Text>
              <Text>
                Return to the ULOSINO Dashboard to search or find something new.
              </Text>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Link href="/" passHref>
                <Button leftIcon={<FiChevronsLeft />} size="lg">
                  Go to Dashboard
                </Button>
              </Link>
              <Button
                leftIcon={<FiChevronLeft />}
                size="sm"
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Text fontSize="xs">
                If you got here through a ULOSINO link, you can send feedback
                and get it fixed. If you've come from another site, ask that
                site to fix their typo.{" "}
                <Link href="/support/contact">Send feedback...</Link>
              </Text>
              <Text fontSize="xs">Reference code: 404</Text>
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
