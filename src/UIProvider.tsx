import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Box,
  Container,
  Stack,
  Flex,
  Icon,
  IconButton,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiHome,
  FiBookOpen,
  FiUploadCloud,
  FiInfo,
  FiChevronLeft,
  FiGithub,
  FiChevronsUp,
  FiMoreVertical,
  FiSlash,
} from "react-icons/fi";

// ULOSINO logo SVGs
const LogoSm = (props) => (
  <Icon w={4} h={4} viewBox="0 0 234 272" {...props}>
    <svg
      width="234"
      height="272"
      viewBox="0 0 117 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="58.5" cy="25" rx="58.5" ry="25" fill="#4A98A6" />
      <ellipse cx="25" cy="98.5" rx="25" ry="37.5" fill="#4A98A6" />
      <ellipse cx="92" cy="98.5" rx="25" ry="37.5" fill="#4A98A6" />
    </svg>
  </Icon>
);

const LogoLg = (props) => (
  <Icon w={8} h={8} viewBox="0 0 234 272" {...props}>
    <svg
      width="234"
      height="272"
      viewBox="0 0 117 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="58.5" cy="25" rx="58.5" ry="25" fill="#4A98A6" />
      <ellipse cx="25" cy="98.5" rx="25" ry="37.5" fill="#4A98A6" />
      <ellipse cx="92" cy="98.5" rx="25" ry="37.5" fill="#4A98A6" />
    </svg>
  </Icon>
);

// Begin user interface
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {/* Default title tag for pages which don't specify one */}
      <Head>
        <title>ULOSINO &mdash; Open source OS news</title>
      </Head>

      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <Box transition=".3s ease">
          <noscript>
            <Box bg="alert" py={8}>
              <Container maxWidth="container.xl">
                <Stack direction="row">
                  <Icon as={FiSlash} w={6} h={6} me={2} />
                  <Text>
                    Upgrade your browser or enable JavaScript to use ULOSINO.
                  </Text>
                </Stack>
              </Container>
            </Box>
          </noscript>
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            h={14}
            px={8}
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              aria-label="Go Back"
              title="Go Back"
              onClick={() => router.back()}
              icon={<FiChevronLeft />}
              size="lg"
              variant="ghost"
            />
            <Link href="/" passHref>
              <Box cursor="pointer" title="Return to ULOSINO Dashboard" mb={1}>
                <LogoSm />
              </Box>
            </Link>
            <Stack direction="row">
              <Link href="/options" passHref>
                <IconButton
                  aria-label="Open Options"
                  title="Open Options"
                  icon={<FiMoreVertical />}
                  size="lg"
                  variant="ghost"
                />
              </Link>
            </Stack>
          </Flex>
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            h={28}
            px={24}
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="/" passHref>
              <Box cursor="pointer" title="Return to ULOSINO Dashboard" mb={1}>
                <LogoLg />
              </Box>
            </Link>
            <Stack direction="row" spacing={8}>
              <Stack direction="row">
                <Link href="/" passHref>
                  <Button leftIcon={<FiHome />}>Dashboard</Button>
                </Link>
                <Link href="/support" passHref>
                  <Button leftIcon={<FiBookOpen />}>Guides</Button>
                </Link>
                <Link href="/about" passHref>
                  <IconButton
                    aria-label="Open About page"
                    title="About ULOSINO"
                    icon={<FiInfo />}
                  />
                </Link>
                <Link href="/options" passHref>
                  <IconButton
                    aria-label="Open Options"
                    title="Options &amp; Legal"
                    icon={<FiMoreVertical />}
                  />
                </Link>
              </Stack>
              <Stack direction="row">
                <Link href="/contribute" passHref>
                  <IconButton
                    aria-label="Open contribution guidelines page"
                    title="Contribute to ULOSINO"
                    display={{ base: "none", md: "flex" }}
                    icon={<FiUploadCloud />}
                    variant="ghost"
                  />
                </Link>
                <Link href="https://github.com/fernpolo/ulosino" passHref>
                  <IconButton
                    aria-label="Open GitHub to browse source code"
                    title="Open GitHub"
                    display={{ base: "none", md: "flex" }}
                    icon={<FiGithub />}
                    variant="ghost"
                  />
                </Link>
              </Stack>
            </Stack>
          </Flex>

          <Box as="main" p={4}>
            <Container maxWidth="container.xl">
              {children}
              <Link href="#" passHref>
                <IconButton
                  aria-label="Go back to the top of the page"
                  display={{ base: "none", md: "flex" }}
                  icon={<FiChevronsUp />}
                  size="sm"
                  mt={8}
                />
              </Link>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
