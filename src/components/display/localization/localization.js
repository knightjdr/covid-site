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
  <section className="display">
    <div className="display__inner">
      <h2 className="display__title">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Localization
      </h2>
      <p className="display__legend">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="display__instructions">
        Hover over a protein to view its localization or over a compartment
        to view all viral proteins that localize there.
      </p>
      <ProteinList
        handleProteinMouseOut={handleProteinMouseOut}
        handleProteinMouseOver={handleProteinMouseOver}
        highlighted={highlighted.protein}
      />
      <div className="display__localization-graphics">
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
