import React from 'react';
import styles from './styles/FormInput.module.css';

const MultiLineInput = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        className={styles.input}
        rows="7"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default MultiLineInput;
