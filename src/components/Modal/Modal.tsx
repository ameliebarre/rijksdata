import { useEffect } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";

import { Portal } from "@/components";
import "./Modal.css";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent): void | null =>
      e.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId="react-portal-modal-container">
      <div className="modal">
        <div className="modal__content">
          <button onClick={handleClose} className="modal__close">
            <CloseIcon size={30} />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
