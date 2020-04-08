import isNumber from '../is-number';

const validateFDR = (e) => {
  let value = Number(e.target.value);
  if (isNumber(value)) {
    value = Math.max(0, value);
    value = Math.min(1, value);
    return [true, value];
  }
  return [false];
};

export default validateFDR;
