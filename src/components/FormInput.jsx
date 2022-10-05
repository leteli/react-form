import React from 'react';
import styles from '../styles/FormInput.module.css';

const FormInput = (props) => {
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>{props.label}</label>
      <input
        onChange={props.inputHandler}
        value={props.state.value}
        className={props.state.isValid === false ? styles.invalidInput : styles.input}
        type={props.type ?? "text"}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
      { props.state.isValid === false ? <div className={styles.invalid}>{ props.state.message }</div> : null }
    </>
  );
};

export default FormInput;
