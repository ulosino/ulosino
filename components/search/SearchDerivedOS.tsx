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
  descends: string;
}

// Begin wrapping component
export default function SearchDerivedOS({ data }: DataTypes) {
  return (
    <AutoComplete emptyState={EmptyState}>
      <AutoCompleteInput
        variant="outline"
        size="md"
        borderRadius="xl"
        shadow="inner"
        placeholder="Search by Derived OS..."
        id="testingSearchInputDerivedOS"
      />
      <AutoCompleteList>
        {data.map(({ slug, name, descends }: MetadataTypes) => (
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
      </AutoCompleteList>
    </AutoComplete>
  );
}
