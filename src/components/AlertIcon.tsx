import { Icon, Center, useStyleConfig } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Center __css={styles} {...rest}>
      {children}
    </Center>
  );
}

export default function AlertIcon() {
  return (
    <Card p={2} bg="alert" shadow="inner" rounded="2xl">
      <Icon as={FiAlertCircle} w={12} h={12} />
    </Card>
  );
}
