import React from 'react';

import Layout from '../components/layout/layout';
import Link from '../components/link/link';
import SEO from '../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
    <ul>
      <li><Link to="/E" nav>E</Link></li>
      <li><Link to="/M" nav>M</Link></li>
      <li><Link to="/NSP10" nav>NSP10</Link></li>
      <li><Link to="/NSP2" nav>NSP2</Link></li>
      <li><Link to="/NSP6" nav>NSP6</Link></li>
      <li><Link to="/ORF6" nav>ORF6</Link></li>
      <li><Link to="/ORF7A" nav>ORF7A</Link></li>
      <li><Link to="/ORF9A" nav>ORF9A</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
