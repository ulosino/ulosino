// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This draws a fake "window" graphic
// Inspired by https://vercel.com/design/window

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import {
  useStyleConfig,
  Box,
  Divider,
  Flex,
  Icon,
  Spacer,
  Stack,
  Text,
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
import {
  HiOutlineDotsCircleHorizontal,
  HiOutlineXCircle,
} from "react-icons/hi";

interface OverlayProps {
  windowName: string;
  children: ReactElement;
}

// Begin component
export default function Window({
  windowName,
  children,
}: OverlayProps): ReactElement {
  return (
    <Card
      variant="solid"
      // Disable padding on the left and right to allow for a full width divider line
      px={0}
      display={{ base: "none", md: "block" }}
      aria-label="Computer window graphic"
      aria-disabled
    >
      <Stack direction="column">
        <Flex pb={2} px={4}>
          <Icon as={HiOutlineDotsCircleHorizontal} aria-label="Minimise icon" />
          <Spacer />
          <Text fontSize="xs">ULOSINO &mdash; {windowName}</Text>
          <Spacer />
          <Icon as={HiOutlineXCircle} aria-label="Close icon" />
        </Flex>
        <Divider m={0} />
        <Box pt={2} px={4}>
          {children}
        </Box>
      </Stack>
    </Card>
  );
}
