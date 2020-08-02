import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import HeatmapLegend from './heatmap-legend';
import Link from '../link/link';

import './heatmap.css';

const Heatmap = forwardRef((
  {
    columns,
    highlightedBait,
    highlightedPrey,
    rows,
    scrollerDimensions,
    translation,
  },
  refs,
) => (
  <div className="heatmap">
    <h1>Viral-human proximity interaction heat map</h1>
    <p>
      Clustered heat map of spectral counts for all significant preys (FDR &le; 0.01) detected by viral
      baits. An interactive version of this image can be viewed at
      {' '}
      <Link
        to=" https://prohits-viz.lunenfeld.ca/Interactive/index.html?input_tsv=archive/1596136776_GOUYUlT0me.txt&tool=Interactive"
      >
        ProHits-viz
      </Link>
      .
    </p>
    <div className="heatmap__controls">
      <HeatmapLegend />
    </div>
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
                className={highlightedPrey === row ? 'heatmap__highlight' : null}
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
  </div>
));

Heatmap.defaultProps = {
  highlightedBait: '',
  highlightedPrey: '',
};

Heatmap.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightedBait: PropTypes.string,
  highlightedPrey: PropTypes.string,
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

export default Heatmap;
