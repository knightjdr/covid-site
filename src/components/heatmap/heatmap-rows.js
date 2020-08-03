import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Link from '../link/link';


const HeatmapRows = forwardRef((
  {
    highlightedPrey,
    rows,
    scrollerDimensions,
    translation,
  },
  refs,
) => (
  <div
    className="heatmap__scroll-container"
    ref={refs.container}
  >
    <div
      className="heatmap__scroller"
      style={scrollerDimensions}
    >
      <div
        className="heatmap__rows"
        style={{ transform: `translateY(${translation}px)` }}
      >
        {
          rows.map((row) => (
            <div
              className={
                row.localeCompare(highlightedPrey, undefined, { sensitivity: 'base' }) === 0
                  ? 'heatmap__highlight'
                  : null
              }
              key={row}
            >
              {row}
            </div>
          ))
        }
      </div>
      <canvas
        className="heatmap__canvas"
        ref={refs.canvas}
        style={{ transform: `translateY(${translation}px)` }}
      />
    </div>
  </div>
));

HeatmapRows.propTypes = {
  highlightedPrey: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  translation: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default HeatmapRows;
