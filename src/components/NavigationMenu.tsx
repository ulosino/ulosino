import Link from "next/link";

import {
  Heading,
  Text,
  Icon,
  Button,
  IconButton,
  Box,
  Stack,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  HiMenu,
  HiChevronRight,
  HiCode,
  HiOutlineChatAlt2,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

import { useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function NavigationMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonVariant = useBreakpointValue({
    base: "ghost",
    md: "outline",
  });
  const buttonSize = useBreakpointValue({
    base: "lg",
    md: "md",
  });
  return (
    <>
      <IconButton
        icon={<HiMenu />}
        variant={buttonVariant}
        size={buttonSize}
        aria-label="Show the ULOSINO navigation menu"
        onClick={onOpen}
        id="testing-display-menu"
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent rounded="2xl">
          <ModalHeader />
          <ModalCloseButton rounded="xl" />
          <ModalBody>
            <Stack direction="column" spacing={8} my={4}>
              {/* Primary navigation */}
              <Stack direction="column" mt={2}>
                <Link href="/" passHref>
                  <Card onClick={onClose} variant="button" cursor="pointer">
                    <Flex>
                      <Heading size="md">Home</Heading>
                      <Spacer />
                      <Icon as={HiChevronRight} w={4} h={4} mt={1} />
                    </Flex>
                  </Card>
                </Link>
                <Link href="/browse" passHref>
                  <Card onClick={onClose} variant="button">
                    <Flex mb={1}>
                      <Heading size="md">Browse</Heading>
                      <Spacer />
                      <Icon as={HiChevronRight} w={4} h={4} mt={1} />
                    </Flex>
                    <Text fontSize="xs">
                      Make a search or browse all of ULOSINO.
                    </Text>
                  </Card>
                </Link>
                <Link href="/search" passHref>
                  <Card onClick={onClose} variant="button">
                    <Flex mb={1}>
                      <Heading size="md">Advanced Search</Heading>
                      <Spacer />
                      <Icon as={HiChevronRight} w={4} h={4} mt={1} />
                    </Flex>
                    <Text fontSize="xs">
                      Make a search from the full ULOSINO metadata collection.
                    </Text>
                  </Card>
                </Link>
              </Stack>
              <Stack direction="column" spacing={2}>
                {/* Mobile-only social links to compensate for hidden footer */}
                <Stack
                  direction="column"
                  spacing={2}
                  display={{ base: "flex", md: "none" }}
                >
                  <Link href="https://twitter.com/ulosino" passHref>
                    <Button
                      leftIcon={<FiTwitter />}
                      size="sm"
                      onClick={onClose}
                    >
                      Twitter
                    </Button>
                  </Link>
                  <Link href="https://github.com/ulosino/ulosino" passHref>
                    <Button leftIcon={<HiCode />} size="sm" onClick={onClose}>
                      GitHub &amp; Source
                    </Button>
                  </Link>
                </Stack>
                {/* External navigation and preferences */}
                <Stack direction="column" spacing={2} display="flex">
                  <Link href="/contact" passHref>
                    <Button
                      leftIcon={<HiOutlineChatAlt2 />}
                      size="sm"
                      onClick={onClose}
                    >
                      Contact ULOSINO
                    </Button>
                  </Link>
                  <Button
                    leftIcon={<HiOutlineColorSwatch />}
                    size="sm"
                    onClick={toggleColorMode}
                  >
                    Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
