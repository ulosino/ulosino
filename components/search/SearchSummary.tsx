// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Links and routing
import Link from "next/link";

// Search libraries
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import EmptyState from "components/search/EmptyState";
import { Stack, Heading, Text } from "@chakra-ui/react";

interface DataTypes {
  data: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
}

// Begin wrapping component
export default function SearchSummary({ data }: DataTypes) {
  return (
    <AutoComplete emptyState={EmptyState}>
      <AutoCompleteInput
        variant="outline"
        size="md"
        borderRadius="xl"
        shadow="inner"
        placeholder="Search Summaries..."
        id="testingSearchInputSummary"
      />
      <AutoCompleteList>
        {data.map(({ slug, name, summary }: MetadataTypes) => (
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
  );
}
