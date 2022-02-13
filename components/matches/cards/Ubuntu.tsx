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
export default function UbuntuCard() {
  return (
    <Link href="/browse/ubuntu" passHref>
      <Card variant="button" as="a">
        <Heading size="md">Ubuntu</Heading>
        <Text fontSize="sm">"Commercial, widely supported Linux"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86 and arm platforms
        </Text>
      </Card>
    </Link>
  );
}
