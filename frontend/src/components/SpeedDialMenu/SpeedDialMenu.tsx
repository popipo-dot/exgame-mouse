import { IconBellRinging, IconClipboardCheck, IconQuestionMark } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { ChatVisibilityContext } from '../FloatingChat/ChatVisibility';
import { SocketIoContext } from '../socketio/SocketIoContext';
import { SpeedDialItem } from './SpeedDialItem';
import styles from './SpeedDialMenu.module.css';

export const SpeedDialMenu = () => {
  const [open, setOpen] = useState(false);
  const socketIoContext = useContext(SocketIoContext);
  const { setIsVisible } = useContext(ChatVisibilityContext);

  const handleToggle = () => setOpen(!open);

  const handleActionClick = (actionName: string) => {
    console.log(`Azione selezionata: ${actionName}`);
    socketIoContext.socket?.emit(actionName);
    setOpen(false);
  };

  const handleActionAsk = () => {
    setOpen(false);
    setIsVisible(true);
  }

  if (!socketIoContext.connected) {
    return null;
  }

  return (
    <div className={styles.speedDial}>
      {open && (
        <div className={styles.actionsContainer}>
          <SpeedDialItem
            icon={<IconBellRinging />}
            label="Disturba"
            onClick={() => handleActionClick('disturb')} />
          <SpeedDialItem
            icon={<IconClipboardCheck />}
            label="Copia"
            onClick={() => handleActionClick('copy')} />
          <SpeedDialItem
            icon={<IconQuestionMark />}
            label="Chiedi aiuto"
            onClick={() => handleActionAsk()} />
        </div>
      )}
      <button
        className={`${styles.mainButton} ${open ? styles.open : ''}`}
        onClick={handleToggle}
        aria-label="Menu azioni"
      >
        {open ? '✕' : '+'}
      </button>
    </div>
  );
};

export default SpeedDialMenu;
