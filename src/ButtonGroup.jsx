import React from 'react';
import styles from './styles/ButtonGroup.module.css';

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className={styles.buttons}>
        <button className={styles.cancel}>Отменить</button>
        <button className={styles.send}>Отправить</button>
      </div>
    );
  }
}

export default ButtonGroup;
