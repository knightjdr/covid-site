import PropTypes from 'prop-types';
import React from 'react';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';

import Details from '../details/details';
import IconButton from '../buttons/icon/button';

const Sequence = ({
  copyProteinToClipboard,
  sequence,
}) => (
  <Details>
    <summary>Protein sequence</summary>
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
          size="xs"
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
