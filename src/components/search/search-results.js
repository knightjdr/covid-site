import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnalytics } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../link/link';
import Table from '../table/table-container';

const SearchResults = ({
  searchResults,
}) => (
  <div className="search__results">
    {
      searchResults.length > 0
        ? (
          <Table minWidth={600}>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Synonyms</th>
                <th>Entrez</th>
                <th>UniProt</th>
                <th>Viral protein</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {
                searchResults.map((result) => (
                  <tr key={result.symbol}>
                    <td>{result.symbol}</td>
                    <td>{result.synonyms.length > 0 ? result.synonyms.join(', ') : '-' }</td>
                    <td>{result.entrez}</td>
                    <td>{result.uniprot.length > 0 ? result.uniprot[0] : '-'}</td>
                    <td>
                      {
                        result.baits.map((bait, index) => [
                          index > 0 && ', ',
                          <Link
                            key={`${result.symbol}-bait`}
                            nav
                            to={`/${bait}?prey=${result.symbol}`}
                          >
                            {bait}
                          </Link>,
                        ])
                      }
                    </td>
                    <td>
                      <Link
                        hoverBorder
                        nav
                        to={`/heatmap?prey=${result.symbol}`}
                      >
                        <FontAwesomeIcon icon={faAnalytics} />
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        )
        : <span className="search__results-none">No matches</span>
    }
  </div>
);

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default SearchResults;
