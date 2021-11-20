import { Text, Stack } from "@chakra-ui/react";

export default function AppBanner() {
  return (
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary">Get The App</Text>
      <Text>
        Go offline and get to ULOSINO quicker by installing the web app. Simply
        select 'Install' or 'Add to Home Screen' in your browser's menu.
      </Text>
    </Stack>
  );
}
