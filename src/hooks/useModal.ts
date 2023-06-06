import { useState } from "react";

export function useModal(value?: boolean) {
  const [isOpen, setIsOpen] = useState(value ?? false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
}
