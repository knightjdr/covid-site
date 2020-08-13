import React from 'react';

import Enrichment from '../../components/enrichment/enrichment-container';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';

const HeatmapPage = () => (
  <Layout footer={false}>
    <SEO title="Enrichment" />
    <Enrichment />
  </Layout>
);

export default HeatmapPage;
