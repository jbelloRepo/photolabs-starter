import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { useModal } from "../components/ModalContext";

const PhotoDetailsModal = () => {
  console.log("Modal component rendered");
  const { isModalOpen, setIsModalOpen } = useModal();

  if (!isModalOpen) {
    return null; // Don't render the modal if it's not open.
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setIsModalOpen(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
