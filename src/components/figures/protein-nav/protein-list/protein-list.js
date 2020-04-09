import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../../link/link';

import './protein-list.css';

const proteins = [
  { id: 'E', virusLocalization: 'spike' },
  { id: 'M', virusLocalization: 'envelope' },
  { id: 'NSP10', virusLocalization: '' },
  { id: 'NSP2', virusLocalization: '' },
  { id: 'NSP6', virusLocalization: '' },
  { id: 'ORF6', virusLocalization: '' },
  { id: 'ORF7A', virusLocalization: '' },
  { id: 'ORF9a', virusLocalization: '' },
];

const ProteinList = ({
  handleProteinMouseOut,
  handleProteinMouseOver,
  highlighted,
}) => (
  <ul className={`protein-nav__list ${highlighted}`}>
    {
      proteins.map((protein) => (
        <li key={protein.id}>
          <Link
            className="protein-nav__list-link"
            data-virus-localization={protein.virusLocalization}
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
