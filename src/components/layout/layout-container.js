import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Layout from './layout';
import LayoutContext from './context';

import { getLocalStorage, setLocalStorage } from '../../utils/local-storage';

const LayoutContainer = ({
  children,
}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setLocalStorage('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = getLocalStorage('theme');
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ theme, toggleTheme }}>
      <Layout
        theme={theme}
        toggleTheme={toggleTheme}
      >
        {children}
      </Layout>
    </LayoutContext.Provider>
  );
};

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
