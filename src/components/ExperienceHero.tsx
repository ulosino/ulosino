import {
  Stack,
  Center,
  Text,
  Icon,
  Box,
  useStyleConfig,
} from "@chakra-ui/react";
import { FiCompass } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function ExperienceHero() {
  return (
    <Card>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={4}>
          <Card p={2} bg="secondary">
            <Icon as={FiCompass} color="brand" w={6} h={6} />
          </Card>
          <Center>
            <Text textStyle="secondary">The modern setting</Text>
          </Center>
        </Stack>
        <Stack direction="column" spacing={4} ps={14}>
          <Text>
            Explore the world of Unix-like OSs with sprint speed and composite
            chic. Only on ULOSINO.
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
