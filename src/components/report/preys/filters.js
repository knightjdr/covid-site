import PropTypes from 'prop-types';
import React from 'react';

const Filters = ({
  fdr,
  handleFDRChange,
  handleSpecChange,
  spectralCount,
}) => (
  <div className="report__prey-filters">
    <label htmlFor="fdr_filter">
      <span>FDR:</span>
      <input
        id="fdr_filter"
        max={1}
        min={0}
        onChange={handleFDRChange}
        step={0.01}
        type="number"
        value={fdr}
      />
    </label>
    <label htmlFor="spec_filter">
      <span>Spectral count:</span>
      <input
        id="spec_filter"
        min={0}
        onChange={handleSpecChange}
        step={1}
        type="number"
        value={spectralCount}
      />
    </label>
  </div>
);

Filters.propTypes = {
  fdr: PropTypes.number.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleSpecChange: PropTypes.func.isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default Filters;
