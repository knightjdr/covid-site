import PropTypes from 'prop-types';
import React from 'react';

import Options from './options';

import download from '../../../../utils/download';
import validateCount from '../../../../utils/input-handlers/validate-count';
import validateFDR from '../../../../utils/input-handlers/validate-fdr';
import {
  defaultState as defaulTransform,
  handlers as transformHandlers,
} from '../transforms/transforms';

const OptionsContainer = ({
  changeOption,
  id,
  options,
  transform,
}) => {
  const { setTransform } = transform;

  const handleExport = () => {
    const svg = document.getElementById(id);
    if (svg) {
      download(svg.outerHTML, `${id}.svg`);
    }
  };

  const handleCountChange = (e) => {
    const [validated, value] = validateCount(e);
    if (validated) {
      changeOption('count', value);
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

  const handleMidlineToggle = (e) => {
    changeOption('midline', e.target.checked);
  };

  const handleReset = () => {
    setTransform(defaulTransform);
  };

  const handleSpecificityChange = (e) => {
    const [validated, value] = validateCount(e);
    if (validated) {
      changeOption('count', value);
    }
  };

  const handleZoom = (e) => {
    const pseudoE = {
      deltaY: Number(e.currentTarget.dataset.delta),
      preventDefault: () => {},
      currentTarget: document.getElementById(id),
    };
    const wheelOptions = {
      id: `#${id}_points_wheel`,
      transform,
      vertex: 'center',
    };
    transformHandlers.zoom(pseudoE, wheelOptions);
  };

  return (
    <Options
      handleCountChange={handleCountChange}
      handleExport={handleExport}
      handleFDRChange={handleFDRChange}
      handleLogToggle={handleLogToggle}
      handleMidlineToggle={handleMidlineToggle}
      handleReset={handleReset}
      handleSpecificityChange={handleSpecificityChange}
      handleZoom={handleZoom}
      id={id}
      options={options}
    />
  );
};

OptionsContainer.propTypes = {
  changeOption: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
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
