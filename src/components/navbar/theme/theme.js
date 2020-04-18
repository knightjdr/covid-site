import PropTypes from 'prop-types';
import React from 'react';
import { faMoon, faSun } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../buttons/icon/button';

const Theme = ({
  theme,
  toggleTheme,
}) => (
  <IconButton
    icon={theme === 'light' ? faMoon : faSun}
    kind="primary"
    onClick={toggleTheme}
    size="xs"
    type="button"
  />
);

Theme.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Theme;
