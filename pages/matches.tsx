import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  Heading,
  Text,
  Badge,
  Box,
  Stack,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";

import UIProvider from "providers/UIProvider";
import BrowseLayout from "components/BrowseLayout";
import MatchesRedirectionHero from "components/MatchesRedirectionHero";

export default function Matches() {
  return (
    <UIProvider>
      <BrowseLayout>
        <>
          <Head>
            <title>ULOSINO &mdash; ULOSINO Matches</title>
            <meta property="og:title" content="ULOSINO Matches" />
            <meta
              name="description"
              content="Find an open source operating system that matches your preferences with ULOSINO Matches."
            />
            <meta
              property="og:description"
              content="Find an open source OS that matches your preferences with ULOSINO Matches."
            />
          </Head>

          <Heading size="3xl" mb={8}>
            Matches
          </Heading>

          <MatchesRedirectionHero />
        </>
      </BrowseLayout>
    </UIProvider>
  );
}
