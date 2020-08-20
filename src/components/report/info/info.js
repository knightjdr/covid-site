import PropTypes from 'prop-types';
import React from 'react';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../../buttons/icon/button';
import Details from '../../details/details';
import Link from '../../link/link';

import './info.css';

const Info = ({
  copyProteinToClipboard,
  id,
  sequence,
}) => (
  <Details summary="Information &amp; downloads">
    <div className="report__info">
      <h3>Downloads</h3>
      <ul>
        <li>
          <Link
            download
            to={`/downloads/saint/${id}-saint.txt`}
          >
            SAINT
          </Link>
        </li>
        <li>
          <Link
            download
            to={`/downloads/enrichment/${id}-enrichment.txt`}
          >
            GO enrichment
          </Link>
        </li>
      </ul>
      <p>
        These downloads are specific to this bait. Full data set downloads can
        be found on the
        {' '}
        <Link
          nav
          to="/downloads"
        >
          downloads
        </Link>
        {' '}
        page.
      </p>
      <h3>Sequence</h3>
      <div className="report__info-sequence">
        <code>
          <div>{sequence}</div>
        </code>
        <div className="report__info-copy">
          <span>Copy</span>
          <ButtonIcon
            ariaLabel="copy"
            icon={faCopy}
            kind="primary"
            onClick={copyProteinToClipboard}
            type="button"
          />
        </div>
      </div>
    </div>
  </Details>
);

Info.propTypes = {
  copyProteinToClipboard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  sequence: PropTypes.string.isRequired,
};

export default Info;
