import { Table, Thead, Tbody, Th, Tr, Td, Badge } from "@chakra-ui/react";

export default function CategoryDefinitions() {
  return (
    <Table my={4}>
      <Thead>
        <Tr>
          <Th>Category</Th>
          <Th>Definition</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Badge>Desktop</Badge>
          </Td>
          <Td>Intended for general computing and uses a GUI by default</Td>
        </Tr>
        <Tr>
          <Td>
            <Badge>Mobile</Badge>
          </Td>
          <Td>Intended for general computing on mobile devices</Td>
        </Tr>
        <Tr>
          <Td>
            <Badge>Advanced</Badge>
          </Td>
          <Td>
            Requires learning to use &mdash; intended for power-users and
            developers
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Badge>Utility</Badge>
          </Td>
          <Td>
            Intended for highly specialised use cases, usually preinstalled with
            utility software
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Badge>Enterprise</Badge>
          </Td>
          <Td>
            Intended for large-scale corporate use &mdash; often available with
            paid support
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Badge>Research</Badge>
          </Td>
          <Td>
            Intended to showcase different approaches to computing concepts
            &mdash; may be unstable or discontinued
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
