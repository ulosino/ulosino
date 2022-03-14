// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This gives a warning for users not using JavaScript

// Chakra UI, icons, and other design imports
import {
  Stack,
  Center,
  Box,
  Text,
  Icon,
  useStyleConfig,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import { HiOutlineExclamationCircle } from "react-icons/hi";

// Begin components
// This is shown on the home page
export function NoJSWarningHome() {
  return (
    <Card variant="solid">
      <Stack direction="row" spacing={4}>
        <Center>
          <Icon
            as={HiOutlineExclamationCircle}
            w={6}
            h={6}
            aria-label="Exclamation circle indicating an error"
            title="Exclamation circle indicating an error"
          />
        </Center>
        <Text>Upgrade your browser or enable JavaScript to use ULOSINO</Text>
      </Stack>
    </Card>
  );
}

// This is shown where features are disabled, e.g. Matches
export function NoJSWarningFeaturesDisabled() {
  return (
    <Card variant="solid">
      <Stack direction="row" spacing={4}>
        <Center>
          <Icon
            as={HiOutlineExclamationCircle}
            w={6}
            h={6}
            aria-label="Exclamation circle indicating an error"
            title="Exclamation circle indicating an error"
          />
        </Center>
        <Text>Features are disabled when you disable JavaScript</Text>
      </Stack>
    </Card>
  );
}
