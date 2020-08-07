import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout/layout';
import Report from '../components/report/report';
import SEO from '../components/seo/seo';

const BaitTemplate = ({ pageContext }) => {
  const {
    conditions,
    description,
    gene,
    id,
    images,
    localization,
    name,
    preys,
    sequence,
    uniprot,
  } = pageContext;

  return (
    <Layout margin={false}>
      <SEO title={id} />
      <Report
        conditions={conditions}
        description={description}
        gene={gene}
        id={id}
        images={images}
        localization={localization}
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
    description: PropTypes.shape({
      custom: PropTypes.string,
      uniprot: PropTypes.string,
    }).isRequired,
    gene: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({})),
    localization: PropTypes.shape({
      cell: PropTypes.arrayOf(PropTypes.string),
      cellSpecific: PropTypes.arrayOf(PropTypes.string),
      virus: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    name: PropTypes.string,
    preys: PropTypes.shape({}).isRequired,
    sequence: PropTypes.string.isRequired,
    uniprot: PropTypes.string,
  }).isRequired,
};

export default BaitTemplate;
