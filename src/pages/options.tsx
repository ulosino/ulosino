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
  FiTwitter,
  FiGithub,
  FiUploadCloud,
} from "react-icons/fi";

import UIProvider from "src/UIProvider";
import Version from "src/data/Version";

export default function Options() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Options &amp; Legal</title>
      </Head>

      <Stack spacing={4}>
        <Stack spacing={2}>
          <Text textStyle="secondary">Navigate</Text>
          <Link href="/browse" passHref>
            <Button leftIcon={<FiCompass />}>Browse Distributions</Button>
          </Link>
          <Link
            href="https://github.com/ulosino/ulosino/blob/main/CONTRIBUTING.md"
            passHref
          >
            <Button leftIcon={<FiUploadCloud />}>Contribution Guide</Button>
          </Link>
          <Link href="#" passHref>
            <Button
              leftIcon={<FiTwitter />}
              display={{ base: "flex", md: "none" }}
              isDisabled
            >
              Twitter
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
          <Text textStyle="secondary">Options</Text>
          <Button leftIcon={<FiMonitor />} onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
          <Button leftIcon={<FiRefreshCw />} onClick={() => router.reload()}>
            Force App Refresh
          </Button>
          <Link href="/contact" passHref>
            <Button leftIcon={<FiMessageCircle />}>Contact ULOSINO</Button>
          </Link>
        </Stack>
        <Text fontSize="xs" pt={4}>
          You're using ULOSINO version <Version />.
        </Text>
      </Stack>
    </UIProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
