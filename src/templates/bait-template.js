import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout/layout';
import Report from '../components/report/report-container';
import SEO from '../components/seo/seo';

const BaitTemplate = ({ pageContext }) => {
  const {
    conditions,
    description,
    gene,
    id,
    preys,
    proteinName,
    proteinSequence,
    uniprot,
  } = pageContext;

  return (
    <Layout>
      <SEO title={id} />
      <Report
        conditions={conditions}
        description={description}
        gene={gene}
        id={id}
        proteinName={proteinName}
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
    id: PropTypes.string.isRequired,
    preys: PropTypes.shape({}).isRequired,
    proteinName: PropTypes.string.isRequired,
    proteinSequence: PropTypes.string.isRequired,
    uniprot: PropTypes.string.isRequired,
  }).isRequired,
};

export default BaitTemplate;
