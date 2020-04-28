import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Comparison from './comparison';

import { defaultState as defaultTransform } from './chart/scatterplot/transforms/transforms';

const ComparisonContainer = ({
  conditions,
  preys,
}) => {
  const [options, setOptions] = useState({ count: 0, fdr: 0.01, log: false });
  const [selectedConditions, setSelectedConditions] = useState({ x: '', y: '' });
  const [transform, setTransform] = useState(defaultTransform);

  const selectCondition = (e) => {
    const { value } = e.target;
    const { vertex } = e.target.dataset;
    setSelectedConditions({
      ...selectedConditions,
      [vertex]: value,
    });
  };

  const changeOption = (field, value) => {
    setOptions({
      ...options,
      [field]: value,
    });
  };

  return (
    <Comparison
      changeOption={changeOption}
      conditions={conditions}
      options={options}
      preys={preys}
      selectCondition={selectCondition}
      selectedConditions={selectedConditions}
      transform={{
        ...transform,
        setTransform,
      }}
    />
  );
};

ComparisonContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default ComparisonContainer;
