import React, { useState, useLayoutEffect } from 'react';

import Theme from './theme';

import useLocalStorage from '../../hooks/local-storage/local-storage';

const ThemeContainer = () => {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setStoredTheme(newTheme);
    document.getElementById('layout').setAttribute('data-theme', newTheme);
  };

  useLayoutEffect(() => {
    document.getElementById('layout').setAttribute('data-theme', theme);
  }, []);

  return (
    <Theme
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
};

export default ThemeContainer;
