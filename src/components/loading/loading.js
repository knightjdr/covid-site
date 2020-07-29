import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import './loading.css';

const Loading = ({
  message,
}) => (
  <div className="loading-notification">
    <FontAwesomeIcon icon={faSpinner} spin />
    {message}
  </div>
);

Loading.defaultProps = {
  message: 'Loading...',
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
