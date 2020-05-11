import React from 'react';

import Link from '../link/link';

const Contact = () => (
  <>
    <h2 id="contact">Contact</h2>
    <ul>
      <li>
        General inquiries:
        {' '}
        <Link
          to="mailto:gingras@lunenfeld.ca"
        >
          Anne-Claude Gingras (gingras@lunenfeld.ca)
        </Link>
        {' '}
        or
        {' '}
        <Link
          to="mailto:braught@uhnres.utoronto.ca"
        >
          Brian Raught (braught@uhnres.utoronto.ca)
        </Link>
      </li>
      <li>
        Reagent requests:
        {' '}
        <Link
          to="mailto:habdouni@lunenfeld.ca"
        >
          Hala Abdouni (habdouni@lunenfeld.ca)
        </Link>
      </li>
      <li>
        Website and data downloads:
        {' '}
        <Link
          to="mailto:jknight@lunenfeld.ca"
        >
          James Knight (jknight@lunenfeld.ca)
        </Link>
      </li>
    </ul>
  </>
);

Contact.propTypes = {};

export default Contact;
