// This file, copyright Noah Stanley 2022
// This file is proprietary source code, NOT SUBJECT TO MOZILLA PUBLIC LICENSE VERSION 2.O

// Routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";
import OsopcloudLogo from "./OsopcloudLogo";

// Begin component
export default function Promotion() {
  const dynamicColour = useColorModeValue("gray.900", "white");
  return (
    <Container maxW="container.sm" pt={200}>
      <Stack direction="column" spacing={20}>
        <Stack direction="column" spacing={10} as="main">
          <Stack direction="row" spacing={5} justify="center">
            <Logo />
            <Center>
              <FiArrowRight size="1.7em" />
            </Center>
            <OsopcloudLogo />
          </Stack>
          <Text textAlign="center">Try Osopcloud, the new ULOSINO.</Text>
          <Link href="https://www.osopcloud.com" passHref>
            <Button as="a" leftIcon={<FiArrowRight />}>
              Visit Osopcloud
            </Button>
          </Link>
        </Stack>
        <Flex as="footer" direction={{ base: "column", md: "row" }}>
          <Stack direction="column" spacing={1}>
            <Text fontSize="xs">ULOSINO services ended May 25, 2022.</Text>
            {/* <Text fontSize="xs">
              Osopcloud is maintained independently.{" "}
              <Link href="https://www.hikium.com/osopcloud" target="_blank">Learn More...</Link>
            </Text> */}
          </Stack>
          <Spacer />
          <Link href="https://twitter.com/hikium" passHref>
            <Box
              width={100}
              height={21}
              mt={{ base: 5, md: 0 }}
              as="a"
              target="_blank"
            >
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 736.01 149.5"
              >
                <g>
                  <path
                    d="M248.22,141.32c-3,0-5.73-.63-8.19-1.89-2.46-1.26-3.69-3.15-3.69-5.67V17.12c0-2.64,1.23-4.53,3.69-5.67,2.46-1.14,5.19-1.71,8.19-1.71s5.52,.57,7.92,1.71c2.4,1.14,3.6,3.03,3.6,5.67V63.92h40.5V17.12c0-2.64,1.23-4.53,3.69-5.67,2.46-1.14,5.19-1.71,8.19-1.71s5.52,.57,7.92,1.71c2.4,1.14,3.6,3.03,3.6,5.67v116.64c0,2.52-1.2,4.41-3.6,5.67-2.4,1.26-5.04,1.89-7.92,1.89s-5.73-.63-8.19-1.89c-2.46-1.26-3.69-3.15-3.69-5.67v-51.48h-40.5v51.48c0,2.52-1.2,4.41-3.6,5.67-2.4,1.26-5.04,1.89-7.92,1.89Z"
                    fill={dynamicColour}
                  />
                  <path
                    d="M355.13,36.74c-3.48,0-6.48-1.17-9-3.51-2.52-2.34-3.78-4.95-3.78-7.83,0-3.12,1.26-5.79,3.78-8.01,2.52-2.22,5.52-3.33,9-3.33s6.6,1.11,9,3.33c2.4,2.22,3.6,4.89,3.6,8.01,0,2.88-1.2,5.49-3.6,7.83-2.4,2.34-5.4,3.51-9,3.51Zm0,104.58c-3.36,0-6.12-.78-8.28-2.34-2.16-1.56-3.24-3.3-3.24-5.22V63.02c0-2.16,1.08-3.9,3.24-5.22,2.16-1.32,4.92-1.98,8.28-1.98s6,.66,8.28,1.98c2.28,1.32,3.42,3.06,3.42,5.22v70.74c0,1.92-1.14,3.66-3.42,5.22-2.28,1.56-5.04,2.34-8.28,2.34Z"
                    fill={dynamicColour}
                  />
                  <path
                    d="M396.17,141.32c-3.24,0-5.94-.78-8.1-2.34-2.16-1.56-3.24-3.3-3.24-5.22V13.16c0-2.16,1.08-3.9,3.24-5.22,2.16-1.32,4.86-1.98,8.1-1.98s6.18,.66,8.46,1.98c2.28,1.32,3.42,3.06,3.42,5.22V88.58l34.02-31.86c1.2-1.2,2.7-1.8,4.5-1.8s3.57,.57,5.31,1.71c1.74,1.14,3.18,2.55,4.32,4.23,1.14,1.68,1.71,3.42,1.71,5.22,0,.72-.15,1.47-.45,2.25-.3,.78-.81,1.47-1.53,2.07l-21.24,19.26,26.64,37.8c.84,1.32,1.26,2.58,1.26,3.78,0,1.8-.72,3.6-2.16,5.4-1.44,1.8-3.18,3.27-5.22,4.41-2.04,1.14-4.02,1.71-5.94,1.71-2.4,0-4.32-1.02-5.76-3.06l-24.12-35.64-11.34,10.08v19.62c0,1.92-1.14,3.66-3.42,5.22-2.28,1.56-5.1,2.34-8.46,2.34Z"
                    fill={dynamicColour}
                  />
                  <path
                    d="M484.91,36.74c-3.48,0-6.48-1.17-9-3.51-2.52-2.34-3.78-4.95-3.78-7.83,0-3.12,1.26-5.79,3.78-8.01,2.52-2.22,5.52-3.33,9-3.33s6.6,1.11,9,3.33c2.4,2.22,3.6,4.89,3.6,8.01,0,2.88-1.2,5.49-3.6,7.83-2.4,2.34-5.4,3.51-9,3.51Zm0,104.58c-3.36,0-6.12-.78-8.28-2.34-2.16-1.56-3.24-3.3-3.24-5.22V63.02c0-2.16,1.08-3.9,3.24-5.22,2.16-1.32,4.92-1.98,8.28-1.98s6,.66,8.28,1.98c2.28,1.32,3.42,3.06,3.42,5.22v70.74c0,1.92-1.14,3.66-3.42,5.22-2.28,1.56-5.04,2.34-8.28,2.34Z"
                    fill={dynamicColour}
                  />
                  <path
                    d="M552.77,142.94c-7.2,0-13.77-1.71-19.71-5.13-5.94-3.42-10.68-7.92-14.22-13.5-3.54-5.58-5.31-11.55-5.31-17.91V63.2c0-1.8,1.17-3.48,3.51-5.04,2.34-1.56,5.07-2.34,8.19-2.34s5.82,.78,8.1,2.34c2.28,1.56,3.42,3.24,3.42,5.04v43.2c0,2.76,.72,5.34,2.16,7.74,1.44,2.4,3.36,4.41,5.76,6.03,2.4,1.62,5.04,2.43,7.92,2.43s5.67-.78,8.01-2.34c2.34-1.56,4.23-3.57,5.67-6.03,1.44-2.46,2.16-5.07,2.16-7.83V63.02c0-1.92,1.17-3.6,3.51-5.04s5.01-2.16,8.01-2.16c3.48,0,6.3,.72,8.46,2.16,2.16,1.44,3.24,3.12,3.24,5.04v43.38c0,6.48-1.77,12.51-5.31,18.09-3.54,5.58-8.28,10.05-14.22,13.41-5.94,3.36-12.39,5.04-19.35,5.04Z"
                    fill={dynamicColour}
                  />
                  <path
                    d="M620.27,141.32c-3.36,0-6.12-.78-8.28-2.34-2.16-1.56-3.24-3.3-3.24-5.22V63.02c0-2.16,1.08-3.9,3.24-5.22,2.16-1.32,4.92-1.98,8.28-1.98,2.88,0,5.31,.66,7.29,1.98,1.98,1.32,2.97,3.06,2.97,5.22v5.4c2.04-3.48,5.04-6.63,9-9.45,3.96-2.82,8.94-4.23,14.94-4.23,5.16,0,9.72,1.68,13.68,5.04,3.96,3.36,6.9,7.68,8.82,12.96,3.12-6.12,7.11-10.65,11.97-13.59,4.86-2.94,9.87-4.41,15.03-4.41,5.52,0,10.71,1.41,15.57,4.23,4.86,2.82,8.82,6.96,11.88,12.42,3.06,5.46,4.59,12.09,4.59,19.89v42.48c0,1.92-1.14,3.66-3.42,5.22-2.28,1.56-5.04,2.34-8.28,2.34s-5.82-.78-8.1-2.34c-2.28-1.56-3.42-3.3-3.42-5.22v-42.48c0-3.6-.69-6.6-2.07-9-1.38-2.4-3.21-4.23-5.49-5.49-2.28-1.26-4.62-1.89-7.02-1.89s-4.5,.63-6.66,1.89c-2.16,1.26-3.96,3.09-5.4,5.49-1.44,2.4-2.16,5.34-2.16,8.82v42.84c0,2.64-1.23,4.53-3.69,5.67-2.46,1.14-5.13,1.71-8.01,1.71-2.64,0-5.22-.57-7.74-1.71-2.52-1.14-3.78-3.03-3.78-5.67v-42.66c0-3.36-.69-6.24-2.07-8.64-1.38-2.4-3.18-4.26-5.4-5.58-2.22-1.32-4.59-1.98-7.11-1.98s-4.68,.6-6.84,1.8c-2.16,1.2-3.93,3-5.31,5.4-1.38,2.4-2.07,5.4-2.07,9v42.48c0,1.92-1.14,3.66-3.42,5.22-2.28,1.56-5.04,2.34-8.28,2.34Z"
                    fill={dynamicColour}
                  />
                </g>
                <path
                  d="M74.44,82.81c0,34.1-31.06,61.69-69.44,61.69"
                  fill="none"
                  stroke={dynamicColour}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
                <path
                  d="M74.69,66.69c0-34.1,31.06-61.69,69.44-61.69"
                  fill="none"
                  stroke={dynamicColour}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
                <path
                  d="M74.69,66.69c0-34.1,31.06-61.69,69.44-61.69"
                  fill="none"
                  stroke={dynamicColour}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
                <path
                  d="M94.44,67.15c0-24.55,22.36-44.42,50-44.42"
                  fill="none"
                  stroke={dynamicColour}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
              </svg>
            </Box>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}
