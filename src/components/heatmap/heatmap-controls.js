import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';

import Button from '../buttons/icon/button';
import HeatmapLegend from './heatmap-legend';
import Input from '../input/input';

const HeatmapControls = ({
  handleChangeSearchTerm,
  handleSearch,
  searchTerm,
}) => (
  <div className="heatmap__controls">
    <HeatmapLegend />
    <Input
      direction="horizontal"
      id="heatmap-search"
      label="Search:"
      onChange={handleChangeSearchTerm}
      onKeyPress={handleSearch}
      value={searchTerm.value}
    />
    <Button
      ariaLabel="Search for prey"
      icon={faSearch}
      kind="primary"
      onClick={handleSearch}
    />
    {
      searchTerm.message
      && (
        <span className="heatmap__controls-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          {searchTerm.message}
        </span>
      )
    }
  </div>
);

HeatmapControls.propTypes = {
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.shape({
    message: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default HeatmapControls;
