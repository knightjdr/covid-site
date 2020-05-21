import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';

import BaitBait from './bb';

import getData from './data/get-data';
import { defaultState as defaultTransform } from '../transforms/transforms';

const BaitBaitContainer = ({
  conditions,
  preys,
}) => {
  const [options, setOptions] = useState({
    count: 0,
    fdr: 0.01,
    log: true,
    midline: true,
    specificity: 0,
  });
  const [selectedConditions, setSelectedConditions] = useState({ x: '', y: '' });
  const [transform, setTransform] = useState({
    matrix: { ...defaultTransform.matrix },
    origin: { ...defaultTransform.origin },
    scale: defaultTransform.scale,
  });
  const scatterRef = useRef();

  const data = useMemo(() => {
    const dataOptions = {
      ...options,
      ...selectedConditions,
      scale: transform.scale,
    };
    return getData(preys, scatterRef, dataOptions);
  }, [options, preys, transform.scale, scatterRef, selectedConditions]);

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
    <BaitBait
      changeOption={changeOption}
      conditions={conditions}
      data={data}
      options={options}
      ref={scatterRef}
      selectCondition={selectCondition}
      selectedConditions={selectedConditions}
      transform={{
        ...transform,
        setTransform,
      }}
    />
  );
};

BaitBaitContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default BaitBaitContainer;
