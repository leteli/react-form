const validate = (name, currentValue) => {
  const value = currentValue.trim(); // только для инпутов
  if (value === '') {
    return { isValid: false, message: 'Поле пустое. Заполните, пожалуйста' }
  }

  // const textareaNames = ['personal', 'techStack', 'lastProject'];
  // if (textareaNames.includes(name)) {
  //   return validateTextarea(value, 600);
  // }

  const regexes = {
    name: { 
        regex: /^[A-ZА-Я]/g,
        errorMessage: 'Первая буква должна быть заглавной',
    },
    surname: {
        regex: /^[A-ZА-Я]/g,
        errorMessage: 'Первая буква должна быть заглавной',
    },
    phone: {
        regex: /^[0-9]{9}$/g,
        errorMessage: 'Номер телефона должен содержать 9 цифр',
    },
    website: {
      regex: /^https:\/\//g,
      errorMessage: 'Адрес сайта должен начинаться с https://',
    },
  };

  if (value.search(regexes[name].regex) !== -1) {
    return { isValid: true, message: null };
  }
  return { isValid: false, message: regexes[name].errorMessage };
};

export const validateIfEmpty = (inputState) => {
  const { value } = inputState;
  if (value === '') {
    return { value, isValid: false, message: 'Поле пустое. Заполните, пожалуйста' };
  } else {
    return inputState;
  }
};

export const validateTextarea = (value, maxLength) => {
  if (value.length <= maxLength) {
    return { 
      isValid: true,
      message: `Осталось ${maxLength - value.length}/${maxLength} символов`,
    };
  } else {
    return { 
      isValid: false,
      message: 'Превышен лимит символов в поле',
    };
  }
};

export const isTextarea = (name) => {
  const textareaNames = ['personal', 'techStack', 'lastProject'];
  return textareaNames.includes(name);
}

export default validate;
