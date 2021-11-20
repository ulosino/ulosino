import { Container, Stack, Icon, Text } from "@chakra-ui/react";
import { FiSlash } from "react-icons/fi";

export default function JSWarning() {
  return (
    <Container maxW="container.lg" p={12} mb={8} roundedBottom="2xl" bg="alert">
      <Stack direction="row" spacing={10}>
        <Icon as={FiSlash} w={8} h={8} me={2} />
        <Text>Upgrade your browser or enable JavaScript to use ULOSINO.</Text>
      </Stack>
    </Container>
  );
}
