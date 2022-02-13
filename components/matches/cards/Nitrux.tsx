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
export default function NitruxCard() {
  return (
    <Link href="/browse/nitrux" passHref>
      <Card variant="button" as="a">
        <Heading size="md">Nitrux</Heading>
        <Text fontSize="sm">
          "Contemporary desktop OS, fresh take on Debian"
        </Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Exclusive to the x86 platform
        </Text>
      </Card>
    </Link>
  );
}
