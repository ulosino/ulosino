import { Icon, Center, useStyleConfig } from "@chakra-ui/react";
import { FiCompass } from "react-icons/fi";

function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Center __css={styles} {...rest}>
      {children}
    </Center>
  );
}

export default function ExperienceIcon() {
  return (
    <Card p={2} bg="brandGlass" shadow="inner">
      <Icon as={FiCompass} color="secondary" w={6} h={6} />
    </Card>
  );
}
