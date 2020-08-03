import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import HeatmapColumns from './heatmap-columns';
import HeatmapControls from './heatmap-controls';
import HeatmapDescription from './heatmap-description';

import './heatmap.css';
import HeatmapRows from './heatmap-rows';

const Heatmap = forwardRef((
  {
    columns,
    handleChangeSearchTerm,
    handleSearch,
    highlightedBait,
    highlightedPrey,
    rows,
    scrollerDimensions,
    searchTerm,
    translation,
  },
  refs,
) => (
  <div className="heatmap">
    <h1>Viral-human proximity interaction heat map</h1>
    <HeatmapDescription />
    <HeatmapControls
      handleChangeSearchTerm={handleChangeSearchTerm}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
    />
    <HeatmapColumns
      columns={columns}
      highlightedBait={highlightedBait}
    />
    <HeatmapRows
      highlightedPrey={highlightedPrey}
      ref={refs}
      rows={rows}
      scrollerDimensions={scrollerDimensions}
      translation={translation}
    />
  </div>
));

Heatmap.defaultProps = {
  highlightedBait: '',
  highlightedPrey: '',
};

Heatmap.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  highlightedBait: PropTypes.string,
  highlightedPrey: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  searchTerm: PropTypes.shape({
    message: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  translation: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Heatmap;
