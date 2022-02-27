// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is primary search option for ULOSINO
// Used on Home and Advanced Search

// Links and routing
import Link from "next/link";

// Search libraries
import SearchWrapper from "./SearchWrapper";
import { AutoCompleteItem } from "@choc-ui/chakra-autocomplete";
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
export default function SearchName({ data }: DataTypes) {
  return (
    <SearchWrapper
      placeholder="Find an Operating System..."
      inputId="testingSearchInputName"
    >
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
              value={name}
              key={`option-${name}`}
              textDecoration="none"
              p={4}
              mb={1}
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
                usePlatform={false}
                useDesktop={false}
                useStartup={false}
                usePackagemgr={false}
                OSCardId="testingSearchOutputItemName"
              />
            </AutoCompleteItem>
          </Link>
        )
      )}
    </SearchWrapper>
  );
}
