import { Text, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary">About ULOSINO</Text>
      <Text>
        ULOSINO is the leading open source OS news, information and discovery
        service. Built to carry and endure the current speed and styling
        characteristics seen in modern Unix-like operating systems. As such, our
        goal is to deliver the largest stack of information in a modern and
        welcoming setting. With ULOSINO, you can connect direct to culture
        &mdash; yet ULOSINO visitors and contributors are the real commuters of
        the culture and they form the lifeblood of the platform.
      </Text>
    </Stack>
  );
}
