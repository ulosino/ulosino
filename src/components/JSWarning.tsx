// Warning to users who don't use JavaScript

import { Box, Container, Stack, Icon, Text } from "@chakra-ui/react";
import { HiExclamationCircle } from "react-icons/hi";

export default function JSWarning() {
  return (
    <Box py={4} bg="secondary" color="white">
      <Container maxW="container.lg">
        <Stack direction="row" spacing={10}>
          <Icon as={HiExclamationCircle} w={8} h={8} me={2} />
          <Text pt={1}>
            Upgrade your browser or enable JavaScript to use ULOSINO.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
