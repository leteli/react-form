import React from 'react';
import styles from './styles/FormInput.module.css';

const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={styles.input}
        type={props.type ?? "text"}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormInput;
