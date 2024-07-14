import React from "react";
import styles from "./SuccessBanner.module.css";

interface SuccessBannerProps {
  message: string;
  onClose: () => void;
}

const SuccessBanner: React.FC<SuccessBannerProps> = ({ message, onClose }) => {
  return (
    <div className={styles.banner}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default SuccessBanner;
