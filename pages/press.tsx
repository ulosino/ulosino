import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { Text, Icon, Box, Stack, SimpleGrid, Divider } from "@chakra-ui/react";
import { HiOutlineCalendar, HiOutlineGlobe } from "react-icons/hi";

import UIProvider from "providers/UIProvider";

import PressHeader from "components/PressHeader";

import Image from "next/image";
import Logo from "/public/brand/app-logo.png";
import Flag from "/public/brand/flag.png";
import AlternateFlag from "/public/brand/alternative-flag.png";

export default function Press() {
  return (
    <UIProvider>
      <Head>
        <title>ULOSINO &mdash; Press &amp; Acknowledgements</title>
      </Head>

      <PressHeader />

      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={8}>
          <Stack direction="row" spacing={2}>
            <Icon as={HiOutlineGlobe} mt={1} />
            <Text>Melbourne, Australia</Text>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Icon as={HiOutlineCalendar} mt={1} />
            <Text>Launched December, 2021</Text>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="column" spacing={8}>
          <Stack direction="column" spacing={2}>
            <Text textStyle="secondary" as="h6">
              2022 Brand Assets
            </Text>
            <Text fontSize="sm">
              The brand assets below represent the ULOSINO web service only. Do
              not modify or sell these images, or use them for something else.
            </Text>
          </Stack>
          <SimpleGrid minChildWidth="280px" spacing={10}>
            <Stack direction="column" spacing={4}>
              <Box display="block">
                <Image
                  src={Logo}
                  width={180}
                  height={180}
                  alt="Picture of the author"
                />
              </Box>
              <Text>ULOSINO Logo</Text>
            </Stack>
            <Stack direction="column" spacing={8}>
              <Image src={Flag} alt="ULOSINO Flag" />
              <Text>ULOSINO Flag</Text>
            </Stack>
            <Stack direction="column" spacing={8}>
              <Image src={AlternateFlag} alt="ULOSINO Alternative Flag" />
              <Stack direction="column" spacing={2}>
                <Text>ULOSINO Alternative Flag</Text>
                <Text fontSize="sm">
                  Used on our GitHub README and when context is important
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
          <Stack direction="column" spacing={2}>
            <Text fontSize="xs">
              ULOSINO is set in{" "}
              <Link href="https://public-sans.digital.gov" passHref>
                Public Sans
              </Link>
              . Embedded iconography by{" "}
              <Link href="https://heroicons.com" passHref>
                Heroicons
              </Link>
              .
            </Text>
            <Text fontSize="xs"></Text>
          </Stack>
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
