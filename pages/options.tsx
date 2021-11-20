import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Heading, Text, Button, Stack, useColorMode } from "@chakra-ui/react";
import {
  FiBook,
  FiInfo,
  FiMonitor,
  FiRefreshCw,
  FiMessageCircle,
  FiGithub,
  FiUploadCloud,
} from "react-icons/fi";

import UIProvider from "src/UIProvider";
import Version from "src/data/Version";
import Year from "src/data/Year";

export default function Options() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Options &amp; Legal</title>
      </Head>

      <Heading size="3xl" mt={4} display={{ base: "none", md: "flex" }}>
        Options
      </Heading>

      <Stack spacing={4}>
        <Stack spacing={2} display={{ base: "flex", md: "none" }}>
          <Text textStyle="secondary" mt={4}>
            Navigate
          </Text>
          <Link href="/support" passHref>
            <Button leftIcon={<FiBook />}>Guides &amp; Support</Button>
          </Link>
          <Link href="/about" passHref>
            <Button leftIcon={<FiInfo />}>About ULOSINO</Button>
          </Link>
          <Link href="/contribute" passHref>
            <Button leftIcon={<FiUploadCloud />}>Contribute</Button>
          </Link>
        </Stack>
        <Stack spacing={2}>
          <Text textStyle="secondary" display={{ base: "flex", md: "none" }}>
            Options
          </Text>
          <Button leftIcon={<FiMonitor />} onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
          <Button leftIcon={<FiRefreshCw />} onClick={() => router.reload()}>
            Force App Refresh
          </Button>
          <Link href="/support/contact" passHref>
            <Button leftIcon={<FiMessageCircle />}>Contact ULOSINO</Button>
          </Link>
          <Link href="https://github.com/fernpolo/ulosino" passHref>
            <Button leftIcon={<FiGithub />}>Browse Source</Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Text fontSize="xs" mt={4}>
            Copyright &copy; <Year />. To the extent detailed in the{" "}
            <Link href="/support/licence">ULOSINO General Service Licence</Link>
            , you may copy, modify, and study ULOSINO code. If you do not agree
            to the terms and conditions of the licence, do not use ULOSINO
            services.
          </Text>
          <Text fontSize="xs">
            ULOSINO is open source. Any person's edits, with review and approval
            from the operating body, can override ULOSINO. The ULOSINO web
            service is provided 'as-is' and 'as-available'. ULOSINO and/or any
            of it's content providers make no guarantees of any kind regarding
            the content provided to you through ULOSINO services.
          </Text>
        </Stack>
        <Text fontSize="xs">
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
