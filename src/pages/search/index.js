import React from 'react';

import Layout from '../../components/layout/layout';
import Search from '../../components/search/search-container';
import SEO from '../../components/seo/seo';

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <h1>Search</h1>
    <Search />
  </Layout>
);

export default SearchPage;
