import { IconBellRinging, IconClipboardCheck, IconQuestionMark } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './SpeedDialMenu.module.css';

const actions = [
  { icon: <IconBellRinging />, name: 'Disturba' },
  { icon: <IconClipboardCheck />, name: 'Copia' },
  { icon: <IconQuestionMark />, name: "Chiedi all'insegnante" },
];

export const SpeedDialMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleActionClick = (actionName: string) => {
    console.log(`Azione selezionata: ${actionName}`);
    setOpen(false);
  };

  return (
    <div className={styles.speedDial}>
      {open && (
        <div className={styles.actionsContainer}>
          {actions.map((action, index) => (
            <div
              key={action.name}
              className={styles.action}
              style={{
                transitionDelay: `${index * 50}ms`,
                // bottom: `${(index + 1) * 60}px`
              }}
              onClick={() => handleActionClick(action.name)}
              title={action.name}
            >
              <span className={styles.icon}>{action.icon}</span>
              <span className={styles.tooltip}>{action.name}</span>
            </div>
          ))}
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
