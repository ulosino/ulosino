// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, useStyleConfig, Box } from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import PreferencesLayout from "components/layouts/PreferencesLayout";

// Begin page
export default function LegalHub() {
  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Legal Information</title>
        <meta property="og:title" content="ULOSINO &mdash; Legal" />
        <meta
          name="description"
          content="View important legal information for ULOSINO."
        />
        <meta
          property="og:description"
          content="View important legal information."
        />
      </Head>
      <Stack direction="column" spacing={5}>
        <Heading size="xl">Copyright &amp; Legal Information</Heading>
        <Stack direction="column" spacing={2}>
          <Link href="/about/legal/license" passHref>
            <Card variant="button" as="a" id="testingLicenseLink">
              <Heading size="md">
                ULOSINO Web Service License &amp; Copyright Notice
              </Heading>
              <Text fontSize="sm">
                Your rights and responsibilities as part of an open source
                community project.
              </Text>
            </Card>
          </Link>
          <Link href="/about/legal/privacy" passHref>
            <Card variant="button" as="a">
              <Heading size="md">ULOSINO Privacy Notice</Heading>
              <Text fontSize="sm">
                Safeguards to protect your privacy and data.
              </Text>
            </Card>
          </Link>
          <Link href="/about/legal/disclaimers" passHref>
            <Card variant="button" as="a">
              <Heading size="md">Disclaimers &amp; Other Notices</Heading>
              <Text fontSize="sm">
                View disclaimers for brand control, opinion representation, and
                financial advice.
              </Text>
            </Card>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
LegalHub.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <PreferencesLayout>{page}</PreferencesLayout>
      </Layout>
    </ApplicationProvider>
  );
};
