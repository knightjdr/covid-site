import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../../link/link';

import proteins from '../../../../../content/bait-list.json';

import './protein-list.css';

const ProteinList = ({
  handleProteinMouseOut,
  handleProteinMouseOver,
  highlighted,
}) => (
  <ul
    className="protein-nav__list"
    data-highlighted={highlighted}
  >
    {
      proteins.map((protein) => (
        <li key={protein.id}>
          <Link
            className="protein-nav__list-link"
            data-cell-localization={protein.localization.cell.join(', ')}
            data-virus-localization={protein.localization.virus.join(', ')}
            nav
            onBlur={handleProteinMouseOut}
            onFocus={handleProteinMouseOver}
            onMouseOut={handleProteinMouseOut}
            onMouseOver={handleProteinMouseOver}
            to={`/${protein.id}`}
          >
            {protein.id}
          </Link>
        </li>
      ))
    }
  </ul>
);

ProteinList.propTypes = {
  handleProteinMouseOut: PropTypes.func.isRequired,
  handleProteinMouseOver: PropTypes.func.isRequired,
  highlighted: PropTypes.string.isRequired,
};

export default ProteinList;
