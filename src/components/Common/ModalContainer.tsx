import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";

interface ModalContainerProps extends PropsWithChildren {
  isModelOpen: boolean;
  onClose: () => void;
}

const ModalContainer = (props: ModalContainerProps) => (
  <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
    {props.isModelOpen && props.children}
  </AnimatePresence>
);

export default ModalContainer;
