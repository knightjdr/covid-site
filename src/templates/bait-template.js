import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';
import Report from '../components/report/report-container';
import SEO from '../components/seo';

const BaitTemplate = ({ pageContext }) => {
  const {
    gene,
    orfName,
    proteinSequence,
    uniprot,
  } = pageContext;

  return (
    <Layout>
      <SEO title={orfName} />
      <Report
        gene={gene}
        orfName={orfName}
        proteinSequence={proteinSequence}
        uniprot={uniprot}
      />
    </Layout>
  );
};

BaitTemplate.propTypes = {
  pageContext: PropTypes.shape({
    gene: PropTypes.string.isRequired,
    orfName: PropTypes.string.isRequired,
    proteinSequence: PropTypes.string.isRequired,
    uniprot: PropTypes.string.isRequired,
  }).isRequired,
};

export default BaitTemplate;
