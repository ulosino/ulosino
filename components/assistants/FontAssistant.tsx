// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This Assistant allows the user to change the font

// Suspense and performance
import {
  deleteFromStorage,
  useLocalStorage,
  writeStorage,
} from "@rehooks/local-storage";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Button,
  Text,
  Box,
  useDisclosure,
  useStyleConfig,
  Heading,
  useBoolean,
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

// First party components
import Overlay from "components/Overlay";

import { useRef } from "react";
import Link from "next/link";

// Begin component
export default function FontAssistant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();
  const [isUppercase, setUppercase] = useBoolean();
  const [isBlurred, setBlur] = useBoolean();

  // Get preferences
  const [accessibleFonts] = useLocalStorage("P3PrefAccessibleFonts");

  // Buttons to open the modal
  function ModalButton() {
    return (
      <>
        {isOpen ? (
          <Button isActive>Apply an Alternative Font</Button>
        ) : (
          <Button onClick={onOpen}>Apply an Alternative Font</Button>
        )}
      </>
    );
  }

  // Gracefully close the modal once the deletion has completed
  function ApplyDefault() {
    deleteFromStorage("P3PrefAccessibleFonts");
    window.location.reload();
    onClose();
  }
  function ApplyHyperlegible() {
    writeStorage("P3PrefAccessibleFonts", "hyperlegible");
    window.location.reload();
    onClose();
  }
  function ApplySystem() {
    writeStorage("P3PrefAccessibleFonts", "system");
    window.location.reload();
    onClose();
  }

  const accessibleFont =
    typeof window !== "undefined"
      ? localStorage.getItem("P3PrefAccessibleFonts")
      : "";

  const systemFont =
    typeof window !== "undefined"
      ? localStorage.getItem("P3PrefAccessibleFonts") === "system"
      : "";

  function ModalBody() {
    return (
      <Stack direction="column" spacing={5}>
        <Text>
          You are currently using{" "}
          {accessibleFont
            ? systemFont
              ? "your operating system's font"
              : "Atkinson Hyperlegible, a font optimised for accessibility"
            : "Public Sans, the default ULOSINO font"}
          .
        </Text>
        <Stack
          direction="column"
          spacing={2}
          // @ts-expect-error
          sx={isBlurred ? { filter: "blur(1px)" } : ""}
        >
          <Card variant="button" onClick={ApplyDefault}>
            <Heading size="md" fontFamily="Public Sans">
              Public Sans
            </Heading>
            <Stack direction="row" spacing={5} fontFamily="Public Sans">
              <Text>
                {isUppercase
                  ? "ABCDEFGHIJKLMNOPQRSXYZ"
                  : "abcdefghijklmnopqrsxyz"}{" "}
              </Text>
              <Text>0123456789</Text>
            </Stack>
          </Card>
          <Card variant="button" onClick={ApplyHyperlegible}>
            <Heading size="md" fontFamily="Atkinson Hyperlegible">
              Atkinson Hyperlegible
            </Heading>
            <Stack
              direction="row"
              spacing={5}
              fontFamily="Atkinson Hyperlegible"
            >
              <Text>
                {isUppercase
                  ? "ABCDEFGHIJKLMNOPQRSXYZ"
                  : "abcdefghijklmnopqrsxyz"}{" "}
              </Text>
              <Text>0123456789</Text>
            </Stack>
          </Card>
          <Card variant="button" onClick={ApplySystem}>
            <Heading size="md" fontFamily="system-ui">
              System Font
            </Heading>
            <Stack direction="row" spacing={5} fontFamily="system-ui">
              <Text>
                {isUppercase
                  ? "ABCDEFGHIJKLMNOPQRSXYZ"
                  : "abcdefghijklmnopqrsxyz"}{" "}
              </Text>
              <Text>0123456789</Text>
            </Stack>
          </Card>
        </Stack>
        <Text fontSize="xs">
          <Link href="https://public-sans.digital.gov">Public Sans</Link> is
          developed by the United States Web Design System and contributors.{" "}
          <Link href="https://brailleinstitute.org/freefont">
            Atkinson Hyperlegible
          </Link>{" "}
          is developed by the Braille Institute of America and contributors.
        </Text>
      </Stack>
    );
  }

  function ModalFooter() {
    return (
      <>
        <Button
          onClick={setBlur.toggle}
          display={{ base: "none", sm: "flex" }}
          size="sm"
        >
          {isBlurred ? "Disable" : "Enable"} Blur (1px)
        </Button>
        <Button
          onClick={setUppercase.toggle}
          display={{ base: "none", sm: "flex" }}
          size="sm"
          ms={2}
        >
          Compare {isUppercase ? "Lowercase" : "Uppercase"}
        </Button>
        <Button ref={cancelRef} onClick={onClose} ms={2}>
          Cancel
        </Button>
      </>
    );
  }

  return (
    <>
      <ModalButton />
      <Overlay
        header="Select Application Font"
        body={<ModalBody />}
        footer={<ModalFooter />}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        useAlertDialog={false}
      />
    </>
  );
}
