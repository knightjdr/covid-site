import React from 'react';

import Link from '../../../link/link';

import './description.css';

const description = {
  ORF1a: (
    <div className="display__sequence-description">
      <h3>ORF1a</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>266</span>
        <span>Length (BP):</span>
        <span>13203</span>
      </div>
      <p>
        Encodes a polyprotein containing eleven non-structural proteins (NSP 1-11).
        A ribosomal frameshift leads to an alternative transcript ORF1ab that
        contains the viral polymerase (NSP12) and helicase (NSP13), and three additional
        non-structural proteins (NSP14-16).
      </p>
      <div className="display__sequence-description-report-link">
        <span>Reports</span>
        <ul>
          <li><Link nav to="/NSP2">NSP2</Link></li>
          <li><Link nav to="/NSP4">NSP4</Link></li>
          <li><Link nav to="/NSP8">NSP8</Link></li>
        </ul>
      </div>
    </div>
  ),
  ORF1ab: (
    <div className="display__sequence-description">
      <h3>ORF1ab</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>266</span>
        <span>Length (BP):</span>
        <span>21290</span>
      </div>
      <p>
        A ribosomal frameshift in ORF1a leads to this alternative transcript that
        contains the first ten non-structural proteins of ORF1a (NSP 1-10) but not NSP11.
        It encodes five additional proteins including the viral polymerase (NSP12) and
        helicase (NSP13), and three non-structural proteins (NSP14-16).
      </p>
      <div className="display__sequence-description-report-link">
        <span>Reports</span>
        <ul>
          <li><Link nav to="/NSP2">NSP2</Link></li>
          <li><Link nav to="/NSP4">NSP4</Link></li>
          <li><Link nav to="/NSP8">NSP8</Link></li>
        </ul>
      </div>
    </div>
  ),
  S: (
    <div className="display__sequence-description">
      <h3>S (spike protein)</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>21563</span>
        <span>Length (BP):</span>
        <span>3822</span>
      </div>
      <p>
        The spike protein attaches the virion to the cell through binding of the human ACE2
        receptor and internalization of the virus by endocytosis.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/S">S</Link>
      </div> */ }
    </div>
  ),
  E: (
    <div className="display__sequence-description">
      <h3>E (envelope protein)</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>26245</span>
        <span>Length (BP):</span>
        <span>228</span>
      </div>
      <p>
        Viral envelope viroporin that self-assembles in host membranes to facilitate
        ion transport (from UniProt).
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/E">E</Link>
    </div> */}
    </div>
  ),
  M: (
    <div className="display__sequence-description">
      <h3>M (membrane protein)</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>26523</span>
        <span>Length (BP):</span>
        <span>669</span>
      </div>
      <p>
        Viral envelope protein that functions in virus morphogenesis and assembly (from UniProt).
      </p>
      <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/M">M</Link>
      </div>
    </div>
  ),
  N: (
    <div className="display__sequence-description">
      <h3>N (nucleoprotein)</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>28274</span>
        <span>Length (BP):</span>
        <span>1260</span>
      </div>
      <p>
        Nucleocapsid protein that packages viral genomic RNA and through an interaction
        with the M protein facilitates virion assembly (from UniProt).
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/N">N</Link>
      </div> */}
    </div>
  ),
  ORF3a: (
    <div className="display__sequence-description">
      <h3>ORF3a</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>25393</span>
        <span>Length (BP):</span>
        <span>828</span>
      </div>
      <p>
        Forms potassium sensitive ion channels (viroporin) that may modulate virus release
        and up-regulates expression of fibrinogen subunits in lung epithelial cells (from UniProt).
        Activates inflammatory signal via JNK, NF-kB, IL-8 and RANTES.
      </p>
      <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF3A">ORF3A</Link>
      </div>
    </div>
  ),
  ORF3b: (
    <div className="display__sequence-description">
      <h3>ORF3b</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>25524</span>
        <span>Length (BP):</span>
        <span>174</span>
      </div>
      <p>
        Activates inflammatory signal via RUNX1B, JNK and ERK.
      </p>
      <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF3B">ORF3B</Link>
      </div>
    </div>
  ),
  ORF6: (
    <div className="display__sequence-description">
      <h3>ORF6</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>27202</span>
        <span>Length (BP):</span>
        <span>186</span>
      </div>
      <p>
        May stimulate cellular DNA synthesis in vitro (from UniProt). Antagonizes STAT1 function
        and IFN signalling.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF6">ORF6</Link>
      </div> */}
    </div>
  ),
  ORF7a: (
    <div className="display__sequence-description">
      <h3>ORF7a</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>27394</span>
        <span>Length (BP):</span>
        <span>366</span>
      </div>
      <p>
        Induces an inflammatory response via NF-kB, IL8 and RANTES.
      </p>
      <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF7A">ORF7A</Link>
      </div>
    </div>
  ),
  ORF7b: (
    <div className="display__sequence-description">
      <h3>ORF7b</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>27756</span>
        <span>Length (BP):</span>
        <span>132</span>
      </div>
      <p>
        Encodes a protein that induces an inflammatory response.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF7B">ORF7B</Link>
      </div> */}
    </div>
  ),
  ORF8: (
    <div className="display__sequence-description">
      <h3>ORF8</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>27894</span>
        <span>Length (BP):</span>
        <span>366</span>
      </div>
      <p>
        Induces DNA synthesis and apoptosis via miktochondria-dependent pathway.
      </p>
      <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF8">ORF8</Link>
      </div>
    </div>
  ),
  ORF9b: (
    <div className="display__sequence-description">
      <h3>ORF9b</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>28284</span>
        <span>Length (BP):</span>
        <span>294</span>
      </div>
      <p>
        Encodes a protein of unknown function.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF9B">ORF9B</Link>
      </div> */}
    </div>
  ),
  ORF14: (
    <div className="display__sequence-description">
      <h3>ORF14</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>28734</span>
        <span>Length (BP):</span>
        <span>222</span>
      </div>
      <p>
        Encodes a protein of unknown function.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF14">ORF14</Link>
      </div> */}
    </div>
  ),
  ORF10: (
    <div className="display__sequence-description">
      <h3>ORF10</h3>
      <div className="display__sequence-nucleotides">
        <span>Start:</span>
        <span>29558</span>
        <span>Length (BP):</span>
        <span>117</span>
      </div>
      <p>
        Encodes a protein of unknown function.
      </p>
      {/* <div className="display__sequence-description-report-link display__sequence-description-report-link_inline">
        <span>Report:</span>
        <Link nav to="/ORF10">ORF10</Link>
      </div> */}
    </div>
  ),
};

export default description;
