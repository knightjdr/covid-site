import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/link';

const HeatmapColumns = ({
  columns,
  highlightedBait,
}) => (
  <div className="heatmap__columns-container">
    <div className="heatmap__columns">
      {
        columns.map((column) => (
          <div
            className={highlightedBait === column ? 'heatmap__highlight' : null}
            key={column}
          >
            <Link
              nav
              to={`/${column}`}
            >
              {column}
            </Link>
          </div>
        ))
      }
    </div>
  </div>
);

HeatmapColumns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightedBait: PropTypes.string.isRequired,
};

export default HeatmapColumns;
