import { Icon, Center, useStyleConfig } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Center __css={styles} {...rest}>
      {children}
    </Center>
  );
}

export default function CultureIcon() {
  return (
    <Card p={2} bg="secondary">
      <Icon as={FiBookOpen} color="brand" w={6} h={6} />
    </Card>
  );
}
