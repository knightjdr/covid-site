import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

const DownloadsPage = () => (
  <Layout>
    <SEO title="Downloads" />
    <h1>Downloads</h1>
    <h2>SAINT files</h2>
    <p>
      The SAINT files contain all preys detected for profiled baits with scoring and comprehensive identifier
      information. There are four datasets available for download:
    </p>
    <ul>
      <li>
        <Link
          download
          nav
          to="downloads/saint-all.txt"
        >
          saint-all
        </Link>
        :
        {' '}
        all viral baits, including N- and C-terminal tags and mutants, as well as non-viral baits used
        for assesing localization.
      </li>
      <li>
        <Link
          download
          nav
          to="downloads/saint-virus.txt"
        >
          saint-virus
        </Link>
        :
        {' '}
        all viral baits, including N- and C-terminal tags and mutants.
      </li>
      <li>
        <Link
          download
          nav
          to="downloads/saint-virus-no-mutants.txt"
        >
          saint-virus-no-mutants
        </Link>
        :
        {' '}
        all viral baits, including N- and C-terminal tags but excluding mutants.
      </li>
      <li>
        <Link
          download
          nav
          to="downloads/saint-virus-merged.txt"
        >
          saint-merged
        </Link>
        :
        {' '}
        viral baits merged from the N- and C-terminal tags. Merging was done by best FDR and then
        highest spectral count when a prey was detected by both tags.
      </li>
    </ul>
  </Layout>
);

export default DownloadsPage;
