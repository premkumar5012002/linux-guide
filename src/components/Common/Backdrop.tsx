import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface BackdropProps extends PropsWithChildren {
  onClick: () => void;
}

export const Backdrop = ({ children, onClick }: BackdropProps) => {
  const MotionDivProps = {
    exit: { opacity: 0 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    className: "fixed z-50 inset-0 w-full bg-[#000000E1]",
  };

  return (
    <motion.div {...MotionDivProps} onClick={onClick}>
      {children}
    </motion.div>
  );
};
