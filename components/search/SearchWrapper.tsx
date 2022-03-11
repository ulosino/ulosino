// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This unifies search components, allowing accelerated changes into the future

// Types
import { ReactElement } from "react";

// First party components
import EmptyState from "components/search/EmptyState";

// Search libraries
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

interface PageProps {
  children: ReactElement;
  size: string;
  placeholder: string;
  inputId: string;
}

// Begin wrapping component
export default function SearchWrapper({
  children,
  size,
  placeholder,
  inputId,
}: PageProps) {
  return (
    <AutoComplete emptyState={EmptyState}>
      <AutoCompleteInput
        variant="outline"
        size={size}
        borderRadius="xl"
        shadow="inner"
        placeholder={placeholder}
        id={inputId}
      />
      <AutoCompleteList>{children}</AutoCompleteList>
    </AutoComplete>
  );
}
