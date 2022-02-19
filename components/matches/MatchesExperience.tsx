// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the Matches interface, supplying the switches and result cards
// Forked from the ulosino/matches repository at version 1.1.0

// Dynamic loading
import dynamic from "next/dynamic";
import Loading from "components/Loading";

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
  loading: () => <Loading />,
});
const ArchCard = dynamic(() => import("components/matches/cards/Arch"), {
  loading: () => <Loading />,
});
const GentooCard = dynamic(() => import("components/matches/cards/Gentoo"), {
  loading: () => <Loading />,
});
const GardenCard = dynamic(() => import("components/matches/cards/Garden"), {
  loading: () => <Loading />,
});
const FreeBSDCard = dynamic(() => import("components/matches/cards/FreeBSD"), {
  loading: () => <Loading />,
});
const NetBSDCard = dynamic(() => import("components/matches/cards/NetBSD"), {
  loading: () => <Loading />,
});
const MidnightBSDCard = dynamic(
  () => import("components/matches/cards/MidnightBSD"),
  {
    loading: () => <Loading />,
  }
);
const GhostBSDCard = dynamic(
  () => import("components/matches/cards/GhostBSD"),
  {
    loading: () => <Loading />,
  }
);
const AntiXCard = dynamic(() => import("components/matches/cards/AntiX"), {
  loading: () => <Loading />,
});
const MXLinuxCard = dynamic(() => import("components/matches/cards/MXLinux"), {
  loading: () => <Loading />,
});
const Q4OSCard = dynamic(() => import("components/matches/cards/Q4OS"), {
  loading: () => <Loading />,
});
const UbuntuMateCard = dynamic(
  () => import("components/matches/cards/UbuntuMate"),
  {
    loading: () => <Loading />,
  }
);
const ElementaryCard = dynamic(
  () => import("components/matches/cards/Elementary"),
  {
    loading: () => <Loading />,
  }
);
const PopOSCard = dynamic(() => import("components/matches/cards/PopOS"), {
  loading: () => <Loading />,
});
const NitruxCard = dynamic(() => import("components/matches/cards/Nitrux"), {
  loading: () => <Loading />,
});
const SolusCard = dynamic(() => import("components/matches/cards/Solus"), {
  loading: () => <Loading />,
});
const ZorinCard = dynamic(() => import("components/matches/cards/Zorin"), {
  loading: () => <Loading />,
});
const UbuntuCard = dynamic(() => import("components/matches/cards/Ubuntu"), {
  loading: () => <Loading />,
});
const LinuxMintCard = dynamic(
  () => import("components/matches/cards/LinuxMint"),
  {
    loading: () => <Loading />,
  }
);
const KDENeonCard = dynamic(() => import("components/matches/cards/KDENeon"), {
  loading: () => <Loading />,
});
const ManjaroCard = dynamic(() => import("components/matches/cards/Manjaro"), {
  loading: () => <Loading />,
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
        <Text textStyle="secondary" as="h6">
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
                            id="testing-switchButton"
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
          <Text textStyle="secondary" as="h6">
            Found Matches
          </Text>
          {linux ? (
            <>
              {gui ? (
                // BSD CLI
                <Stack direction="column" spacing={2}>
                  <FreeBSDCard />
                  <NetBSDCard />
                </Stack>
              ) : (
                // BSD GUI
                <Stack direction="column" spacing={2}>
                  <GhostBSDCard />
                  <MidnightBSDCard />
                  <FreeBSDCard />
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
                      <GentooCard />
                      <GardenCard />
                    </Stack>
                  ) : (
                    // Managed Linux CLI
                    <Stack direction="column" spacing={2}>
                      <AlpineCard />
                      <ArchCard />
                    </Stack>
                  )}
                </>
              ) : (
                <>
                  {legacyHardware ? (
                    // Linux for older hardware
                    <Stack direction="column" spacing={2}>
                      <AntiXCard />
                      <MXLinuxCard />
                      <Q4OSCard />
                      <UbuntuMateCard />
                    </Stack>
                  ) : (
                    <>
                      {managed ? (
                        // Advanced Linux
                        <Stack direction="column" spacing={2}>
                          <ManjaroCard />
                          <KDENeonCard />
                        </Stack>
                      ) : (
                        <>
                          {windows ? (
                            // Managed macOS-style Linux
                            <Stack direction="column" spacing={2}>
                              <ElementaryCard />
                              <PopOSCard />
                              <NitruxCard />
                              <UbuntuCard />
                            </Stack>
                          ) : (
                            // Managed Windows-style Linux
                            <Stack direction="column" spacing={2}>
                              <LinuxMintCard />
                              <ZorinCard />
                              <UbuntuCard />
                              <SolusCard />
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
