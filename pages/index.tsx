import type { ReactElement } from "react";

import ApplicationKit from "components/ApplicationKit";
import Layout from "components/layouts/Layout";

import { Heading } from "@chakra-ui/react";

export default function Home() {
  return <Heading size="xl">Hi</Heading>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationKit>
      <Layout>{page}</Layout>
    </ApplicationKit>
  );
};
