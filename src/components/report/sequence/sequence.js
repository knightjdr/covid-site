import PropTypes from 'prop-types';
import React from 'react';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';

import Details from '../../details/details';
import IconButton from '../../buttons/icon/button';

import './sequence.css';

const Sequence = ({
  copyProteinToClipboard,
  sequence,
}) => (
  <Details summary="Protein sequence">
    <div className="report__protein-sequence">
      <code>
        <div>{sequence}</div>
      </code>
      <div className="report__protein-copy">
        <span>Copy</span>
        <IconButton
          icon={faCopy}
          kind="primary"
          onClick={copyProteinToClipboard}
          type="button"
        />
      </div>
    </div>
  </Details>
);

Sequence.propTypes = {
  copyProteinToClipboard: PropTypes.func.isRequired,
  sequence: PropTypes.string.isRequired,
};

export default Sequence;
