import Link from "next/link";
import {
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Spacer,
  useStyleConfig,
} from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function ContactBanner() {
  return (
    <Card my={4}>
      <Flex>
        <Box>
          <Heading size="md">Need help with ULOSINO?</Heading>
          <Text>Send questions or feedback by contacting ULOSINO.</Text>
        </Box>
        <Spacer />
        <Box justify="between" ms={4}>
          <Link href="/support/contact" passHref>
            <Button size="sm">Get Started</Button>
          </Link>
        </Box>
      </Flex>
    </Card>
  );
}
