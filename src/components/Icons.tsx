import { Icon, Center, useStyleConfig } from "@chakra-ui/react";
import { FiUsers, FiDatabase, FiAlertCircle } from "react-icons/fi";

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
  <Card p={2} bg="brandGlass" shadow="inner">
    <Icon as={FiUsers} color="secondary" w={6} h={6} />
  </Card>
);

export const DatabaseIcon = () => (
  <Card p={2} bg="brandGlass" shadow="inner">
    <Icon as={FiDatabase} color="secondary" w={6} h={6} />
  </Card>
);

export const AlertIcon = () => (
  <Card p={2} bg="alert" shadow="inner" rounded="2xl">
    <Icon as={FiAlertCircle} w={12} h={12} />
  </Card>
);
