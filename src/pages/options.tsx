import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Text, Button, Stack, useColorMode } from "@chakra-ui/react";
import {
  FiCompass,
  FiMonitor,
  FiRefreshCw,
  FiMessageCircle,
  FiLifeBuoy,
  FiGithub,
  FiUploadCloud,
} from "react-icons/fi";

import UIProvider from "src/UIProvider";
import Version from "src/components/Version";

export default function Options() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Options &amp; Legal</title>
      </Head>

      <Stack spacing={10}>
        <Stack spacing={2}>
          <Text textStyle="secondary" as="h6">
            Navigate
          </Text>
          <Link href="/browse" passHref>
            <Button leftIcon={<FiCompass />}>Browse Distributions</Button>
          </Link>
          <Link
            href="https://github.com/ulosino/ulosino/blob/main/CONTRIBUTING.md"
            passHref
          >
            <Button leftIcon={<FiUploadCloud />}>Contribution Guide</Button>
          </Link>
          <Link href="/definitions" passHref>
            <Button
              leftIcon={<FiLifeBuoy />}
              display={{ base: "flex", md: "none" }}
            >
              Definitions
            </Button>
          </Link>
          <Link href="https://github.com/ulosino/ulosino" passHref>
            <Button
              leftIcon={<FiGithub />}
              display={{ base: "flex", md: "none" }}
            >
              GitHub
            </Button>
          </Link>
        </Stack>
        <Stack spacing={2}>
          <Text textStyle="secondary" as="h6">
            Options
          </Text>
          <Button leftIcon={<FiMonitor />} onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
          <Button leftIcon={<FiRefreshCw />} onClick={() => router.reload()}>
            Refresh ULOSINO
          </Button>
          <Link href="/contact" passHref>
            <Button leftIcon={<FiMessageCircle />}>Contact ULOSINO</Button>
          </Link>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Text fontSize="xs">
            Version <Version />
          </Text>
          <Text fontSize="xs">
            <Link href="https://github.com/ulosino/ulosino/releases">
              Changelog
            </Link>
          </Text>
        </Stack>
      </Stack>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
