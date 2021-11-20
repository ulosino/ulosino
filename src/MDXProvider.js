import { MDXProvider } from "@mdx-js/react";

import { Heading, Text, Divider, Code } from "@chakra-ui/react";

const ChakraComponents = {
  h1: (props) => <Heading size="3xl" my={4} {...props} />,
  h2: (props) => <Heading size="md" {...props} />,
  h3: (props) => <Text textStyle="secondary" {...props} />,
  p: (props) => <Text {...props} my={2} />,
  hr: (props) => <Divider my={4} {...props} />,
  code: (props) => <Code {...props} />,
};

const MDXProviderComponent = ({ children }) => (
  <MDXProvider components={ChakraComponents}>{children}</MDXProvider>
);

export default MDXProviderComponent;
