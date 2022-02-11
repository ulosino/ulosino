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

export default function Q4OSCard() {
  return (
    <Link href="/browse/q4os" passHref>
      <Card variant="button">
        <Heading size="md">Q4OS</Heading>
        <Text fontSize="sm">
          "Traditional experience, low system requirements"
        </Text>
        <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
          Available for the x86 and arm platforms
        </Text>
      </Card>
    </Link>
  );
}
