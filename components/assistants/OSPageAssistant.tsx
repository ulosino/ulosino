// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This component allows the user to create an OS Page

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  Text,
  useBoolean,
  useClipboard,
  Button,
  Code,
  Textarea,
} from "@chakra-ui/react";
import {
  HiOutlineArrowRight,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineExternalLink,
  HiOutlinePencil,
} from "react-icons/hi";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

import { useState } from "react";

// Begin component
export default function OSPageAssistant() {
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
  return (
    <>
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
                At the top of the page, you'll need to name the new file, using
                the <Code>name.mdx</Code> convention (for example,{" "}
                <Code>ubuntu.mdx</Code>). Underneath, paste the OS Page. Then
                choose to create a new branch to open a pull request for your
                changes.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={2}>
                <Button
                  leftIcon={<HiOutlinePencil />}
                  onClick={setFinalPage.off}
                >
                  Back to Editing
                </Button>
                <Link
                  href="https://github.com/ulosino/ulosino/new/main/public/markdown/browse"
                  passHref
                >
                  <Button leftIcon={<HiOutlineExternalLink />} as="a" ms={5}>
                    Continue on GitHub
                  </Button>
                </Link>
              </Stack>
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
                  <Stack direction={{ base: "column", md: "row" }} spacing={2}>
                    <Button onClick={setMetadataPage.off}>Go Back</Button>
                    <Button
                      leftIcon={<HiOutlineArrowRight />}
                      onClick={setFinalPage.on}
                      id="testingCOPANavigationToConclusion"
                    >
                      Continue
                    </Button>
                  </Stack>
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
                  <Stack direction={{ base: "column", md: "row" }} spacing={2}>
                    <Button onClick={setDescriptionPage.off}>Go Back</Button>
                    <Button
                      leftIcon={<HiOutlineArrowRight />}
                      onClick={setMetadataPage.on}
                      id="testingCOPANavigationToMetadata"
                    >
                      Continue
                    </Button>
                  </Stack>
                </Stack>
              )}
            </>
          )}
        </>
      ) : (
        <Stack direction="column" spacing={5}>
          <Text>
            With ULOSINO, it is easy to create a new OS Page using Markdown and
            embedded metadata.
          </Text>
          <Text>
            This assistant tool will help you fast-track the assembly of a
            compatible Operating System Page ready for publication on ULOSINO.
          </Text>
          <Text>You'll need a GitHub Account to commit your OS Page.</Text>
          <Button
            leftIcon={<HiOutlineArrowRight />}
            onClick={setDescriptionPage.on}
            ms={5}
            id="testingCOPANavigationToDescription"
          >
            Get Started
          </Button>
        </Stack>
      )}
    </>
  );
}
