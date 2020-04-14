import PropTypes from 'prop-types';
import React from 'react';

import Table from '../table/table';

const SearchResults = ({
  searchResults,
}) => (
  <div className="search__results">
    {
      searchResults.length > 0
        ? (
          <Table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Synonyms</th>
                <th>UniProt</th>
                <th>Baits</th>
              </tr>
            </thead>
            <tbody>
              {
                searchResults.map((result) => (
                  <tr key={result.symbol}>
                    <td>{result.symbol}</td>
                    <td>{result.synonyms.join(', ')}</td>
                    <td>{result.uniprot.join(', ')}</td>
                    <td>{result.baits.join(', ')}</td>
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
