// Consistent iconography for error pages and marketing features
// Allows for easy updates of icons if neccessary

import { Icon, Center, useStyleConfig } from "@chakra-ui/react";
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
