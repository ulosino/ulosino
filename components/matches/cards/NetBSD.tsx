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

export default function NetBSDCard() {
  return (
    <Link href="/browse/netbsd" passHref>
      <Card variant="button">
        <Heading size="md">NetBSD</Heading>
        <Text fontSize="sm">"Widely ported BSD"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86, arm, ppc, mips, and sparc platforms
        </Text>
      </Card>
    </Link>
  );
}
