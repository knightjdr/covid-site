import PropTypes from 'prop-types';
import React from 'react';
import { faMoon, faSun } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../buttons/icon/button';

const Theme = ({
  darkMode,
  toggle,
}) => (
  <IconButton
    icon={darkMode ? faMoon : faSun}
    kind="primary"
    onClick={toggle}
    type="button"
  />
);

Theme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Theme;
