import React from 'react';
import styles from './styles/ButtonGroup.module.css';

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className={styles.buttons}>
        <button type="reset" className={styles.cancel}>Отменить</button>
        <button type="submit" className={styles.send}>Cохранить</button>
      </div>
    );
  }
}

export default ButtonGroup;
