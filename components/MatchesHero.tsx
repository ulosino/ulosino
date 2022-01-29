// Ad for Matches, displayed on the Browse page

import Link from "next/link";

import { Text, Button, SimpleGrid, Box, LightMode } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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

export default function MatchesHero() {
  return (
    <Card variant="brand">
      <LightMode>
        <SimpleGrid minChildWidth="240px" spacing={10}>
          <Box>
            <Text textStyle="secondary" as="h6">
              Don't know what to search for?
            </Text>
            <Text>
              With the new ULOSINO Matches, it's easy. Switch buttons to match
              your preferences and then get info on different results.
            </Text>
          </Box>
          <Link href="https://matches.ulosino.com" passHref>
            <Button leftIcon={<HiOutlineArrowNarrowRight />}>
              Get Started with Matches
            </Button>
          </Link>
        </SimpleGrid>
      </LightMode>
    </Card>
  );
}
