// Consistent iconography for error pages and marketing features
// Allows for easy updates of icons if neccessary

import {
  Icon,
  Text,
  Box,
  Center,
  useStyleConfig,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiUserGroup, HiDatabase, HiExclamationCircle } from "react-icons/hi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Center __css={styles} {...rest}>
      {children}
    </Center>
  );
}

export const CultureIcon = () => (
  <Card p={2} bg="brandGlass">
    <Icon as={HiUserGroup} color="secondary" w={6} h={6} />
  </Card>
);

export const DatabaseIcon = () => (
  <Card p={2} bg="brandGlass">
    <Icon as={HiDatabase} color="secondary" w={6} h={6} />
  </Card>
);

export const AlertIcon = () => (
  <Card p={2} bg="alert" rounded="2xl">
    <Icon as={HiExclamationCircle} w={12} h={12} />
  </Card>
);

export function TempoIcon() {
  const tempoBadgeMarginBottom = useBreakpointValue({ base: 0, md: 9 });
  return (
    <Box d="flex">
      <Card
        bg="brand"
        color="secondary"
        rounded="full"
        py={1}
        mb={tempoBadgeMarginBottom}
      >
        <Center>
          <Text fontWeight="bold" fontSize="lg" px={6}>
            Tempo
          </Text>
        </Center>
      </Card>
    </Box>
  );
}

export const MatchesIcon = () => (
  <Box d="flex">
    <Card bg="brand" color="secondary">
      <Center>
        <Text fontWeight="bold" fontSize="2xl">
          UM
        </Text>
      </Center>
    </Card>
  </Box>
);

export const GuidesIcon = () => (
  <Box d="flex">
    <Card bg="brand" color="secondary">
      <Center>
        <Text fontWeight="bold" fontSize="2xl">
          UG
        </Text>
      </Center>
    </Card>
  </Box>
);
