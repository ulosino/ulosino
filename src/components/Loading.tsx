// Loading spinner, shown during a long operation over networking
// This is currently used when loading Utterances comments

import { Spinner, Center } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center>
      <Spinner />
    </Center>
  );
}
