// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the Matches interface, supplying the switches and result cards
// Forked from the ulosino/matches repository at version 1.1.0

// Suspense and performance
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingServer } from "components/Loading";

// Chakra UI, icons, and other design imports
import {
  Text,
  Icon,
  Button,
  Box,
  Stack,
  Flex,
  Spacer,
  useBoolean,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  HiLibrary,
  HiDesktopComputer,
  HiChip,
  HiTemplate,
  HiAcademicCap,
} from "react-icons/hi";
import { useStyleConfig } from "@chakra-ui/react";
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
const AlpineCard = dynamic(() => import("components/matches/cards/Alpine"), {
  suspense: true,
});
const ArchCard = dynamic(() => import("components/matches/cards/Arch"), {
  suspense: true,
});
const GentooCard = dynamic(() => import("components/matches/cards/Gentoo"), {
  suspense: true,
});
const GardenCard = dynamic(() => import("components/matches/cards/Garden"), {
  suspense: true,
});
const FreeBSDCard = dynamic(() => import("components/matches/cards/FreeBSD"), {
  suspense: true,
});
const NetBSDCard = dynamic(() => import("components/matches/cards/NetBSD"), {
  suspense: true,
});
const MidnightBSDCard = dynamic(
  () => import("components/matches/cards/MidnightBSD"),
  {
    suspense: true,
  }
);
const GhostBSDCard = dynamic(
  () => import("components/matches/cards/GhostBSD"),
  {
    suspense: true,
  }
);
const AntiXCard = dynamic(() => import("components/matches/cards/AntiX"), {
  suspense: true,
});
const MXLinuxCard = dynamic(() => import("components/matches/cards/MXLinux"), {
  suspense: true,
});
const Q4OSCard = dynamic(() => import("components/matches/cards/Q4OS"), {
  suspense: true,
});
const UbuntuMateCard = dynamic(
  () => import("components/matches/cards/UbuntuMate"),
  {
    suspense: true,
  }
);
const ElementaryCard = dynamic(
  () => import("components/matches/cards/Elementary"),
  {
    suspense: true,
  }
);
const PopOSCard = dynamic(() => import("components/matches/cards/PopOS"), {
  suspense: true,
});
const NitruxCard = dynamic(() => import("components/matches/cards/Nitrux"), {
  suspense: true,
});
const SolusCard = dynamic(() => import("components/matches/cards/Solus"), {
  suspense: true,
});
const ZorinCard = dynamic(() => import("components/matches/cards/Zorin"), {
  suspense: true,
});
const UbuntuCard = dynamic(() => import("components/matches/cards/Ubuntu"), {
  suspense: true,
});
const FedoraCard = dynamic(() => import("components/matches/cards/Fedora"), {
  suspense: true,
});
const LinuxMintCard = dynamic(
  () => import("components/matches/cards/LinuxMint"),
  {
    suspense: true,
  }
);
const KDENeonCard = dynamic(() => import("components/matches/cards/KDENeon"), {
  suspense: true,
});
const ManjaroCard = dynamic(() => import("components/matches/cards/Manjaro"), {
  suspense: true,
});

