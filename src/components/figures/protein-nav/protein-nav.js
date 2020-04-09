import PropTypes from 'prop-types';
import React from 'react';

import ProteinList from './protein-list/protein-list';
import Virus from './virus/virus';

import './protein-nav.css';

const ProteinNav = ({
  handleGraphicMouseOut,
  handleGraphicMouseOver,
  handleProteinMouseOut,
  handleProteinMouseOver,
  highlighted,
}) => (
  <section>
    <ProteinList
      handleProteinMouseOut={handleProteinMouseOut}
      handleProteinMouseOver={handleProteinMouseOver}
      highlighted={highlighted.protein}
    />
    <Virus
      handleGraphicMouseOut={handleGraphicMouseOut}
      handleGraphicMouseOver={handleGraphicMouseOver}
      highlighted={highlighted}
    />
  </section>
);

ProteinNav.propTypes = {
  handleGraphicMouseOut: PropTypes.func.isRequired,
  handleGraphicMouseOver: PropTypes.func.isRequired,
  handleProteinMouseOut: PropTypes.func.isRequired,
  handleProteinMouseOver: PropTypes.func.isRequired,
  highlighted: PropTypes.shape({
    protein: PropTypes.string,
    virus: PropTypes.string,
  }).isRequired,
};

export default ProteinNav;
