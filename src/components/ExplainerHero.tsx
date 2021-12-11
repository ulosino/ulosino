import { Stack, Text, Box } from "@chakra-ui/react";
import { CultureIcon, DatabaseIcon } from "src/components/Icons";

export default function ExplainerHero() {
  return (
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary" as="h6">
        How It Works
      </Text>
      <Stack direction="row" spacing={6}>
        <Box display="block">
          <CultureIcon />
        </Box>
        <Text>
          New operating systems are added through contributions, written in
          Markdown
        </Text>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Box display="block">
          <DatabaseIcon />
        </Box>
        <Text>
          The OSs are compiled automatically, powering our leading search and
          discovery options
        </Text>
      </Stack>
    </Stack>
  );
}
