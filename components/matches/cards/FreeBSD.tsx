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

export default function FreeBSDCard() {
  return (
    <Link href="/browse/freebsd" passHref>
      <Card variant="button">
        <Heading size="md">FreeBSD</Heading>
        <Text fontSize="sm">"All-field OS with an innovative stance"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86, arm, and ia64 platforms
        </Text>
      </Card>
    </Link>
  );
}
