// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the "advanced" group of metadata search
// Includes derived OS, region of origin, shell
// Forms a part of Advanced Search

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Code } from "@chakra-ui/react";

// Search libraries
import SearchWrapper from "./SearchWrapper";
import { AutoCompleteItem } from "@choc-ui/chakra-autocomplete";

interface DataTypes {
  data: any;
}

interface AdvancedMetadataTypes {
  slug: string;
  name: string;
  summary: string;
  category: string;
  descends: string;
  origin: string;
  shell: string;
}

// Begin wrapping component
export default function AdvancedSearchGroup({ data }: DataTypes) {
  return (
    <>
      {/* Derived OS */}
      <SearchWrapper
        size="md"
        placeholder="Search by Derived OS..."
        inputId="testingSearchInputDerivedOS"
      >
        {data.map(({ slug, name, descends }: AdvancedMetadataTypes) => (
          <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
            <AutoCompleteItem
              value={descends}
              key={`option-${descends}`}
              textDecoration="none"
              p={4}
              mb={2}
              as="a"
              id="testingSearchOutputItemDerivedOS"
            >
              <Stack direction="column" spacing={0}>
                <Heading size="md">{name}</Heading>
                <Text fontSize="xs">A derivative of {descends}</Text>
              </Stack>
            </AutoCompleteItem>
          </Link>
        ))}
      </SearchWrapper>
      {/* Region of Origin */}
      <SearchWrapper
        size="md"
        placeholder="Search by Region of Origin..."
        inputId="testingSearchInputRegion"
      >
        {data.map(({ slug, name, origin }: AdvancedMetadataTypes) => (
          <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
            <AutoCompleteItem
              value={origin}
              key={`option-${origin}`}
              textDecoration="none"
              p={4}
              mb={2}
              as="a"
              id="testingSearchOutputItemRegion"
            >
              <Stack direction="column" spacing={0}>
                <Heading size="md">{name}</Heading>
                <Text fontSize="xs">Made in {origin}</Text>
              </Stack>
            </AutoCompleteItem>
          </Link>
        ))}
      </SearchWrapper>
      {/* Shell */}
      <SearchWrapper
        size="md"
        placeholder="Search by Shell..."
        inputId="testingSearchInputShell"
      >
        {data.map(({ slug, name, shell }: AdvancedMetadataTypes) => (
          <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
            <AutoCompleteItem
              value={shell}
              key={`option-${shell}`}
              textDecoration="none"
              p={4}
              mb={2}
              as="a"
              id="testingSearchOutputItemShell"
            >
              <Stack direction="column" spacing={0}>
                <Heading size="md">{name}</Heading>
                <Text fontSize="xs">
                  Uses <Code>{shell}</Code>
                </Text>
              </Stack>
            </AutoCompleteItem>
          </Link>
        ))}
      </SearchWrapper>
    </>
  );
}
