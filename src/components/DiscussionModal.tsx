import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

import dynamic from "next/dynamic";
const Utterances = dynamic(() => import("src/UtterancesProvider"));

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
      >
        <ModalOverlay />
        <ModalContent rounded="2xl">
          <ModalHeader>Discuss this OS</ModalHeader>
          <ModalCloseButton rounded="xl" />
          <ModalBody>
            <Utterances
              repo={"ulosino/ulosino"}
              label={"Page Comments"}
              type={"pathname"}
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
