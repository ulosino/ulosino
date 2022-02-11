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
export default function GentooCard() {
  return (
    <Link href="/browse/gentoo" passHref>
      <Card variant="button">
        <Heading size="md">Gentoo</Heading>
        <Text fontSize="sm">
          "Ideal for servers and mission-critical applications"
        </Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86, arm, risc-v, ppc, and ia64 platforms
        </Text>
      </Card>
    </Link>
  );
}
