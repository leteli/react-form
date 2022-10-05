import React from 'react';
import styles from '../styles/ButtonGroup.module.css';

const ButtonGroup = () => {
  return (
    <div className={styles.buttons}>
      <button type="reset" className={styles.basic}>Отменить</button>
      <button type="submit" className={styles.primary}>Cохранить</button>
    </div>
  );
};

export default ButtonGroup;
