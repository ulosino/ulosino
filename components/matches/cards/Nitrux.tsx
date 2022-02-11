import Link from "next/link";

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

export default function NitruxCard() {
  return (
    <Link href="/browse/nitrux" passHref>
      <Card variant="button">
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
