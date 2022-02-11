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
