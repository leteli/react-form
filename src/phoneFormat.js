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

// export const stateOutputFormat = (state) => {
//   const result = {};
//   for (const inputName in state) {
//     result[inputName] = state[inputName].value;
//   }
//   return result;
// };

export default phoneOutputFormat;
