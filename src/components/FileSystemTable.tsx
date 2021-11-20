import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

export default function FSTable() {
  return (
    <Table>
      <Tbody>
        <Tr>
          <Td>/bin</Td>
          <Td>
            Contains system binary executables, i.e. shell programs, like 'cd',
            'mkdir', etc
          </Td>
          <Td>/Windows</Td>
          <Td>/bin</Td>
        </Tr>
        <Tr>
          <Td>/sbin</Td>
          <Td>
            Contains binary executables only available to the system and
            superuser, e.g. init
          </Td>
          <Td>/Windows</Td>
          <Td>/sbin</Td>
        </Tr>
        <Tr>
          <Td>/lib</Td>
          <Td>Contains system critical libraries and drivers</Td>
          <Td>/Windows</Td>
          <Td>/System/Library</Td>
        </Tr>
        <Tr>
          <Td>/usr</Td>
          <Td>
            Contains 'user generated' libraries, like the desktop and scripting
            languages
          </Td>
          <Td>/Program Files</Td>
          <Td>/Library, /Users/x/Library</Td>
        </Tr>
        <Tr>
          <Td>/opt</Td>
          <Td>Contains applications and programs</Td>
          <Td>/Program Files</Td>
          <Td>/Applications, /System/Applications</Td>
        </Tr>
        <Tr>
          <Td>/home</Td>
          <Td>Contains user files, e.g. Documents or Downloads</Td>
          <Td>/Users</Td>
          <Td>/Users</Td>
        </Tr>
        <Tr>
          <Td>/mnt, /media, /dev</Td>
          <Td>Mounted disks, e.g. USB drives</Td>
          <Td></Td>
          <Td>/Volumes</Td>
        </Tr>
        <Tr>
          <Td>/etc</Td>
          <Td>Contains configuration files</Td>
          <Td></Td>
          <Td>/private/etc</Td>
        </Tr>
        <Tr>
          <Td>/boot</Td>
          <Td>Contains files used to boot the system</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>/tmp, /sys</Td>
          <Td>Contains temporary files that are deleted at boot</Td>
          <Td></Td>
          <Td>/private/tmp</Td>
        </Tr>
        <Tr>
          <Td>/var</Td>
          <Td>Contains system files that change frequently</Td>
          <Td></Td>
          <Td>/private/var</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
