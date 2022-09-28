import React from 'react';
import styles from './styles/FormInput.module.css';

class MultiLineInput extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <textarea
          className={styles.input}
          rows="7"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default MultiLineInput;
