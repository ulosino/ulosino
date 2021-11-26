import { Text, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary" as="h6">
        About ULOSINO
      </Text>
      <Text>
        ULOSINO is a community-contributed open source reference for open source
        operating systems. With ULOSINO, you can connect direct to culture and
        browse through the latest, all in a modern setting.
      </Text>
    </Stack>
  );
}
