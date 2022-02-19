// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Heading, Text, Box, useStyleConfig } from "@chakra-ui/react";
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
export default function UbuntuMateCard() {
  return (
    <Link href="/browse/ubuntu-mate" passHref>
      <Card variant="button" as="a">
        <Heading size="md">Ubuntu MATE</Heading>
        <Text fontSize="sm">"Ubuntu with the traditional experience"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86 and arm platforms
        </Text>
      </Card>
    </Link>
  );
}
