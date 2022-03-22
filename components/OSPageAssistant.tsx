// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  useDisclosure,
  Center,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Textarea,
  useClipboard,
  useBoolean,
  MenuItem,
} from "@chakra-ui/react";

import { useState } from "react";

// Begin component
export default function NewOSPageDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Description clipboard
  const [description, setDescriptionValue] = useState("");
  const descriptionInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setDescriptionValue(inputValue);
  };

  // Metadata clipboard
  // const [metadataUseDonationOptions, setMetadataUseDonationOptions] =
  //   useBoolean();
  let metadataValue = String.raw`# Required metadata
name: ""
summary: "" # 2-7 words - shown on OS List
date: "" # Year-Month-Day
version: "" # Version at writing
category: ""

# Other metadata - if details unknown or not applicable, leave blank
platform: "" # Separate by commas
descends: ""
desktop: "" # If the OS does not boot a desktop by default, or doesn't ship one, leave 'desktop' blank
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

  // Combined value clipboard
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
      <Center>
        <MenuItem onClick={onOpen}>Create a New OS Page</MenuItem>
      </Center>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent rounded="xl" my={5}>
          <ModalHeader fontSize="2xl">Create an OS Page</ModalHeader>
          <ModalBody>
            <Stack direction="column" spacing={5}>
              {descriptionPage ? (
                <>
                  {finalPage ? (
                    <>
                      <Stack direction="column" spacing={5}>
                        <Text textStyle="miniHeading" as="h6">
                          Step 3: Generate OS Page
                        </Text>
                        <Text>
                          This will merge the description and embedded metadata
                          into a compatible OS Page.
                        </Text>
                        <Button onClick={onCopy}>
                          {hasCopied ? "Copied" : "Copy OS Page to Clipboard"}
                        </Button>
                        <Text>
                          Now we want to paste our assembled OS Page onto a new
                          page on GitHub. Name the new file, paste the OS Page,
                          and create a new branch to open a pull request for
                          your changes.
                        </Text>
                        <Text mb={0}>
                          You'll need a GitHub Account to commit your OS Page.
                        </Text>
                      </Stack>
                    </>
                  ) : (
                    <>
                      {metadataPage ? (
                        <Stack direction="column" spacing={2}>
                          <Text textStyle="miniHeading" as="h6">
                            Step 2: Edit Embedded Metadata
                          </Text>
                          <Text>
                            This step is about the metadata. This metadata
                            powers the information table on OS Pages and enables
                            our search and sorting engines.
                          </Text>
                          <Textarea
                            value={metadata}
                            onChange={metadataInputChange}
                            size="sm"
                            rounded="xl"
                            h={300}
                          />
                        </Stack>
                      ) : (
                        <Stack direction="column" spacing={2}>
                          <Text textStyle="miniHeading" as="h6">
                            Step 1: Create a Description
                          </Text>
                          <Text>
                            This is where we want to describe the operating
                            system in detail. Aim for a paragraph. Refer to the
                            Contribution Guide for guidelines for how to
                            complete this step.
                          </Text>
                          <Textarea
                            value={description}
                            onChange={descriptionInputChange}
                            size="sm"
                            rounded="xl"
                            h={150}
                          />
                        </Stack>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <Text>
                    With ULOSINO, it is easy to create a new OS page using
                    Markdown and embedded metadata.
                  </Text>
                  <Text>
                    This assistant tool will help you fast-track the assembly of
                    a compatible operating system page ready for publication on
                    ULOSINO.
                  </Text>
                </>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter>
            {descriptionPage ? (
              <>
                {finalPage ? (
                  <Center>
                    <Button onClick={setFinalPage.off}>Back to Editing</Button>
                  </Center>
                ) : (
                  <>
                    {metadataPage ? (
                      <Button onClick={setMetadataPage.off}>Go Back</Button>
                    ) : (
                      <Button
                        onClick={setDescriptionPage.off}
                        colorScheme="red"
                      >
                        Go Back
                      </Button>
                    )}
                  </>
                )}
              </>
            ) : (
              <Button onClick={onClose}>Cancel</Button>
            )}
            {descriptionPage ? (
              <>
                {finalPage ? (
                  <Link
                    href="https://github.com/ulosino/ulosino/new/main/public/markdown/browse"
                    passHref
                  >
                    <Button as="a" ms={5}>
                      Continue on GitHub
                    </Button>
                  </Link>
                ) : (
                  <>
                    {metadataPage ? (
                      <Button onClick={setFinalPage.on} ms={5}>
                        Continue
                      </Button>
                    ) : (
                      <Button onClick={setMetadataPage.on} ms={5}>
                        Continue
                      </Button>
                    )}
                  </>
                )}
              </>
            ) : (
              <Button onClick={setDescriptionPage.on} ms={5}>
                Get Started
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
