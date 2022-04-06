// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This allows us to render a default overlay component
// This is <Modal> (or <AlertDialog>) on large displays and a Drawer on smaller displays

// Types
import type { ReactElement } from "react";

// Chakra UI, icons, and other design imports
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";

interface OverlayPropsDrawerOnly {
  header: string;
  body: ReactElement;
  footer: ReactElement;
  cancelRef: any;
  isOpen: boolean;
  onClose: () => void;
}

interface OverlayProps {
  header: string;
  body: ReactElement;
  footer: ReactElement;
  cancelRef: any;
  isOpen: boolean;
  onClose: () => void;
  useAlertDialog: boolean;
}

// Begin component
export function OverlayModal({
  header,
  body,
  footer,
  cancelRef,
  isOpen,
  onClose,
  useAlertDialog,
}: OverlayProps): ReactElement {
  return (
    <>
      {useAlertDialog ? (
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
          leastDestructiveRef={cancelRef}
          scrollBehavior="inside"
          size="sm"
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent rounded="xl">
            <AlertDialogHeader fontSize="2xl">{header}</AlertDialogHeader>
            <AlertDialogBody>{body}</AlertDialogBody>
            <AlertDialogFooter>{footer}</AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          initialFocusRef={cancelRef}
          scrollBehavior="inside"
          size="xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent rounded="xl">
            <ModalHeader fontSize="2xl">{header}</ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export function OverlayDrawer({
  header,
  body,
  footer,
  cancelRef,
  isOpen,
  onClose,
}: OverlayPropsDrawerOnly): ReactElement {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={cancelRef}
      placement="bottom"
    >
      <DrawerOverlay />
      <DrawerContent roundedTop="xl" h="75%">
        <DrawerHeader fontSize="2xl">{header}</DrawerHeader>
        <DrawerBody>{body}</DrawerBody>
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function Overlay({
  header,
  body,
  footer,
  cancelRef,
  isOpen,
  onClose,
  useAlertDialog,
}: OverlayProps) {
  const overlayStyle = useBreakpointValue({
    base: (
      <OverlayDrawer
        header={header}
        body={body}
        footer={footer}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    ),
    md: (
      <OverlayModal
        header={header}
        body={body}
        footer={footer}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        useAlertDialog={useAlertDialog}
      />
    ),
  });
  return <>{overlayStyle}</>;
}
