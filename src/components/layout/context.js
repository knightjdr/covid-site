import { createContext } from 'react';

const LayoutContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default LayoutContext;
