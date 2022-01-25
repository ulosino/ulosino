// Links to legal policies
// This is incorporated into <EndNavigation> (for desktop) but shown on its own when on mobile

import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";

export default function LegalNavigation() {
  return (
    <Stack direction="row" spacing={2}>
      <Text fontSize="xs">
        <Link href="/licence">Copyright Notice</Link>
      </Text>
      <Text fontSize="xs">
        <Link href="/privacy">Privacy</Link>
      </Text>
    </Stack>
  );
}
