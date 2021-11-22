import Link from "next/link";
import {
  Stack,
  Center,
  Text,
  Heading,
  Box,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import CultureIcon from "src/components/CultureIcon";

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
      <Stack direction="row" spacing={6}>
        <Box display="block">
          <CultureIcon />
        </Box>
        <Stack direction="column" spacing={4}>
          <Text textStyle="secondary" pt={1.5}>
            Culture Connect Direct
          </Text>
          <Stack direction="column" spacing={2}>
            <Text>
              With live community contributions you're in the loop with the
              latest on the ULOSINO database.
            </Text>
          </Stack>
          <Card>
            <Stack direction="column" spacing={4}>
              <Text>Get your knowledge on ULOSINO with a contribution.</Text>
              <Link
                href="https://github.com/ulosino/ulosino/blob/main/CONTRIBUTING.md"
                passHref
              >
                <Button leftIcon={<FiChevronRight />}>
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
