// ULOSINO app footer

import { Grid, Text, Link as GeistLink } from "@geist-ui/core";

// Begin component
export default function Footer() {
  return (
    <Grid.Container gap={1} direction="column" marginTop={5}>
      <Grid>
        <Text type="secondary" small>
          ULOSINO archives by Hikium (v. 4)
        </Text>
      </Grid>
      <Grid>
        <Grid.Container gap={2} direction="row">
          <Grid>
            <Text type="secondary" small>
              Copyright &copy; Hikium Project 2023.
            </Text>
          </Grid>
          <Grid>
            <Text type="secondary" small>
              <GeistLink icon>Terms</GeistLink>
            </Text>
          </Grid>
          <Grid>
            <Text type="secondary" small>
              <GeistLink
                href="https://www.hikium.com/legal/privacy"
                target="_blank"
                icon
              >
                Hikium Privacy Statement
              </GeistLink>
            </Text>
          </Grid>
          <Grid>
            <Text type="secondary" small>
              <GeistLink href="https://twitter.com/hikium" target="_blank" icon>
                @hikium
              </GeistLink>
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
