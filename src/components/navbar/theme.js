import React from 'react';
import { faMoon, faSun } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../buttons/icon/button';
import LayoutContext from '../layout/context';

const Theme = () => (
  <LayoutContext.Consumer>
    {
      ({ theme, toggleTheme }) => (
        <IconButton
          icon={theme === 'light' ? faMoon : faSun}
          kind="primary"
          onClick={toggleTheme}
          size="xs"
          type="button"
        />
      )
    }
  </LayoutContext.Consumer>
);


export default Theme;
