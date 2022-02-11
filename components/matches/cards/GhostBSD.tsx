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

export default function GhostBSDCard() {
  return (
    <Link href="/browse/ghostbsd" passHref>
      <Card variant="button">
        <Heading size="md">GhostBSD</Heading>
        <Text fontSize="sm">"BSD ready out-of-the-box"</Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Exclusive to the x86 platform
        </Text>
      </Card>
    </Link>
  );
}