export default function MatchesExperience() {
  // Quiz preferences
  const [linux, setLinux] = useBoolean();
  const [gui, setGui] = useBoolean();
  const [legacyHardware, setLegacyHardware] = useBoolean();
  const [managed, setManaged] = useBoolean();
  const [windows, setWindows] = useBoolean();

  const switchButtonSize = useBreakpointValue({ base: "md", md: "sm" });
  const switchButtonPaddingY = useBreakpointValue({ base: 4, md: 0 });

  // Begin page
  return (
    <Stack direction="column" spacing={10}>
      {/* Preferences switching area */}
      <Stack direction="column" spacing={4}>
        <Text textStyle="miniHeading" as="h6">
          Find your Match
        </Text>
        {/* Linux/BSD */}
        <Flex direction={["column", "column", "row"]}>
          <Stack direction="row" spacing={4}>
            <Icon as={HiLibrary} w={8} h={8} aria-label="Library graphic" />
            <Text pt={1}>
              Using {linux ? "BSD descendants" : "the Linux kernel"}
            </Text>
          </Stack>
          <Spacer />
          <Button
            onClick={setLinux.toggle}
            size={switchButtonSize}
            mt={switchButtonPaddingY}
          >
            Switch to {linux ? "Linux" : "BSD"}
          </Button>
        </Flex>
        {/* GUI/CLI */}
        <Flex direction={["column", "column", "row"]}>
          <Stack direction="row" spacing={4}>
            <Icon
              as={HiDesktopComputer}
              w={8}
              h={8}
              aria-label="Display interface graphic"
            />
            <Text pt={1}>Using {gui ? "a CLI" : "graphical interfaces"}</Text>
          </Stack>
          <Spacer />
          <Button
            onClick={setGui.toggle}
            size={switchButtonSize}
            mt={switchButtonPaddingY}
          >
            Switch to a {gui ? "GUI" : "CLI"}
          </Button>
        </Flex>
        {linux ? (
          ""
        ) : (
          <>
            {gui ? (
              ""
            ) : (
              <>
                {/* Modern/low-end hardware */}
                <Flex direction={["column", "column", "row"]}>
                  <Stack direction="row" spacing={4}>
                    <Icon as={HiChip} w={8} h={8} aria-label="CPU graphic" />
                    <Text pt={1}>
                      Using {legacyHardware ? "older" : "modern"} hardware
                    </Text>
                  </Stack>
                  <Spacer />
                  <Button
                    onClick={setLegacyHardware.toggle}
                    size={switchButtonSize}
                    mt={switchButtonPaddingY}
                  >
                    Switch to {legacyHardware ? "modern" : "older"} hardware
                  </Button>
                </Flex>
              </>
            )}
            {legacyHardware ? (
              ""
            ) : (
              <>
                {/* Managed/advanced systems */}
                <Flex direction={["column", "column", "row"]}>
                  <Stack direction="row" spacing={4}>
                    <Icon
                      as={HiAcademicCap}
                      w={8}
                      h={8}
                      aria-label="Academic cap graphic"
                    />
                    <Text pt={1}>
                      Using {managed ? "advanced" : "managed"} systems
                    </Text>
                  </Stack>
                  <Spacer />
                  <Button
                    onClick={setManaged.toggle}
                    size={switchButtonSize}
                    mt={switchButtonPaddingY}
                  >
                    Switch to {managed ? "managed" : "advanced"} systems
                  </Button>
                </Flex>
              </>
            )}
            {gui ? (
              ""
            ) : (
              <>
                {managed ? (
                  ""
                ) : (
                  <>
                    {legacyHardware ? (
                      ""
                    ) : (
                      <>
                        {/* Windows/macOS style interface */}
                        <Flex direction={["column", "column", "row"]}>
                          <Stack direction="row" spacing={4}>
                            <Icon
                              as={HiTemplate}
                              w={8}
                              h={8}
                              aria-label="Layout graphic"
                            />
                            <Text pt={1}>
                              Using {windows ? "macOS" : "Windows"} style
                              interfaces
                            </Text>
                          </Stack>
                          <Spacer />
                          <Button
                            onClick={setWindows.toggle}
                            size={switchButtonSize}
                            mt={switchButtonPaddingY}
                            id="testingMatchesSwitchButton"
                          >
                            Switch to {windows ? "Windows" : "macOS"} style
                            interfaces
                          </Button>
                        </Flex>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Stack>

      {/* Result console */}
      <Card variant="solid">
        <Stack direction="column" spacing={2}>
          <Text textStyle="miniHeading" as="h6">
            Found Matches
          </Text>
          {linux ? (
            <>
              {gui ? (
                // BSD CLI
                <Stack direction="column" spacing={2}>
                  <Suspense fallback={<LoadingServer />}>
                    <FreeBSDCard />
                  </Suspense>
                  <Suspense fallback={<LoadingServer />}>
                    <NetBSDCard />
                  </Suspense>
                </Stack>
              ) : (
                // BSD GUI
                <Stack direction="column" spacing={2}>
                  <Suspense fallback={<LoadingServer />}>
                    <GhostBSDCard />
                  </Suspense>
                  <Suspense fallback={<LoadingServer />}>
                    <MidnightBSDCard />
                  </Suspense>
                  <Suspense fallback={<LoadingServer />}>
                    <FreeBSDCard />
                  </Suspense>
                </Stack>
              )}
            </>
          ) : (
            <>
              {gui ? (
                <>
                  {managed ? (
                    // Advanced Linux CLI
                    <Stack direction="column" spacing={2}>
                      <Suspense fallback={<LoadingServer />}>
                        <GentooCard />
                      </Suspense>
                      <Suspense fallback={<LoadingServer />}>
                        <GardenCard />
                      </Suspense>
                    </Stack>
                  ) : (
                    // Managed Linux CLI
                    <Stack direction="column" spacing={2}>
                      <Suspense fallback={<LoadingServer />}>
                        <AlpineCard />
                      </Suspense>
                      <Suspense fallback={<LoadingServer />}>
                        <ArchCard />
                      </Suspense>
                    </Stack>
                  )}
                </>
              ) : (
                <>
                  {legacyHardware ? (
                    // Linux for older hardware
                    <Stack direction="column" spacing={2}>
                      <Suspense fallback={<LoadingServer />}>
                        <AntiXCard />
                      </Suspense>
                      <Suspense fallback={<LoadingServer />}>
                        <MXLinuxCard />
                      </Suspense>
                      <Suspense fallback={<LoadingServer />}>
                        <Q4OSCard />
                      </Suspense>
                      <Suspense fallback={<LoadingServer />}>
                        <UbuntuMateCard />
                      </Suspense>
                    </Stack>
                  ) : (
                    <>
                      {managed ? (
                        // Advanced Linux
                        <Stack direction="column" spacing={2}>
                          <Suspense fallback={<LoadingServer />}>
                            <ManjaroCard />
                          </Suspense>
                          <Suspense fallback={<LoadingServer />}>
                            <KDENeonCard />
                          </Suspense>
                        </Stack>
                      ) : (
                        <>
                          {windows ? (
                            // Managed macOS-style Linux
                            <Stack direction="column" spacing={2}>
                              <Suspense fallback={<LoadingServer />}>
                                <ElementaryCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <PopOSCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <NitruxCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <UbuntuCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <FedoraCard />
                              </Suspense>
                            </Stack>
                          ) : (
                            // Managed Windows-style Linux
                            <Stack direction="column" spacing={2}>
                              <Suspense fallback={<LoadingServer />}>
                                <LinuxMintCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <ZorinCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <UbuntuCard />
                              </Suspense>
                              <Suspense fallback={<LoadingServer />}>
                                <SolusCard />
                              </Suspense>
                            </Stack>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
