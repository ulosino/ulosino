// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Heading,
  Text,
  Box,
  Button,
  SimpleGrid,
  useStyleConfig,
  Wrap,
  DarkMode,
  Center,
  LightMode,
  Icon,
  Flex,
  Spacer,
  Divider,
  Badge,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import {
  HiOutlineArrowRight,
  HiOutlineInformationCircle,
  HiOutlineXCircle,
  HiOutlineDotsCircleHorizontal,
  HiCreditCard,
  HiTerminal,
  HiCog,
  HiLightningBolt,
  HiInformationCircle,
  HiPencil,
} from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { VercelLogo } from "components/VercelPromotion";
import Window from "components/Window";

// Begin page
export default function About() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; About ULOSINO</title>
        <meta property="og:title" content="About the ULOSINO Project" />
        <meta name="description" content="Learn about the ULOSINO project." />
        <meta
          property="og:description"
          content="Learn about the ULOSINO project."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">About ULOSINO</Heading>
        <Stack direction="column" spacing={10}>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Card variant="brand" color="gray.900">
              <LightMode>
                <Stack direction="column" spacing={5}>
                  <Text textStyle="miniHeading" as="h6">
                    The Modern Setting
                  </Text>
                  <Wrap w="33%">
                    <Heading size="4xl">The Friendly Flow</Heading>
                  </Wrap>
                </Stack>
              </LightMode>
            </Card>
            <Stack direction="column" spacing={5}>
              <Text textStyle="miniHeading" as="h6">
                The Project
              </Text>
              <Text>
                ULOSINO is the modern setting for open source operating system
                information.
              </Text>
              <Text>
                Open to community contributions, we want ULOSINO to become the
                premiere destination for the latest in open source operating
                system information.
              </Text>
              <Text>
                Lately, we've been working hard to bring up-and-coming projects
                to the table. Through projects like ULOSINO Tempo and ULOSINO
                Matches, we aim to deliver a modern, friendly, and accessible
                experience for everyone.
              </Text>
              <Link href="https://github.com/ulosino/ulosino" passHref>
                <Button leftIcon={<HiOutlineInformationCircle />} as="a">
                  Open the Project README
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
          <Card variant="secondary">
            <DarkMode>
              <SimpleGrid minChildWidth="300px" spacing={10}>
                <Window windowName="Donate to Haiku with ULOSINO Tempo">
                  <Flex>
                    <Center
                      w="50%"
                      display={{ base: "none", lg: "flex" }}
                      m={5}
                    >
                      <Icon
                        as={HiCreditCard}
                        aria-label="Payment card"
                        w={20}
                        h={20}
                      />
                    </Center>
                    <Spacer display={{ base: "none", lg: "flex" }} />
                    <Stack direction="column" spacing={5} w="full">
                      <Heading size="md">Donate to Haiku</Heading>
                      <Box>
                        <Badge variant="tempo">Powered by ULOSINO Tempo</Badge>
                      </Box>
                      <Stack direction="column" spacing={2}>
                        <Button size="sm">Visit Project Website</Button>
                        <Button size="sm">Donate with Open Collective</Button>
                        <Button size="sm">Donate with Liberapay</Button>
                        <Button size="sm">Donate with GitHub Sponsors</Button>
                      </Stack>
                    </Stack>
                  </Flex>
                </Window>
                <Stack direction="column" spacing={5}>
                  <Text textStyle="miniHeading" as="h6">
                    ULOSINO Tempo
                  </Text>
                  <Heading size="xl">Donate.</Heading>
                  <Text>Open source projects need financial support.</Text>
                  <Text>
                    ULOSINO Tempo makes it easy to give capital. Integrate your
                    generosity into your discovery workflow with easy access
                    across ULOSINO.
                  </Text>
                  <Text>
                    Make donations faster with Quick Donation Options. They take
                    you directly to a selection of donation services.
                  </Text>
                </Stack>
              </SimpleGrid>
            </DarkMode>
          </Card>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Stack direction="column" spacing={5}>
              <Icon
                as={HiInformationCircle}
                aria-label="Information circle"
                w={10}
                h={10}
              />
              <Text>
                Get complex information easily with simple information tables.
                Plus, there's platform, desktop, and package manager information
                within Search.
              </Text>
            </Stack>
            <Stack direction="column" spacing={5}>
              <Icon as={HiPencil} aria-label="Pencil" w={10} h={10} />
              <Text>
                Create an operating system page in ULOSINO with our easy-to-use
                assistant. Publish new projects or make updates without wasting
                time in waitlists.
              </Text>
            </Stack>
          </SimpleGrid>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Stack direction="column" spacing={5}>
              <Icon
                as={HiLightningBolt}
                aria-label="Lightning bolt indicating speed"
                w={10}
                h={10}
              />
              <Text>
                It's true that athletes beat the competition. Because ULOSINO is
                powered by Vercel, you get to enjoy the speed of the Edge
                wherever you are.
              </Text>
              <Stack
                direction="column"
                spacing={2}
                display={{ base: "none", lg: "flex" }}
              >
                <Text fontSize="xs">
                  Developers, do your best work with Vercel.
                </Text>
                <Link href="https://vercel.com/home" passHref>
                  <Button leftIcon={<HiOutlineArrowRight />} as="a" size="sm">
                    Begin your Vercel Journey
                  </Button>
                </Link>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              spacing={5}
              display={{ base: "none", lg: "flex" }}
            >
              <Icon as={HiTerminal} aria-label="Keyboard" w={10} h={10} />
              <Text>
                Make moves faster with ULOSINO's keyboard shortcuts. Navigate
                quickly, change preferences, and uncover powerful functions.
              </Text>
            </Stack>
            <Stack direction="column" spacing={5}>
              <Icon as={HiCog} aria-label="Preference gear" w={10} h={10} />
              <Text>
                Make ULOSINO your own. Customize your experience with
                preferences that last across sessions, and open the joy from a
                flow that's made around you.
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
      </Layout>
    </ApplicationProvider>
  );
};
