import Link from "next/link";

import { Text, Button, SimpleGrid, Box, DarkMode } from "@chakra-ui/react";
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

export default function MatchesRedirectionHero() {
  return (
    <Card variant="secondary">
      <DarkMode>
        <SimpleGrid minChildWidth="240px" spacing={10}>
          <Box>
            <Text textStyle="secondary" as="h6">
              Try ULOSINO Matches
            </Text>
            <Text>
              Get a Match by simply switching buttons to match your preferences.
            </Text>
            <Text fontSize="xs" mt={5}>
              We're busy integrating ULOSINO Matches into the core ULOSINO
              experience.
            </Text>
          </Box>
          <Link href="https://matches.ulosino.com" passHref>
            <Button leftIcon={<HiOutlineArrowNarrowRight />}>
              Exit to matches.ulosino.com
            </Button>
          </Link>
        </SimpleGrid>
      </DarkMode>
    </Card>
  );
}
