// Back button

import { useRouter } from "next/router";

import { IconButton } from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";

export default function BackButton() {
  const router = useRouter();
  return (
    <IconButton
      aria-label="Go Back"
      title="Go Back"
      onClick={() => router.back()}
      icon={<HiChevronLeft />}
      variant="ghost"
      me={4}
    />
  );
}
