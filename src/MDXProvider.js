import { MDXProvider } from "@mdx-js/react";

import { Heading, Text, Divider, Code } from "@chakra-ui/react";

const ChakraComponents = {
  h1: (props) => <Heading size="3xl" mb={4} {...props} />,
  h2: (props) => <Heading size="md" {...props} />,
  h3: (props) => <Text textStyle="secondary" {...props} />,
  p: (props) => <Text {...props} my={2} />,
  hr: (props) => <Divider {...props} my={4} />,
  code: (props) => <Code {...props} />,
};

const MDXProviderComponent = ({ children }) => (
  <MDXProvider components={ChakraComponents}>{children}</MDXProvider>
);

export default MDXProviderComponent;
