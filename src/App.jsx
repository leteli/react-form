import React from 'react';
import FormInput from './FormInput.jsx';
import MultiLineInput from './MultiLineInput.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import styles from './styles/App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Cоздание анкеты</h1>
          <div className={styles.form}>
            <FormInput name="name" label="Имя" placeholder="Александра" />
            <FormInput name="surname" label="Фамилия" placeholder="Александрова" />
            <FormInput type="date" name="birthday" label="Дата рождения" placeholder="01.01.1991" />
            <FormInput type="tel" name="phone" label="Телефон" placeholder="+7 (999) 999 99 99" />
            <FormInput name="website" label="Сайт" placeholder="https://github.com/leteli/react-form" />
            <MultiLineInput name="personal" label="О себе" placeholder="Я начинающий разработчик, ..." />
            <MultiLineInput name="tech-stack" label="Стек технологий" placeholder="JS, CSS, React, ..." />
            <MultiLineInput name="last-project" label="Описание последнего проекта" placeholder="Я реализовала" />
            <ButtonGroup />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
