import { useEffect } from "react";
import { CgCloseO as CloseIcon } from "react-icons/cg";

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
      {/* <div classNameName="overlay" onClick={handleClose} /> */}
      {/* <div classNameName="modal">
        <div classNameName="modal__container">
          <button classNameName="modal__close-button" onClick={handleClose}>
            <CloseIcon size={25} />
          </button>
          <div classNameName="modal__body">{children}</div>
        </div>
      </div> */}
      <div className="overlay" />
      <div className="modal">
        <button className="modal__close" onClick={handleClose}>
          <CloseIcon size={25} />
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
};
export default Modal;
