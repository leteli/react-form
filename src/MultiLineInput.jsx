import React from 'react';
import styles from './styles/FormInput.module.css';


const MultiLineInput = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        onChange={props.inputHandler}
        value={props.state.value}
        className={styles.input}
        rows="7"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
      { props.state.isValid === null ? null: <div>{props.state.message}</div> }
    </>
  );
};

export default MultiLineInput;
