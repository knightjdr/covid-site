import PropTypes from 'prop-types';
import React from 'react';
import Details from '../details/details';

const descriptions = {
  A549: 'A549 adenocarcinomic human alveolar basal epithelial cells',
  Ct: 'N-terminal tag',
  Nt: 'N-terminal tag',
};

const getTags = (conditions) => {
  const uniqueTags = conditions.reduce((accum, condition) => {
    const parts = condition.split('-');
    return {
      ...accum,
      ...parts.reduce((partAccum, part) => ({ ...partAccum, [part]: true }), {}),
    };
  }, {});
  const tags = Object.keys(uniqueTags);
  tags.sort();
  return tags;
};

const Legend = ({
  conditions,
}) => {
  const tags = getTags(conditions);
  return (
    <div className="report__prey-legend">
      <Details listStyleType="info">
        <summary>Condition legend</summary>
        <ul>
          {
            tags.map((tag) => (
              <li key={tag}>
                {tag}
                :
                {' '}
                {descriptions[tag]}
              </li>
            ))
          }
        </ul>
      </Details>
    </div>
  );
};

Legend.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Legend;
