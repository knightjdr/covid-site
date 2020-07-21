import PropTypes from 'prop-types';
import React from 'react';
import Details from '../details/details';

const descriptions = {
  A549: 'A549 adenocarcinomic human alveolar basal epithelial cells',
  C145A: 'Cysteine to alanine mutation at residue 145',
  C857A: 'Cysteine to alanine mutation at residue 857',
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
      <Details
        listStyleType="info"
        summary="Condition legend"
      >
        <ul className="report__prey-legend">
          {
            tags.map((tag) => (
              <li key={tag}>
                <span>{tag}</span>
                :
                {' '}
                {descriptions[tag]}
              </li>
            ))
          }
          <li>
            <span>SC</span>
            : spectral counts
          </li>
          <li>
            <span>Spec</span>
            : specificity, calculated as the fold enrichment of a prey in the condition relative
            to all other baits in the same cell type
          </li>
          <li>
            <span>FDR</span>
            : false discovery rate
          </li>
        </ul>
      </Details>
    </div>
  );
};

Legend.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Legend;
