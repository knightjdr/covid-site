import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../input/input';

const Filters = ({
  fdr,
  handleCountChange,
  handleFDRChange,
  handleSpecificityChange,
  specificity,
  spectralCount,
}) => (
  <div className="report__prey-filters">
    <Input
      direction="horizontal"
      id="table_fdr_filter"
      label="FDR:"
      max={1}
      min={0}
      onChange={handleFDRChange}
      step={0.01}
      type="number"
      value={fdr}
    />
    <Input
      direction="horizontal"
      id="table_count_filter"
      label="Spectral count:"
      min={0}
      onChange={handleCountChange}
      step={1}
      type="number"
      value={spectralCount}
    />
    <Input
      direction="horizontal"
      id="table_specificity_filter"
      label="Specificity:"
      min={0}
      onChange={handleSpecificityChange}
      step={1}
      type="number"
      value={specificity}
    />
  </div>
);

Filters.propTypes = {
  fdr: PropTypes.number.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleSpecificityChange: PropTypes.func.isRequired,
  specificity: PropTypes.number.isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default Filters;
