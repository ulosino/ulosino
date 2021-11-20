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
import { FiUsers, FiChevronRight } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function CultureHero() {
  return (
    <Card variant="brand">
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="secondary">
            <Icon as={FiUsers} color="brand" w={6} h={6} />
          </Card>
          <Center>
            <Text textStyle="secondary">Culture Connect Direct</Text>
          </Center>
        </Stack>
        <Stack direction="column" spacing={4} ps={14}>
          <Text>
            With live community contributions you're in the loop with the latest
            on the largest database.
          </Text>
          <Card>
            <Stack direction="column" spacing={4}>
              <Text>Get your knowledge on ULOSINO with a contribution.</Text>
              <Link href="#" passHref>
                <Button leftIcon={<FiChevronRight />} isDisabled>
                  Contribution Guide
                </Button>
              </Link>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Card>
  );
}
