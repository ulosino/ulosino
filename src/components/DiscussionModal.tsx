import {
  Button,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

import dynamic from "next/dynamic";
const Utterances = dynamic(() => import("src/UtterancesProvider"));

const Modal = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.Modal)
);
const ModalOverlay = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalOverlay)
);
const ModalHeader = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalHeader)
);
const ModalBody = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalBody)
);
const ModalFooter = dynamic(() =>
  import("@chakra-ui/react").then((mod) => mod.ModalFooter)
);

export default function DiscussionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<HiOutlineChatAlt2 />}
        aria-label="Show comments for this operating system"
        onClick={onOpen}
      >
        Show Comments
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size="sm"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent rounded="2xl">
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton rounded="xl" />
          <ModalBody>
            <Utterances
              repo={"ulosino/ulosino"}
              label={"Page Comments"}
              type={"pathname"}
              theme={"preferred-color-scheme"}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
