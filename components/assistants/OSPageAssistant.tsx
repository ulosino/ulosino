// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This experience is designed to help users create an OS Page
// It combines customisable description and metadata fields and then combines them into a compatible OS page
// The user is then directed to GitHub to name the page and commit the changes
// One of the main access points for the Assistant is the <OSPageAssistantHero>, which is shown on the OS List

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  useDisclosure,
  Center,
  Stack,
  Button,
  Text,
  Textarea,
  useClipboard,
  useBoolean,
  Code,
  DarkMode,
} from "@chakra-ui/react";
import {
  HiOutlineArrowRight,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineExternalLink,
  HiOutlinePencil,
  HiOutlinePlus,
} from "react-icons/hi";

// First party components
import Overlay from "components/Overlay";
import { ErrorFallback } from "components/ErrorFallback";

import { useState, useRef } from "react";

// Begin component
export default function OSPageAssistant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  // Description clipboard
  const [description, setDescriptionValue] = useState("");
  const descriptionInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setDescriptionValue(inputValue);
  };

  // Metadata clipboard
  let metadataValue = String.raw`# Required metadata
name: ""
summary: "" # 2-7 words - shown on the OS List
date: "" # Year-Month-Day
version: "" # Version at writing
category: ""

# Other metadata - if details unknown or not applicable, leave blank
platform: "" # Separate by commas
descends: ""
desktop: "" # Leave blank if not installed or default
shell: "bash"
packagemgr: ""
startup: "systemd"
size: ""
browser: ""
license: ""
origin: ""
website: "" # e.g. "https://www.ulosino.com"
repository: "" # e.g. "https://github.com/ulosino/ulosino"

# ULOSINO Tempo donation options
# Uncomment a specific field if available
# donate: "" # Required to enable Quick Donation Options
# donateOpenCollective: "" # Open Collective
# donateGithub: ""
# donateLiberapay: ""`;
  // Description clipboard
  const [metadata, setMetadataValue] = useState(metadataValue);
  const metadataInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setMetadataValue(inputValue);
  };

  // Combined clipboard
  const combinedValue = `---
  # Automatically generated with Create OS Page Assistant

  ${metadata}
  ---
  
  ${description}`;
  const { hasCopied, onCopy } = useClipboard(combinedValue);

  // Page system
  const [descriptionPage, setDescriptionPage] = useBoolean();
  const [metadataPage, setMetadataPage] = useBoolean();
  const [finalPage, setFinalPage] = useBoolean();

  function OverlayBody() {
    return (
      <ErrorFallback>
        {descriptionPage ? (
          <>
            {finalPage ? (
              <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={2}>
                  <Text textStyle="miniHeading" as="h6">
                    Step 3: Generate OS Page
                  </Text>
                  <Text>
                    This will merge the description and embedded metadata into a
                    compatible OS Page.
                  </Text>
                </Stack>
                <ErrorFallback>
                  {hasCopied ? (
                    <Button
                      leftIcon={<HiOutlineClipboardCheck />}
                      onClick={onCopy}
                    >
                      Copied
                    </Button>
                  ) : (
                    <Button
                      leftIcon={<HiOutlineClipboardCopy />}
                      onClick={onCopy}
                      id="testingCOPAClipboardCopy"
                    >
                      Copy OS Page to Clipboard
                    </Button>
                  )}
                </ErrorFallback>
                <Text>
                  Now we want to paste our assembled OS Page onto a new page on
                  GitHub.
                </Text>
                <Text>
                  At the top of the page, you'll need to name the new file,
                  using the <Code>name.mdx</Code> convention (for example,{" "}
                  <Code>ubuntu.mdx</Code>). Underneath, paste the OS Page. Then
                  choose to create a new branch to open a pull request for your
                  changes.
                </Text>
              </Stack>
            ) : (
              <>
                {metadataPage ? (
                  <Stack flexDirection="column" spacing={2}>
                    <Text textStyle="miniHeading" as="h6">
                      Step 2: Edit Embedded Metadata
                    </Text>
                    <Text>
                      This step is about the metadata. This metadata powers the
                      information table on OS Pages and enables our search and
                      sorting engines.
                    </Text>
                    <ErrorFallback>
                      <Textarea
                        value={metadata}
                        onChange={metadataInputChange}
                        size="sm"
                        rounded="xl"
                        h={300}
                        id="testingCOPAMetadataInput"
                      />
                    </ErrorFallback>
                  </Stack>
                ) : (
                  <Stack direction="column" spacing={2}>
                    <Text textStyle="miniHeading" as="h6">
                      Step 1: Create a Description
                    </Text>
                    <Text>
                      This is where we want to describe the operating system in
                      detail. Aim for a paragraph. Refer to the{" "}
                      <Link
                        href="https://github.com/ulosino/.github/blob/main/CONTRIBUTING.md"
                        passHref
                      >
                        Contribution Guide
                      </Link>{" "}
                      for more information.
                    </Text>
                    <ErrorFallback>
                      <Textarea
                        value={description}
                        onChange={descriptionInputChange}
                        size="sm"
                        rounded="xl"
                        h={300}
                        id="testingCOPADescriptionInput"
                      />
                    </ErrorFallback>
                  </Stack>
                )}
              </>
            )}
          </>
        ) : (
          <Stack direction="column" spacing={5}>
            <Text>
              With ULOSINO, it is easy to create a new OS Page using Markdown
              and embedded metadata.
            </Text>
            <Text>
              This assistant tool will help you fast-track the assembly of a
              compatible Operating System Page ready for publication on ULOSINO.
            </Text>
            <Text>You'll need a GitHub Account to commit your OS Page.</Text>
          </Stack>
        )}
      </ErrorFallback>
    );
  }

  function OverlayFooter() {
    return (
      <Stack direction="row" spacing={2}>
        {descriptionPage ? (
          <>
            {finalPage ? (
              <Center>
                <Button
                  leftIcon={<HiOutlinePencil />}
                  onClick={setFinalPage.off}
                  ref={cancelRef}
                >
                  Back to Editing
                </Button>
              </Center>
            ) : (
              <>
                {metadataPage ? (
                  <Button onClick={setMetadataPage.off} ref={cancelRef}>
                    Go Back
                  </Button>
                ) : (
                  <Button onClick={setDescriptionPage.off} ref={cancelRef}>
                    Go Back
                  </Button>
                )}
              </>
            )}
          </>
        ) : (
          <Button onClick={onClose} ref={cancelRef}>
            Cancel
          </Button>
        )}
        {descriptionPage ? (
          <>
            {finalPage ? (
              <Link
                href="https://github.com/ulosino/ulosino/new/main/public/markdown/browse"
                passHref
              >
                <Button leftIcon={<HiOutlineExternalLink />} as="a" ms={5}>
                  Continue on GitHub
                </Button>
              </Link>
            ) : (
              <>
                {metadataPage ? (
                  <Button
                    leftIcon={<HiOutlineArrowRight />}
                    onClick={setFinalPage.on}
                    ms={5}
                    id="testingCOPANavigationToConclusion"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    leftIcon={<HiOutlineArrowRight />}
                    onClick={setMetadataPage.on}
                    ms={5}
                    id="testingCOPANavigationToMetadata"
                  >
                    Continue
                  </Button>
                )}
              </>
            )}
          </>
        ) : (
          <Button
            leftIcon={<HiOutlineArrowRight />}
            onClick={setDescriptionPage.on}
            ms={5}
            id="testingCOPANavigationToDescription"
          >
            Get Started
          </Button>
        )}
      </Stack>
    );
  }

  return (
    <>
      <DarkMode>
        {isOpen ? (
          <Button leftIcon={<HiOutlinePlus />} isActive>
            Get Started
          </Button>
        ) : (
          <Button
            leftIcon={<HiOutlinePlus />}
            onClick={onOpen}
            id="testingCOPATrigger"
          >
            Get Started
          </Button>
        )}
      </DarkMode>
      <Overlay
        isOpen={isOpen}
        onClose={onClose}
        header="Create an OS Page"
        body={<OverlayBody />}
        footer={<OverlayFooter />}
        cancelRef={cancelRef}
        useAlertDialog={false}
      />
    </>
  );
}
