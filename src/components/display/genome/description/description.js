import React from 'react';

import './description.css';

const description = {
  ORF1a: (
    <div className="display__sequence-description">
      <h3>ORF1a</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>266</span>
        <span>Nucleotides:</span>
        <span>13203</span>
      </div>
      <p>
        Encodes a polyprotein containing eleven non-structural proteins (NSP 1-11).
        A ribosomal frameshift leads to an alternative transcript ORF1ab that
        contains the viral polymerase (NSP12) and helicase (NSP13), and three additional
        non-structural proteins (NSP14-16).
      </p>
    </div>
  ),
  ORF1ab: (
    <div className="display__sequence-description">
      <h3>ORF1ab</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>266</span>
        <span>Nucleotides:</span>
        <span>21290</span>
      </div>
      <p>
        A ribosomal frameshift in ORF1a leads to this alternative transcript that
        contains the first ten non-structural proteins of ORF1a (NSP 1-10) but not NSP11.
        It encodes five additional proteins including the viral polymerase (NSP12) and
        helicase (NSP13), and three non-structural proteins (NSP14-16).
      </p>
    </div>
  ),
};

export default description;
