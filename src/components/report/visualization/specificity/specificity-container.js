import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';

import Specificity from './specificity';

import getData from './data/get-data';
import { defaultState as defaultTransform } from '../transforms/transforms';

const SpecificityContainer = ({
  conditions,
  preys,
}) => {
  const [options, setOptions] = useState({
    count: 0,
    fdr: 0.01,
    log: false,
    specificity: 0,
  });
  const [selectedCondition, setSelectedCondition] = useState('');
  const [transform, setTransform] = useState({
    matrix: { ...defaultTransform.matrix },
    origin: { ...defaultTransform.origin },
    scale: defaultTransform.scale,
  });
  const scatterRef = useRef();

  const data = useMemo(() => {
    const dataOptions = {
      ...options,
      condition: selectedCondition,
      scale: transform.scale,
    };
    return getData(preys, scatterRef, dataOptions);
  }, [options, preys, transform.scale, scatterRef, selectedCondition]);

  const selectCondition = (e) => {
    const { value } = e.target;
    setSelectedCondition(value);
  };

  const changeOption = (field, value) => {
    setOptions({
      ...options,
      [field]: value,
    });
  };

  return (
    <Specificity
      changeOption={changeOption}
      conditions={conditions}
      data={data}
      options={options}
      ref={scatterRef}
      selectCondition={selectCondition}
      selectedCondition={selectedCondition}
      transform={{
        ...transform,
        setTransform,
      }}
    />
  );
};

SpecificityContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default SpecificityContainer;
