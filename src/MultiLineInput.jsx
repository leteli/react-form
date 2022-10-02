import React from 'react';
import styles from './styles/FormInput.module.css';


const MultiLineInput = (props) => {
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>{props.label}</label>
      <textarea
        onChange={props.inputHandler}
        value={props.state.value}
        className={props.state.isValid === false ? styles.invalidInput : styles.input}
        rows="7"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
      { props.state.isValid === null ? null : 
        <div className={props.state.isValid === false ? styles.invalid : null }>
          {props.state.message}
        </div>
      }
    </>
  );
};

export default MultiLineInput;
