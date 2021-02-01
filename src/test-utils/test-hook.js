import React from 'react';
import { act } from 'react-dom/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

export { act };

const TestHook = ({ callback }) => {
  callback();
  return null;
};

export const renderHook = (callback) => {
  render(<TestHook callback={callback} />);
};
