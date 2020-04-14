import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../input/input';

const Filters = ({
  fdr,
  handleFDRChange,
  handleSpecChange,
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
      id="table_spec_filter"
      label="Spectral count:"
      min={0}
      onChange={handleSpecChange}
      step={1}
      type="number"
      value={spectralCount}
    />
  </div>
);

Filters.propTypes = {
  fdr: PropTypes.number.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleSpecChange: PropTypes.func.isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default Filters;
