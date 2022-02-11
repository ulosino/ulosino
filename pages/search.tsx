import type { ReactElement } from "react";

import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

import { Heading } from "@chakra-ui/react";

export default function AdvancedSearch() {
  return <Heading size="xl">Advanced Search</Heading>;
}

AdvancedSearch.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationKit>
  );
};
