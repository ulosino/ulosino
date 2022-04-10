// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the "advanced" group of metadata search
// Includes derived OS, region of origin, shell
// Forms a part of Advanced Search

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Badge } from "@chakra-ui/react";

// Search libraries
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import EmptyState from "components/search/EmptyState";

interface DataTypes {
  data: any;
}

interface SystemSearchMetadataTypes {
  slug: string;
  name: string;
  summary: string;
  category: string;
}

// Begin wrapping component
export default function SystemSearch({ data }: DataTypes) {
  return (
    <>
      {/* Category */}
      <AutoComplete emptyState={EmptyState}>
        <AutoCompleteInput
          variant="outline"
          size="md"
          borderRadius="xl"
          shadow="inner"
          placeholder="Search by Category..."
          id="testingSearchInputCategory"
        />
        <AutoCompleteList>
          {data.map(({ slug, name, category }: SystemSearchMetadataTypes) => (
            <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
              <AutoCompleteItem
                value={category}
                key={`option-${category}`}
                textDecoration="none"
                p={4}
                mb={2}
                as="a"
                id="testingSearchOutputItemCategory"
              >
                <Stack direction="column" spacing={0}>
                  <Heading size="md">{name}</Heading>
                  <Badge>{category}</Badge>
                </Stack>
              </AutoCompleteItem>
            </Link>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      {/* Summary */}
      <AutoComplete emptyState={EmptyState}>
        <AutoCompleteInput
          variant="outline"
          size="md"
          borderRadius="xl"
          shadow="inner"
          placeholder="Search by Summary..."
          id="testingSearchInputSummary"
        />
        <AutoCompleteList>
          {data.map(({ slug, name, summary }: SystemSearchMetadataTypes) => (
            <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
              <AutoCompleteItem
                value={summary}
                key={`option-${summary}`}
                textDecoration="none"
                p={4}
                mb={2}
                as="a"
                id="testingSearchOutputItemSummary"
              >
                <Stack direction="column" spacing={0}>
                  <Heading size="md">{name}</Heading>
                  <Text fontSize="xs">"{summary}"</Text>
                </Stack>
              </AutoCompleteItem>
            </Link>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </>
  );
}
