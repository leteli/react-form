import React from 'react';
import styles from './styles/FormInput.module.css';

class FormInput extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          className={styles.input}
          type={this.props.type ?? "text"}
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          // ref
        />
      </div>
    );
  }
}

export default FormInput;
