import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/pro-duotone-svg-icons';

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
  <section className="display localization display_bg-circles">
    <div className="display__inner">
      <h2 className="display__title localization__title">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Localization
      </h2>
      <p className="display__instructions">
        Hover over a protein to view its localization or over a compartment
        to view all viral proteins that localize there.
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
