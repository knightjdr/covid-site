import PropTypes from 'prop-types';
import React from 'react';

import Options from './options';

import download from '../../../utils/download';
import validateFDR from '../../../utils/input-handlers/validate-fdr';
import validateSpec from '../../../utils/input-handlers/validate-spec';
import {
  defaultState as defaulTransform,
  handlers as transformHandlers,
} from './chart/scatterplot/transforms/transforms';

const OptionsContainer = ({
  changeOption,
  options,
  transform,
}) => {
  const { setTransform } = transform;

  const handleExport = () => {
    const svg = document.getElementById('scatterplot');
    if (svg) {
      download(svg.outerHTML, 'scatterplot.svg');
    }
  };

  const handleFDRChange = (e) => {
    const [validated, value] = validateFDR(e);
    if (validated) {
      changeOption('fdr', value);
    }
  };

  const handleLogToggle = (e) => {
    changeOption('log', e.target.checked);
  };

  const handleReset = () => {
    setTransform(defaulTransform);
  };

  const handleSpecChange = (e) => {
    const [validated, value] = validateSpec(e);
    if (validated) {
      changeOption('count', value);
    }
  };

  const handleZoom = (e) => {
    const pseudoE = {
      deltaY: Number(e.currentTarget.dataset.delta),
      preventDefault: () => {},
      currentTarget: document.querySelector('#scatterplot'),
    };
    const wheelOptions = {
      id: '#scatterplot__points-wheel',
      transform,
      vertex: 'center',
    };
    transformHandlers.zoom(pseudoE, wheelOptions);
  };

  return (
    <Options
      handleExport={handleExport}
      handleFDRChange={handleFDRChange}
      handleLogToggle={handleLogToggle}
      handleReset={handleReset}
      handleSpecChange={handleSpecChange}
      handleZoom={handleZoom}
      options={options}
    />
  );
};

OptionsContainer.propTypes = {
  changeOption: PropTypes.func.isRequired,
  options: PropTypes.shape({}).isRequired,
  transform: PropTypes.shape({
    origin: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    matrix: PropTypes.shape({
      plot: PropTypes.string,
      xAxis: PropTypes.string,
      yAxis: PropTypes.string,
    }),
    scale: PropTypes.number,
    setTransform: PropTypes.func.isRequired,
  }).isRequired,
};

export default OptionsContainer;
