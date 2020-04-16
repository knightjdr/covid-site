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
    name,
    preys,
    sequence,
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
        name={name}
        preys={preys}
        sequence={sequence}
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
    name: PropTypes.string.isRequired,
    preys: PropTypes.shape({}).isRequired,
    sequence: PropTypes.string.isRequired,
    uniprot: PropTypes.shape({
      covid: PropTypes.string,
      sars: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default BaitTemplate;
