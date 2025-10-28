import { useState } from "react";
import styles from "./FloatingChat.module.css";

const FloatingChat = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <h3>Chat</h3>
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>
        <div className={styles.chatMessages}>
          <p className={styles.emptyMessage}>Nessun messaggio</p>
        </div>
        <div className={styles.chatInput}>
          <input
            type="text"
            placeholder="Scrivi un messaggio..."
          />
          <button>Invia</button>
        </div>
      </div>
    </div>
  );
};

export default FloatingChat;
