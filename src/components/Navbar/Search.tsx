import { IconSearch } from "@tabler/icons-react";
import { ButtonHTMLAttributes, useEffect } from "react";

import { useModal } from "@/hooks/useModal";

import SearchModal from "@/components/SearchModal/SearchModal";
import ModalContainer from "@/components/Common/ModalContainer";

export default function Search() {
  const searchModal = useModal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !searchModal.isOpen) {
        event.preventDefault();
        searchModal.openModal();
      } else if (event.key === "Escape" && searchModal.isOpen) {
        event.preventDefault();
        searchModal.closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchModal.isOpen]);

  return (
    <>
      <ModalContainer isModelOpen={searchModal.isOpen} onClose={searchModal.closeModal}>
        <SearchModal close={searchModal.closeModal} />
      </ModalContainer>
      <SearchBox onClick={searchModal.openModal} />
      <SearchButton onClick={searchModal.openModal} />
    </>
  );
}

function SearchButton({ onClick }: { onClick: () => void }) {
  const ButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    title: "Search Button",
    type: "submit",
    className: "text-gray-300 hover:bg-secondary rounded-md p-1.5 block lg:hidden",
  };
  return (
    <button {...ButtonProps} onClick={onClick}>
      <IconSearch />
    </button>
  );
}

function SearchBox({ onClick }: { onClick: () => void }) {
  const DivClassName = `hidden lg:flex items-center bg-secondary pl-2 pr-20 py-2 rounded-md border border-outline cursor-text`;
  return (
    <div className={DivClassName} onClick={onClick}>
      <div className="flex items-center text-gray-300 gap-1.5">
        <IconSearch className="w-5 h-5" />
        <span className="text-sm font-medium">
          Type
          <span className="border border-outline mx-1.5 px-1.5 py-1 rounded-md text-xs">/</span>
          to search
        </span>
      </div>
    </div>
  );
}
