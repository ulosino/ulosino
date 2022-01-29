// Marketing for the ULOSINO suite of services

import Link from "next/link";

import {
  Text,
  Button,
  SimpleGrid,
  Stack,
  Box,
  DarkMode,
} from "@chakra-ui/react";
import { HiOutlineDatabase, HiOutlineGlobe } from "react-icons/hi";

import { TempoIcon, MatchesIcon, GuidesIcon } from "components/Icons";

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

export default function HomeHero() {
  return (
    <SimpleGrid minChildWidth="240px" spacing={10}>
      <Card variant="secondary" color="white">
        <DarkMode>
          <Stack direction="column" spacing={4}>
            <TempoIcon />
            <Box>
              <Text textStyle="secondary" as="h6">
                Give Capital with Tempo
              </Text>
              <Text>
                Quickly access an OS' donation page, or select from the Quick
                Donation Options.
              </Text>
            </Box>
            <Link href="/browse" passHref>
              <Button leftIcon={<HiOutlineDatabase />}>Browse OSs</Button>
            </Link>
          </Stack>
        </DarkMode>
      </Card>
      <Card>
        <Stack direction="column" spacing={4}>
          <MatchesIcon />
          <Box>
            <Text textStyle="secondary" as="h6">
              Don't know what to search for?
            </Text>
            <Text>
              With the new ULOSINO Matches, it's easy. Switch buttons to match
              your preferences and get results.
            </Text>
          </Box>
          <Link href="https://matches.ulosino.com" passHref>
            <Button leftIcon={<HiOutlineGlobe />}>
              Get Started with Matches
            </Button>
          </Link>
        </Stack>
      </Card>
      <Card>
        <Stack direction="column" spacing={4}>
          <GuidesIcon />
          <Box>
            <Text textStyle="secondary" as="h6">
              Learn and Lift Off
            </Text>
            <Text>
              Touch up on definitions or jump into installing a lightweight OS.
              Learn and lift off with Guides.
            </Text>
          </Box>
          <Link href="https://guides.ulosino.com" passHref>
            <Button leftIcon={<HiOutlineGlobe />}>Visit ULOSINO Guides</Button>
          </Link>
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
