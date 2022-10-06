import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import FormInput from './FormInput.jsx';
import MultiLineInput from './MultiLineInput.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import ReturnButton from './ReturnButton.jsx';

import styles from '../styles/Form.module.css';
import layout from '../styles/Layout.module.css';

import validate, { validateTextarea, isTextarea, validateTextareaOnSubmit } from '../validate.js';
import phoneOutputFormat from '../phoneFormat.js';

const Form = ({ values, setValues }) => {
  const initialData = {value: '', isValid: null, message: null };
  // const inputNames = ['name', 'surname', 'birthday', 'phone', 'website', 'personal', 'techStack', 'lastProject'];
  // const initialState = {};
  // inputNames.forEach((name) => initialState[name] = { ...initialData });
  // const [values, setValues] = useState(initialState);

  const [isValid, setValidity] = useState(null);

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
    e.preventDefault();
    const validatedData = {};
    for (const key in values) {
      const { value } = values[key];
      if (isTextarea(key)) {
        validatedData[key] = validateTextareaOnSubmit(values[key]);
      } else {
        const validationResult = validate(key, value);
        validatedData[key] = { ...validationResult };
      }
    }
    setValues(validatedData); // async!
    if (Object.values(validatedData).every((input) => input.isValid)) {// тут используем результат валидации, а не стейт, который мог не успеть обновиться!
      setValidity(true);
    } else {
      setValidity(false);
      alert('Введены некорректные данные');
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
    setValidity(null);
  };
  
  return (
    <>
      { isValid ? <Navigate to="/info" /> : (
      <Layout>
        <div className={layout.contentHeader}>
          <ReturnButton />
          <h1 className={layout.title}>Cоздание анкеты</h1>
        </div>
        <form
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
          className={styles.form}
          noValidate
        >
          <FormInput inputHandler={handleChange} state={values.name} name="name" label="Имя" placeholder="Александра" />
          <FormInput inputHandler={handleChange} state={values.surname} name="surname" label="Фамилия" placeholder="Александрова" />
          <FormInput inputHandler={handleChange} state={values.birthday} type="date" name="birthday" label="Дата рождения" placeholder="01.01.1991" />
          <FormInput inputHandler={handleChange} state={values.phone} type="tel" name="phone" label="Телефон" placeholder="7-7777-77-77" />
          <FormInput inputHandler={handleChange} state={values.website} name="website" label="Сайт" placeholder="https://github.com/leteli/react-form" />
          <MultiLineInput inputHandler={handleChange} state={values.personal} name="personal" label="О себе" placeholder="Я начинающий разработчик..." />
          <MultiLineInput inputHandler={handleChange} state={values.techStack} name="techStack" label="Стек технологий" placeholder="JS, CSS, React..." />
          <MultiLineInput inputHandler={handleChange} state={values.lastProject} name="lastProject" label="Описание последнего проекта" placeholder="Я реализовала..." />
          <ButtonGroup />
        </form>
      </Layout>
      )}
    </>
  );
};

export default Form;
