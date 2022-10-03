import React, { useState } from 'react';
import FormInput from './FormInput.jsx';
import MultiLineInput from './MultiLineInput.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import styles from './styles/App.module.css';
import validate, { validateTextarea, isTextarea, validateIfEmpty } from './validate.js';
import phoneOutputFormat from './phoneFormat.js';

const App = () => {
  const initialData = {value: '', isValid: null, message: null };
  const [values, setValues] = useState({
    name: { ...initialData },
    surname: { ...initialData },
    birthday : { ...initialData },
    phone: { ...initialData },
    website: { ...initialData },
    personal: { ...initialData },
    techStack: { ...initialData },
    lastProject: { ...initialData },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedPhone = phoneOutputFormat(values, value);
      setValues((state) => ({ ...state, phone: { ...state.phone, value: formattedPhone}}));

    } else if (isTextarea(name)) {
      const validationResult = validateTextarea(value, 600);
      setValues((state) => ({ ...state, [name]: { ...state[name], value, ...validationResult } }));
    } else {
      setValues((state) => ({ ...state, [name]: { ...state[name], value } }));
    }
  };

  const handleFormSubmit = (e) => {
    const validatedData = {};
    for (const key in values) {
      const { value } = values[key];
      if (isTextarea(key)) {
        validatedData[key] = validateIfEmpty(values[key]);
      } else {
        const validationResult = validate(key, value);
        validatedData[key] = { ...validationResult, value };
      }
    }
    setValues(validatedData);
    if (Object.values(values).every((input) => input.isValid)) {
      alert(JSON.stringify(values));
    } else {
      e.preventDefault();
      // alert('Введены некорректные данные');
    }
  };

  // const handleFormSubmit = () => {
  //   const form = formRef.current;
  //   const formData = new FormData(form);
  //   const resultFormData = {};
  //   for (const [key, value] of formData.entries()) {
  //     resultFormData[key] = value;
  //   }
  //   alert(JSON.stringify(resultFormData));
  // };

  const handleFormReset = () => {
    const initialState = {};
    for (const key in values) {
      initialState[key] = initialData;
    }
    setValues(initialState);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Cоздание анкеты</h1>
        <form
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
          className={styles.form}
          noValidate
        >
          <FormInput inputHandler={handleChange} state={values.name} name="name" label="Имя" placeholder="Александра" />
          <FormInput inputHandler={handleChange} state={values.surname} name="surname" label="Фамилия" placeholder="Александрова" />
          <FormInput inputHandler={handleChange} state={values.birthday} type="date" name="birthday" label="Дата рождения" placeholder="01.01.1991" />
          <FormInput inputHandler={handleChange} state={values.phone} type="tel" name="phone" label="Телефон" placeholder="+79992223311" />
          <FormInput inputHandler={handleChange} state={values.website} name="website" label="Сайт" placeholder="https://github.com/leteli/react-form" />
          <MultiLineInput inputHandler={handleChange} state={values.personal} name="personal" label="О себе" placeholder="Я начинающий разработчик..." />
          <MultiLineInput inputHandler={handleChange} state={values.techStack} name="techStack" label="Стек технологий" placeholder="JS, CSS, React..." />
          <MultiLineInput inputHandler={handleChange} state={values.lastProject} name="lastProject" label="Описание последнего проекта" placeholder="Я реализовала..." />
          <ButtonGroup />
        </form>
      </div>
    </div>
  );
};

export default App;
