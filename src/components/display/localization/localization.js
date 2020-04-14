import PropTypes from 'prop-types';
import React from 'react';

import InfectedCell from './infected-cell/infected-cell';
import ProteinList from './protein-list/protein-list';
import Virus from './virus/virus';

import './localization.css';

const Localization = ({
  handleGraphicMouseOut,
  handleGraphicMouseOver,
  handleProteinMouseOut,
  handleProteinMouseOver,
  highlighted,
}) => (
  <section className="display localization">
    <h2>Localization</h2>
    <p className="display__instructions">
      Hover over a protein to view its localization or hover over a compartment
      to view all proteins that localize to it.
    </p>
    <ProteinList
      handleProteinMouseOut={handleProteinMouseOut}
      handleProteinMouseOver={handleProteinMouseOver}
      highlighted={highlighted.protein}
    />
    <div className="localization__graphics">
      <Virus
        handleGraphicMouseOut={handleGraphicMouseOut}
        handleGraphicMouseOver={handleGraphicMouseOver}
        highlighted={highlighted}
      />
      <InfectedCell
        handleGraphicMouseOut={handleGraphicMouseOut}
        handleGraphicMouseOver={handleGraphicMouseOver}
        highlighted={highlighted}
      />
    </div>
  </section>
);

Localization.propTypes = {
  handleGraphicMouseOut: PropTypes.func.isRequired,
  handleGraphicMouseOver: PropTypes.func.isRequired,
  handleProteinMouseOut: PropTypes.func.isRequired,
  handleProteinMouseOver: PropTypes.func.isRequired,
  highlighted: PropTypes.shape({
    protein: PropTypes.string,
    virus: PropTypes.string,
  }).isRequired,
};

export default Localization;
