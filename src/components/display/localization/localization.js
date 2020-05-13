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
  userText,
}) => (
  <section className="display">
    <div className="display__inner">
      <h2 className="display__title">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Localization
      </h2>
      <p className="display__legend">
        There are four structual viral proteins (E - envelope, M - membrane,
        N - nucleocapsid and S - spike) and 25 non-structural proteins. We localized
        these proteins in host cells using immunfluorescence and confirmed
        localizations with Gene Ontology (GO) enrichments of proximal proteins
        detected in BioID experiments. NB: NSP11 was too small for cloning and is
        not included in this analysis.
      </p>
      <p className="display__instructions">{userText}</p>
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
  userText: PropTypes.string.isRequired,
};

export default Localization;
