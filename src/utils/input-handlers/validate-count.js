import isNumber from '../is-number';

const validateCount = (e) => {
  let value = Number(e.target.value);
  if (isNumber(value)) {
    value = Math.max(0, value);
    return [true, value];
  }
  return [false];
};

export default validateCount;
