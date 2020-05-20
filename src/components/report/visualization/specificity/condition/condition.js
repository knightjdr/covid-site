import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../select/select';

const Condition = ({
  conditions,
  selectCondition,
  selectedCondition,
}) => (
  <div className="specificity__conditions">
    <Select
      id="specificity_condition"
      onChange={selectCondition}
      options={conditions}
      placeholder="Select condition"
      value={selectedCondition}
    />
  </div>
);

Condition.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedCondition: PropTypes.string.isRequired,
};

export default Condition;
