import Link from "next/link";
import {
  Stack,
  Center,
  Text,
  Icon,
  Box,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  FiUsers,
  FiWatch,
  FiCompass,
  FiBookOpen,
  FiInfo,
} from "react-icons/fi";

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
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary">The ULOSINO Way</Text>
      <Stack direction="column">
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="glass.200">
            <Icon as={FiUsers} w={6} h={6} />
          </Card>
          <Center>
            <Text>Communal, connect direct to culture</Text>
          </Center>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="sand.200">
            <Icon as={FiCompass} w={6} h={6} />
          </Card>
          <Center>
            <Text>Explore in our signature speed and style</Text>
          </Center>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="berry.200">
            <Icon as={FiWatch} w={6} h={6} />
          </Card>
          <Center>
            <Text>Don't wait months or years for the latest</Text>
          </Center>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="clay.200">
            <Icon as={FiBookOpen} w={6} h={6} />
          </Card>
          <Center>
            <Text>Learn and lift off with ULOSINO Guides</Text>
          </Center>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="inherit">
            <Icon as={FiInfo} w={6} h={6} />
          </Card>
          <Center>
            <Link href="/about" passHref>
              <Button size="sm">About ULOSINO</Button>
            </Link>
          </Center>
        </Stack>
      </Stack>
    </Stack>
  );
}
