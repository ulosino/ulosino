import Link from "next/link";
import {
  Stack,
  Center,
  Text,
  Icon,
  Box,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import { FiBookOpen, FiChevronRight } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function GuidesHero() {
  return (
    <Card>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="secondary">
            <Icon as={FiBookOpen} color="brand" w={6} h={6} />
          </Card>
          <Center>
            <Text textStyle="secondary">Tomorrow's Guide</Text>
          </Center>
        </Stack>
        <Stack direction="column" spacing={4} ps={14}>
          <Text>
            In a digital world more mobile than ever before, learn and lift off
            with ULOSINO Guides.
          </Text>
          <Link href="/browse" passHref>
            <Button leftIcon={<FiChevronRight />}>Browse ULOSINO Guides</Button>
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}
