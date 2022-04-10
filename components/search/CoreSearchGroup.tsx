// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This is the "core" group of metadata search
// Inherits SearchName and includes platform, desktop, startup manager, and package manager
// Forms a part of Advanced Search

// Links and routing
import Link from "next/link";

// First party components
import SearchName from "components/search/SearchName";

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
export default function CoreSearchGroup({ data }: DataTypes) {
  return (
    <>
      {/* Name */}
      <SearchName data={data} size="md" />
      {/* Platform */}
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
      {/* Desktop */}
      <AutoComplete emptyState={EmptyState}>
        <AutoCompleteInput
          variant="outline"
          size="md"
          borderRadius="xl"
          shadow="inner"
          placeholder="Search by Desktop..."
          id="testingSearchInputDesktop"
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
                  value={desktop}
                  key={`option-${desktop}`}
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
                    usePlatform={false}
                    useDesktop={true}
                    useStartup={false}
                    usePackagemgr={false}
                    OSCardId="testingSearchOutputItemDesktop"
                  />
                </AutoCompleteItem>
              </Link>
            )
          )}
        </AutoCompleteList>
      </AutoComplete>
      {/* Startup manager */}
      <AutoComplete emptyState={EmptyState}>
        <AutoCompleteInput
          variant="outline"
          size="md"
          borderRadius="xl"
          shadow="inner"
          placeholder="Search by Startup Manager..."
          id="testingSearchInputStartupManager"
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
                  value={startup}
                  key={`option-${startup}`}
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
                    usePlatform={false}
                    useDesktop={false}
                    useStartup={true}
                    usePackagemgr={false}
                    OSCardId="testingSearchOutputItemStartupManager"
                  />
                </AutoCompleteItem>
              </Link>
            )
          )}
        </AutoCompleteList>
      </AutoComplete>
      {/* Package manager */}
      <AutoComplete emptyState={EmptyState}>
        <AutoCompleteInput
          variant="outline"
          size="md"
          borderRadius="xl"
          shadow="inner"
          placeholder="Search by Package Manager..."
          id="testingSearchInputPackageManager"
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
                  value={packagemgr}
                  key={`option-${packagemgr}`}
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
                    usePlatform={false}
                    useDesktop={false}
                    useStartup={false}
                    usePackagemgr={true}
                    OSCardId="testingSearchOutputItemPackageManager"
                  />
                </AutoCompleteItem>
              </Link>
            )
          )}
        </AutoCompleteList>
      </AutoComplete>
    </>
  );
}
