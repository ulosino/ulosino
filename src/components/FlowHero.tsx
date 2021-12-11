import {
  Text,
  Icon,
  Divider,
  Box,
  Stack,
  SimpleGrid,
  useStyleConfig,
} from "@chakra-ui/react";
import { FiGlobe, FiHeart } from "react-icons/fi";
import { SmallLogo } from "src/components/Logo";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function FlowHero() {
  return (
    <Card>
      <Stack direction="column" spacing={2}>
        <Stack direction="column">
          <Text textStyle="secondary" as="h6">
            The Friendly Flow
          </Text>
          <Text>
            With offline support*, make ULOSINO the key to more of your
            workflows.
          </Text>
        </Stack>
        <Stack direction="column" spacing={2}>
          <SimpleGrid minChildWidth="280px" spacing={4}>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiGlobe} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Find something great</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} bg="secondary" shadow="inner" w={10}>
                  <Icon as={SmallLogo} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Check it out on ULOSINO</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiHeart} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Install the OS and support culture</Text>
              </Stack>
            </Card>
          </SimpleGrid>
          <Divider display={{ base: "flex", md: "none" }} />
          <SimpleGrid minChildWidth="280px" spacing={4}>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiGlobe} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Find something great</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiHeart} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Install the OS and support culture</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} bg="secondary" shadow="inner" w={10}>
                  <Icon as={SmallLogo} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Discuss and spread the word</Text>
              </Stack>
            </Card>
          </SimpleGrid>
          <Divider display={{ base: "flex", md: "none" }} />
          <SimpleGrid minChildWidth="280px" spacing={4}>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} bg="secondary" shadow="inner" w={10}>
                  <Icon as={SmallLogo} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Search for something you need</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiHeart} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Install the OS and support culture</Text>
              </Stack>
            </Card>
            <Card>
              <Stack direction="column" spacing={2}>
                <Card p={2} pb="-1" shadow="inner" w={10}>
                  <Icon as={FiGlobe} w={6} h={6} />
                </Card>
                <Text fontSize="sm">Recommended something great</Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
        <Text fontSize="xs">
          *Compatible software required. Discussion features aren't available
          offline.
        </Text>
      </Stack>
    </Card>
  );
}
