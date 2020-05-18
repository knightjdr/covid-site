import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../select/select';

const Vertices = ({
  conditions,
  selectCondition,
  selectedConditions,
}) => (
  <div className="comparison__select-menus">
    <Select
      data-vertex="x"
      id="vertex_x"
      onChange={selectCondition}
      options={conditions}
      placeholder="Select x..."
      value={selectedConditions.x}
    />
    <Select
      data-vertex="y"
      id="vertex_y"
      onChange={selectCondition}
      options={conditions}
      placeholder="Select y..."
      value={selectedConditions.y}
    />
  </div>
);

Vertices.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedConditions: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
};

export default Vertices;
