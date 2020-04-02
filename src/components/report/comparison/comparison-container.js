import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Comparison from './comparison';

const ComparisonContainer = ({
  conditions,
  preys,
}) => {
  const [selectedConditions, setSelectedConditions] = useState({ x: '', y: '' });

  const selectCondition = (e) => {
    const { value } = e.target;
    const { vertex } = e.target.dataset;
    setSelectedConditions({
      ...selectedConditions,
      [vertex]: value,
    });
  };

  return (
    <Comparison
      conditions={conditions}
      preys={preys}
      selectCondition={selectCondition}
      selectedConditions={selectedConditions}
    />
  );
};

ComparisonContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default ComparisonContainer;
