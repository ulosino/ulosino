import Link from "next/link";
import {
  Text,
  Button,
  Box,
  Stack,
  SimpleGrid,
  useStyleConfig,
} from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function Guides() {
  return (
    <SimpleGrid minChildWidth="280px" spacing={10} my={8}>
      <Stack direction="column">
        <Text textStyle="secondary">Start</Text>
        <SimpleGrid minChildWidth="240px" spacing={4}>
          <Card variant="guides">
            <Link href="/support/guides/definitions" passHref>
              <Button>Definitions</Button>
            </Link>
            <Text fontSize="sm" mt={2}>
              Learn basic lexicon.
            </Text>
          </Card>
        </SimpleGrid>
      </Stack>
      <Stack direction="column">
        <Text textStyle="secondary">Learn and Lift Off</Text>
        <SimpleGrid minChildWidth="240px" spacing={4}>
          <Card variant="guides">
            <Link href="/support/guides/choose" passHref>
              <Button>Choosing your 1st</Button>
            </Link>
            <Text fontSize="sm" mt={2}>
              Learn some opinionated tips and tricks for choosing a first
              distribution and how to get it up and running on another system.
            </Text>
          </Card>
          <Card variant="guides">
            <Link href="/support/guides/virtual" passHref>
              <Button>Going Virtual</Button>
            </Link>
            <Text fontSize="sm" mt={2}>
              Learn how to get distributions running along side Windows, macOS,
              or another OS.
            </Text>
          </Card>
          <Card variant="guides">
            <Link href="/support/guides/shell" passHref>
              <Button>Shell &amp; Going Lighter</Button>
            </Link>
            <Text fontSize="sm" mt={2}>
              Learn how to use a lightweight Linux distribution of your choice
              and installing packages and a desktop.
            </Text>
          </Card>
        </SimpleGrid>
      </Stack>
      <Stack direction="column">
        <Text textStyle="secondary">Reference</Text>
        <SimpleGrid minChildWidth="240px" spacing={4}>
          <Card variant="guides">
            <Link href="/support/guides/files" passHref>
              <Button>Folders &amp; Files</Button>
            </Link>
            <Text fontSize="sm" mt={2}>
              Learn about common Unix system folders and their contents.
            </Text>
          </Card>
        </SimpleGrid>
      </Stack>
    </SimpleGrid>
  );
}
