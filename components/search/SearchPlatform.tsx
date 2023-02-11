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
import OSDataLayout from "components/OSDataLayout";

interface DataTypes {
  data: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
  category: string;
  donate: string;
  platform: string;
  desktop: string;
  startup: string;
  packagemgr: string;
}

// Begin wrapping component
export default function SearchPlatform({ data }: DataTypes) {
  return (
    <AutoComplete emptyState={EmptyState}>
      <AutoCompleteInput
        variant="outline"
        size="md"
        borderRadius="xl"
        shadow="inner"
        placeholder="Search by Platform..."
        id="testingSearchInputPlatform"
      />
      <AutoCompleteList>
        {data.map(
          ({
            slug,
            name,
            summary,
            category,
            donate,
            platform,
            desktop,
            startup,
            packagemgr,
          }: MetadataTypes) => (
            <Link href={`/browse/${slug}`} key={`/browse/${slug}`} passHref>
              <AutoCompleteItem
                value={platform}
                key={`option-${platform}`}
                textDecoration="none"
                p={4}
                mb={2}
                as="a"
              >
                <OSDataLayout
                  name={name}
                  summary={summary}
                  category={category}
                  donate={donate}
                  platform={platform}
                  desktop={desktop}
                  startup={startup}
                  packagemgr={packagemgr}
                  usePlatform={true}
                  useDesktop={false}
                  useStartup={false}
                  usePackagemgr={false}
                  OSCardId="testingSearchOutputItemPlatform"
                />
              </AutoCompleteItem>
            </Link>
          )
        )}
      </AutoCompleteList>
    </AutoComplete>
  );
}
