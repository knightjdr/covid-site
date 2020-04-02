import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';
import Report from '../components/report/report-container';
import SEO from '../components/seo';

const BaitTemplate = ({ pageContext }) => {
  const {
    conditions,
    description,
    gene,
    orfName,
    preys,
    proteinSequence,
    uniprot,
  } = pageContext;

  return (
    <Layout>
      <SEO title={orfName} />
      <Report
        conditions={conditions}
        description={description}
        gene={gene}
        orfName={orfName}
        preys={preys}
        proteinSequence={proteinSequence}
        uniprot={uniprot}
      />
    </Layout>
  );
};

BaitTemplate.propTypes = {
  pageContext: PropTypes.shape({
    conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    gene: PropTypes.string.isRequired,
    orfName: PropTypes.string.isRequired,
    preys: PropTypes.shape({}).isRequired,
    proteinSequence: PropTypes.string.isRequired,
    uniprot: PropTypes.string.isRequired,
  }).isRequired,
};

export default BaitTemplate;
