const phoneOutputFormat = (state, value) => {
  const length = value.length;
  if (state.phone.value.endsWith('-')) {
    return value;
  }
  if (length === 1 || length === 6 || length === 9) {
    value += '-';
  }
  return value;
};

export default phoneOutputFormat;
