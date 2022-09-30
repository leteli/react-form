import React, { useRef } from 'react';
import FormInput from './FormInput.jsx';
import MultiLineInput from './MultiLineInput.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import styles from './styles/App.module.css';

const App = () => {
  const formRef = useRef();

  const handleFormSubmit = () => {
    const form = formRef.current;
    const formData = new FormData(form);
    const resultFormData = {};
    for (const [key, value] of formData.entries()) {
      resultFormData[key] = value;
    }
    alert(JSON.stringify(resultFormData));
  };

  const handleFormReset = () => {
    this.formValues.current.reset();
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Cоздание анкеты</h1>
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
          className={styles.form}
        >
          <FormInput name="name" label="Имя" placeholder="Александра" />
          <FormInput name="surname" label="Фамилия" placeholder="Александрова" />
          <FormInput type="date" name="birthday" label="Дата рождения" placeholder="01.01.1991" />
          <FormInput type="tel" name="phone" label="Телефон" placeholder="+79992223311" />
          <FormInput name="website" label="Сайт" placeholder="https://github.com/leteli/react-form" />
          <MultiLineInput name="personal" label="О себе" placeholder="Я начинающий разработчик..." />
          <MultiLineInput name="tech-stack" label="Стек технологий" placeholder="JS, CSS, React..." />
          <MultiLineInput name="last-project" label="Описание последнего проекта" placeholder="Я реализовала..." />
          <ButtonGroup />
        </form>
      </div>
    </div>
  );
};

export default App;
