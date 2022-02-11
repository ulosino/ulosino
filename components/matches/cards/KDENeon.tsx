// This Source Code Form is subject to the terms of the Mozilla Public License 2.0, available at http://mozilla.org/MPL/2.0/

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Heading, Text, Box } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

// Begin component
export default function KDENeonCard() {
  return (
    <Link href="/browse/neon" passHref>
      <Card variant="button">
        <Heading size="md">KDE neon</Heading>
        <Text fontSize="sm">"Frontrunner of the KDE ecosystem"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Exclusive to the x86 platform
        </Text>
      </Card>
    </Link>
  );
}
