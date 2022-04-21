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
  Textarea,
  Input,
  Flex,
  Spacer,
  Box,
  useStyleConfig,
  FormControl,
  FormLabel,
  Heading,
  Badge,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  Code,
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
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineExternalLink,
  HiOutlinePencil,
  HiOutlineSupport,
  HiOutlineUpload,
} from "react-icons/hi";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

import { useState } from "react";

// Begin component
export default function CreateOSPageAssistant() {
  // Category array
  const [activeTab, setActiveTab] = useState(0);
  const categoryArray = [
    {
      label: "Desktop",
    },
    {
      label: "Mobile",
    },
    {
      label: "Advanced",
    },
    { label: "Enterprise" },
    { label: "Utility" },
    { label: "Research" },
  ];

  // Name
  const [name, setNameValue] = useState("");
  const nameInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setNameValue(inputValue);
  };

  // Project website
  const [website, setWebsiteValue] = useState("");
  const websiteInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setNameValue(inputValue);
  };

  // Project repository website
  const [repository, setRepositoryValue] = useState("");
  const repositoryInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setNameValue(inputValue);
  };

  // Description
  const [description, setDescriptionValue] = useState("");
  const descriptionInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setDescriptionValue(inputValue);
  };

  // Summary
  const [summary, setSummaryValue] = useState("");
  const summaryInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setSummaryValue(inputValue);
  };

  // Core metadata
  let metadataValue = String.raw`date: "" # Year-Month-Day
version: "" # Version at writing
platform: "" # Separate by commas
descends: ""
desktop: "" # Leave blank if not installed or default
shell: "bash"
packagemgr: ""
startup: "systemd"
size: ""
browser: ""
license: ""
origin: ""`;
  const [metadata, setMetadataValue] = useState(metadataValue);
  const metadataInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setMetadataValue(inputValue);
  };

  // ULOSINO Tempo metadata
  let donationMetadataValue = String.raw`# donate: "" # Required to enable Quick Donation Options
# donateOpenCollective: "" # Open Collective
# donateGithub: ""
# donateLiberapay: ""`;
  const [donationMetadata, setDonationMetadataValue] = useState(metadataValue);
  const donationMetadataInputChange = (e: { target: { value: string } }) => {
    let inputValue = e.target.value;
    setMetadataValue(inputValue);
  };

  // Generated OS Page
  const combinedValue = `---
  # Generated with Create OS Page Assistant (3.6.0)

  # Core metadata
  name: "${name}"
  category: "${categoryArray[activeTab].label}"
  summary: "${summary}"
  ${metadata}
  website: "${website}"
  repository: "${repository}"

  # ULOSINO Tempo metadata
  ${donationMetadata}
  ---
  
  ${description}`;
  const { hasCopied, onCopy } = useClipboard(combinedValue);

  // Share combined clipboard
  function Share() {
    if (navigator.share) {
      navigator
        .share({
          title: "A New Operating System Page",
          text: combinedValue,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) =>
          console.warn(
            "Integrated Application Error: ShareErrorCaught https://docs.ulosino.com/docs/reference/errors",
            error
          )
        );
    }
  }

  // Page system
  const [descriptionPage, setDescriptionPage] = useBoolean();
  const [metadataPage, setMetadataPage] = useBoolean();
  const [exportPage, setExportPage] = useBoolean();

  return (
    <Flex direction={{ base: "column", sm: "row" }}>
      <Stack
        direction="column"
        spacing={2}
        me={{ base: 0, sm: 10 }}
        mb={{ base: 5, sm: 0 }}
        minW={{ base: "inherit", sm: 175 }}
      >
        {descriptionPage ? (
          <>
            {metadataPage ? (
              <>
                {exportPage ? (
                  <Button
                    onClick={setExportPage.off}
                    leftIcon={<HiOutlinePencil />}
                  >
                    Go Back
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={setMetadataPage.off}
                      leftIcon={<HiOutlineArrowLeft />}
                    >
                      Go Back
                    </Button>
                    <Button
                      onClick={setExportPage.on}
                      leftIcon={<HiOutlineArrowRight />}
                    >
                      Export
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                <Button
                  onClick={setDescriptionPage.off}
                  leftIcon={<HiOutlineArrowLeft />}
                >
                  Go Back
                </Button>
                <Button
                  onClick={setMetadataPage.on}
                  leftIcon={<HiOutlineArrowRight />}
                >
                  Continue
                </Button>
              </>
            )}
          </>
        ) : (
          <Button
            onClick={setDescriptionPage.on}
            leftIcon={<HiOutlineArrowRight />}
          >
            Continue
          </Button>
        )}
      </Stack>
      <Stack direction="column" spacing={5} w="full">
        {descriptionPage ? (
          <>
            {metadataPage ? (
              <>
                {exportPage ? (
                  <>
                    <Flex>
                      <Heading size="md">Export and Publish</Heading>
                      <Spacer />
                      <Text fontSize="sm">4 / 4</Text>
                    </Flex>
                    <Card variant="solid">
                      <Stack direction="column" spacing={2}>
                        <Text textStyle="miniHeading" as="h6">
                          Export Operating System Page
                        </Text>
                        {hasCopied ? (
                          <Button
                            leftIcon={<HiOutlineClipboardCheck />}
                            isDisabled
                          >
                            Copied
                          </Button>
                        ) : (
                          <Button
                            leftIcon={<HiOutlineClipboardCopy />}
                            onClick={onCopy}
                          >
                            Copy to Clipboard
                          </Button>
                        )}
                        <Button leftIcon={<HiOutlineUpload />} onClick={Share}>
                          Share as Text
                        </Button>
                      </Stack>
                    </Card>
                    <Text>
                      To publish our generated Operating System Page, we need to
                      use the GitHub Web Editor.
                    </Text>
                    <Text>
                      Select Copy to Clipboard above and then select Continue on
                      GitHub.
                    </Text>
                    <Text fontSize="xs">
                      If you prefer, you could commit using your own personal
                      environment.
                    </Text>
                    <Text>
                      At the top of the page, you'll need to name the new file,
                      using the <Code>name.mdx</Code> convention (for example,{" "}
                      <Code>ubuntu.mdx</Code>). Underneath, paste the OS Page.
                      Then choose to create a new branch to open a pull request
                      for your changes.
                    </Text>
                    <Link
                      href="https://github.com/ulosino/ulosino/new/main/public/markdown/browse"
                      passHref
                    >
                      <Button
                        leftIcon={<HiOutlineExternalLink />}
                        as="a"
                        ms={5}
                      >
                        Continue on GitHub
                      </Button>
                    </Link>
                    <Text fontSize="xs">
                      Deployment is automatic and will occur after your pull
                      request is merged.
                    </Text>
                  </>
                ) : (
                  <>
                    <Flex>
                      <Heading size="md">Embedded Metadata</Heading>
                      <Spacer />
                      <Text fontSize="sm">3 / 4</Text>
                    </Flex>
                    <FormControl>
                      <FormLabel>Configure the Embedded Metadata</FormLabel>
                      <ErrorFallback>
                        <Textarea
                          value={metadata}
                          onChange={metadataInputChange}
                          size="sm"
                          rounded="xl"
                          h={200}
                          id="testingCOPAMetadataInput"
                        />
                      </ErrorFallback>
                    </FormControl>
                    <Card variant="solid">
                      <Stack direction="column" spacing={2}>
                        <Text textStyle="miniHeading" as="h6">
                          ULOSINO Tempo Donation Options
                        </Text>
                        <FormControl>
                          <FormLabel>
                            Configure ULOSINO Tempo Metadata
                          </FormLabel>
                          <ErrorFallback>
                            <Textarea
                              value={donationMetadataValue}
                              onChange={donationMetadataInputChange}
                              size="sm"
                              rounded="xl"
                              h={100}
                            />
                          </ErrorFallback>
                          <FormHelperText>
                            Remove the comment <Code>#</Code> to enable ULOSINO
                            Tempo metadata fields. <Code>donate</Code> is
                            required to enable Quick Donation Options. Fields
                            that aren't enabled must be commented out.{" "}
                            <Link href="https://docs.ulosino.com/docs/reference/embedded-metadata">
                              Learn More...
                            </Link>
                          </FormHelperText>
                        </FormControl>
                      </Stack>
                    </Card>
                    <Link
                      href="https://docs.ulosino.com/docs/reference/embedded-metadata"
                      passHref
                    >
                      <Button leftIcon={<HiOutlineSupport />}>
                        Embedded Metadata Documentation
                      </Button>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Flex>
                  <Heading size="md">Description</Heading>
                  <Spacer />
                  <Text fontSize="sm">2 / 4</Text>
                </Flex>
                <FormControl>
                  <FormLabel>Write the Description</FormLabel>
                  <ErrorFallback>
                    <Textarea
                      value={description}
                      onChange={descriptionInputChange}
                      size="sm"
                      rounded="xl"
                      h={200}
                      id="testingCOPADescriptionInput"
                    />
                  </ErrorFallback>
                  <FormHelperText>
                    Write a full paragraph that comprehensively describes the
                    operating system, including it's features and unique
                    elements.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel>Write a Summary</FormLabel>
                  <ErrorFallback>
                    <Textarea
                      value={summary}
                      onChange={summaryInputChange}
                      size="sm"
                      rounded="xl"
                    />
                  </ErrorFallback>
                  <FormHelperText>
                    Write a 2-7 word summary of the operating system.
                  </FormHelperText>
                </FormControl>
              </>
            )}
          </>
        ) : (
          <>
            <Flex>
              <Heading size="md">Name &amp; Basic Details</Heading>
              <Spacer />
              <Text fontSize="sm">1 / 4</Text>
            </Flex>
            <FormControl>
              <FormLabel>Enter the Project's Name</FormLabel>
              <Input
                value={name}
                onChange={nameInputChange}
                rounded="xl"
                shadow="inner"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Select a Category</FormLabel>
              <Stack direction="column" spacing={2}>
                {categoryArray.map((category, index) => (
                  <Button
                    key={index}
                    onClick={(_) => {
                      setActiveTab(index);
                    }}
                    isActive={activeTab === index}
                  >
                    <Badge pt={1}>{category.label}</Badge>
                  </Button>
                ))}
              </Stack>
              <FormHelperText>
                Select the category that is applicable for the operating system.{" "}
                <Link href="https://docs.ulosino.com/docs/reference/categories">
                  Learn More...
                </Link>
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Enter the Project's Website URL</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={website}
                  onChange={websiteInputChange}
                  rounded="xl"
                  shadow="inner"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Enter the Project's Source Repository URL</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={repository}
                  onChange={repositoryInputChange}
                  rounded="xl"
                  shadow="inner"
                />
              </InputGroup>
              <FormHelperText>
                Enter the URL to the project's public source repository, if
                available.
              </FormHelperText>
            </FormControl>
          </>
        )}
      </Stack>
    </Flex>
  );
}
