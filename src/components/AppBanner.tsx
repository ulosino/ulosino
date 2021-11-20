import Link from "next/link";
import { Text, Button, Box, Stack, useStyleConfig } from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function AppBanner() {
  return (
    <Stack direction="column" spacing={2}>
      <Text textStyle="secondary">Get The App</Text>
      <Text>
        Go offline and get to ULOSINO quicker by installing the web app. Simply
        select Install in your browser's menu.
      </Text>
      <Box justify="between">
        <Link href="/support/app" passHref>
          <Button size="sm">Learn More</Button>
        </Link>
      </Box>
    </Stack>
  );
}
