import { useEffect } from "react";
import "./Modal.css";
import Portal from "../Portal/Portal";

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
        <button onClick={handleClose} className="modal__close-button">
          Close
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
};
export default Modal;
