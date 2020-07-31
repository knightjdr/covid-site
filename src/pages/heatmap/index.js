import React from 'react';

import Heatmap from '../../components/heatmap/heatmap-container';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';

const HeatmapPage = () => (
  <Layout footer={false}>
    <SEO title="Heat map" />
    <Heatmap />
  </Layout>
);

export default HeatmapPage;
