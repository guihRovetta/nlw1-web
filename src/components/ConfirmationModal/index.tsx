import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import "./styles.css";

const ConfirmationModal: React.FC = () => {
  return (
    <div className="confirmation-modal">
      <h1>
        <FiCheckCircle />
        Ponto de coleta cadastrado com sucesso
      </h1>
    </div>
  );
};

export default ConfirmationModal;
