import { Box, Container, Stack, Center, Icon, Text } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

export default function PopulationWarning() {
  return (
    <Box p={1} bg="secondary" color="white">
      <Container maxW="container.lg">
        <Stack direction="row" spacing={4}>
          <Center>
            <Icon as={FiAlertCircle} w={4} h={4} me={2} />
          </Center>
          <Text fontSize="sm">
            ULOSINO is in the population phase. Some OSs may be missing.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
