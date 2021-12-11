import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Button,
  Box,
  Stack,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronsLeft } from "react-icons/fi";
import { AlertIcon } from "src/components/Icons";

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

      <Center mt={12}>
        <Card variant="alert">
          <Stack direction={["column", "row"]} spacing={10}>
            <Box display="block">
              <AlertIcon />
            </Box>
            <Stack direction="column" spacing={4}>
              <Text textStyle="secondary" as="h1">
                Page Not Found
              </Text>
              <Heading size="lg" as="h3">
                Into the oblivion!
              </Heading>
              <Stack direction="column" spacing={4}>
                <Text>There is nothing to show at this URL.</Text>
                <Card display={{ base: "none", sm: "block" }}>
                  <Text textStyle="secondary">Troubleshoot</Text>
                  <UnorderedList fontSize="sm">
                    <ListItem>
                      If there was once a page here, it may have been deleted or
                      renamed.
                    </ListItem>
                    <ListItem>
                      If you typed the page URL directly, check its spelling.
                      Remove special characters.
                    </ListItem>
                    <ListItem>
                      If you're looking for an OS, the URL should look like
                      this: "ulosino.com/browse/ubuntu"
                    </ListItem>
                  </UnorderedList>
                </Card>
                <Text>Return Home to start a search.</Text>
              </Stack>
              <Stack direction="column" spacing={2} pt={2}>
                <Link href="/" passHref>
                  <Button leftIcon={<FiChevronsLeft />} size="lg">
                    Go Home
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
