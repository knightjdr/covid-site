/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import './virus.css';

const validHighlightNames = [
  'capsid',
  'envelope',
  'matrix',
  'spike',
];

const getHighlightName = (highlighted) => {
  if (highlighted.virus) {
    return highlighted.virus.replace('_', ' ');
  }
  if (highlighted.protein && validHighlightNames.includes(highlighted.protein)) {
    return highlighted.protein.replace('_', ' ');
  }
  return '';
};

const Virus = ({
  handleGraphicMouseOut,
  handleGraphicMouseOver,
  highlighted,
}) => (
  <div className="protein-nav__virus">
    <svg
      data-highlighted={highlighted.virus}
      xmlns="http://www.w3.org/2000/svg"
      height="400"
      width="400"
      viewBox="0 0 400 400"
    >
      <g
        data-localization="spike"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <g>
          <path className="protein-nav__virus_dark" d="M200 55.5c-3 0-5.5-2.5-5.5-5.5V26c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v24c0 3-2.5 5.5-5.5 5.5z" />
          <path className="protein-nav__virus_dark" d="M212 31.5h-24c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h24c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M125 75.6c-1.9 0-3.8-1-4.8-2.8l-12-20.8c-1.5-2.6-.6-6 2-7.5s6-.6 7.5 2l12 20.8c1.5 2.6.6 6-2 7.5-.8.6-1.8.8-2.7.8z" />
          <path className="protein-nav__virus_dark" d="M102.6 60.8c-1.9 0-3.7-1-4.8-2.8-1.5-2.6-.6-6 2-7.5l20.8-12c2.6-1.5 6-.6 7.5 2s.6 6-2 7.5l-20.8 12c-.8.6-1.8.8-2.7.8z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M70.1 130.5c-.9 0-1.9-.2-2.7-.7l-20.8-12c-2.6-1.5-3.5-4.9-2-7.5 1.5-2.6 4.9-3.5 7.5-2l20.8 12c2.6 1.5 3.5 4.9 2 7.5-1.1 1.7-2.9 2.7-4.8 2.7z" />
          <path className="protein-nav__virus_dark" d="M43.3 128.9c-.9 0-1.9-.2-2.7-.7-2.6-1.5-3.5-4.9-2-7.5l12-20.8c1.5-2.6 4.9-3.5 7.5-2 2.6 1.5 3.5 4.9 2 7.5l-12 20.8c-1 1.7-2.9 2.7-4.8 2.7z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M50 205.5H26c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h24c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5z" />
          <path className="protein-nav__virus_dark" d="M26 217.5c-3 0-5.5-2.5-5.5-5.5v-24c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v24c0 3-2.5 5.5-5.5 5.5z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M49.3 292.5c-1.9 0-3.7-1-4.8-2.8-1.5-2.6-.6-6 2-7.5l20.8-12c2.6-1.5 6-.6 7.5 2s.6 6-2 7.5l-20.8 12c-.8.6-1.8.8-2.7.8z" />
          <path className="protein-nav__virus_dark" d="M55.3 302.9c-1.9 0-3.8-1-4.8-2.8l-12-20.8c-1.5-2.6-.6-6 2-7.5s6-.6 7.5 2l12 20.8c1.5 2.6.6 6-2 7.5-.8.6-1.8.8-2.7.8z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M113 356.2c-.9 0-1.9-.2-2.7-.7-2.6-1.5-3.5-4.9-2-7.5l12-20.8c1.5-2.6 4.9-3.5 7.5-2 2.6 1.5 3.5 4.9 2 7.5l-12 20.8c-1.1 1.7-2.9 2.7-4.8 2.7z" />
          <path className="protein-nav__virus_dark" d="M123.4 362.2c-.9 0-1.9-.2-2.7-.7l-20.8-12c-2.6-1.5-3.5-4.9-2-7.5 1.5-2.6 4.9-3.5 7.5-2l20.8 12c2.6 1.5 3.5 4.9 2 7.5-1.1 1.7-2.9 2.7-4.8 2.7z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M200 379.5c-3 0-5.5-2.5-5.5-5.5v-24c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v24c0 3-2.5 5.5-5.5 5.5z" />
          <path className="protein-nav__virus_dark" d="M212 379.5h-24c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h24c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M287 356.2c-1.9 0-3.7-1-4.8-2.8l-12-20.8c-1.5-2.6-.6-6 2-7.5s6-.6 7.5 2l12 20.8c1.5 2.6.6 6-2 7.5-.8.6-1.8.8-2.7.8z" />
          <path className="protein-nav__virus_dark" d="M276.6 362.2c-1.9 0-3.7-1-4.8-2.8-1.5-2.6-.6-6 2-7.5l20.8-12c2.6-1.5 6-.6 7.5 2s.6 6-2 7.5l-20.8 12c-.8.6-1.8.8-2.7.8z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M350.7 292.5c-.9 0-1.9-.2-2.7-.7l-20.8-12c-2.6-1.5-3.5-4.9-2-7.5 1.5-2.6 4.9-3.5 7.5-2l20.8 12c2.6 1.5 3.5 4.9 2 7.5-1.1 1.7-2.9 2.7-4.8 2.7z" />
          <path className="protein-nav__virus_dark" d="M344.7 302.9c-.9 0-1.9-.2-2.7-.7-2.6-1.5-3.5-4.9-2-7.5l12-20.8c1.5-2.6 4.9-3.5 7.5-2 2.6 1.5 3.5 4.9 2 7.5l-12 20.8c-1.1 1.7-2.9 2.7-4.8 2.7z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M374 205.5h-24c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h24c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5z" />
          <path className="protein-nav__virus_dark" d="M374 217.5c-3 0-5.5-2.5-5.5-5.5v-24c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v24c0 3-2.5 5.5-5.5 5.5z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M329.9 130.5c-1.9 0-3.7-1-4.8-2.8-1.5-2.6-.6-6 2-7.5l20.8-12c2.6-1.5 6-.6 7.5 2s.6 6-2 7.5l-20.8 12c-.8.6-1.8.8-2.7.8z" />
          <path className="protein-nav__virus_dark" d="M356.7 128.9c-1.9 0-3.7-1-4.8-2.8l-12-20.8c-1.5-2.6-.6-6 2-7.5s6-.6 7.5 2l12 20.8c1.5 2.6.6 6-2 7.5-.8.6-1.8.8-2.7.8z" />
        </g>
        <g>
          <path className="protein-nav__virus_dark" d="M275 75.6c-.9 0-1.9-.2-2.7-.7-2.6-1.5-3.5-4.9-2-7.5l12-20.8c1.5-2.6 4.9-3.5 7.5-2 2.6 1.5 3.5 4.9 2 7.5l-12 20.8c-1.1 1.7-2.9 2.7-4.8 2.7z" />
          <path className="protein-nav__virus_dark" d="M297.4 60.8c-.9 0-1.9-.2-2.7-.7l-20.8-12c-2.6-1.5-3.5-4.9-2-7.5 1.5-2.6 4.9-3.5 7.5-2l20.8 12c2.6 1.5 3.5 4.9 2 7.5-1.1 1.7-2.9 2.7-4.8 2.7z" />
        </g>
      </g>
      <circle className="protein-nav__virus_light" cx="200" cy="200" r="150" />
      <g
        data-localization="envelope"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <path className="protein-nav__virus_dark" d="M200 64c36.3 0 70.5 14.1 96.2 39.8 25.7 25.7 39.8 59.8 39.8 96.2s-14.1 70.5-39.8 96.2C270.5 321.9 236.3 336 200 336s-70.5-14.1-96.2-39.8C78.1 270.5 64 236.3 64 200s14.1-70.5 39.8-96.2S163.7 64 200 64m0-14c-82.8 0-150 67.2-150 150s67.2 150 150 150 150-67.2 150-150S282.8 50 200 50z" />
      </g>
      <g
        data-localization="matrix"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <circle className="protein-nav__virus_medium" cx="76" cy="200" r="10" />
        <circle className="protein-nav__virus_medium" cx="77.5" cy="219.4" r="10" />
        <circle className="protein-nav__virus_medium" cx="82.1" cy="238.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="89.5" cy="256.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="99.7" cy="272.9" r="10" />
        <circle className="protein-nav__virus_medium" cx="112.3" cy="287.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="127.1" cy="300.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="143.7" cy="310.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="161.7" cy="317.9" r="10" />
        <circle className="protein-nav__virus_medium" cx="180.6" cy="322.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="200" cy="324" r="10" />
        <circle className="protein-nav__virus_medium" cx="219.4" cy="322.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="238.3" cy="317.9" r="10" />
        <circle className="protein-nav__virus_medium" cx="256.3" cy="310.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="272.9" cy="300.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="287.7" cy="287.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="300.3" cy="272.9" r="10" />
        <circle className="protein-nav__virus_medium" cx="310.5" cy="256.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="317.9" cy="238.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="322.5" cy="219.4" r="10" />
        <circle className="protein-nav__virus_medium" cx="324" cy="200" r="10" />
        <circle className="protein-nav__virus_medium" cx="322.5" cy="180.6" r="10" />
        <circle className="protein-nav__virus_medium" cx="317.9" cy="161.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="310.5" cy="143.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="300.3" cy="127.1" r="10" />
        <circle className="protein-nav__virus_medium" cx="287.7" cy="112.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="272.9" cy="99.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="256.3" cy="89.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="238.3" cy="82.1" r="10" />
        <circle className="protein-nav__virus_medium" cx="219.4" cy="77.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="200" cy="76" r="10" />
        <circle className="protein-nav__virus_medium" cx="180.6" cy="77.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="161.7" cy="82.1" r="10" />
        <circle className="protein-nav__virus_medium" cx="143.7" cy="89.5" r="10" />
        <circle className="protein-nav__virus_medium" cx="127.1" cy="99.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="112.3" cy="112.3" r="10" />
        <circle className="protein-nav__virus_medium" cx="99.7" cy="127.1" r="10" />
        <circle className="protein-nav__virus_medium" cx="89.5" cy="143.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="82.1" cy="161.7" r="10" />
        <circle className="protein-nav__virus_medium" cx="77.5" cy="180.6" r="10" />
      </g>
      <g data-localization="nucleocapsid">
        <g
          data-localization="capsid"
          onBlur={handleGraphicMouseOut}
          onFocus={handleGraphicMouseOver}
          onMouseOut={handleGraphicMouseOut}
          onMouseOver={handleGraphicMouseOver}
        >
          <path className="protein-nav__virus_medium protein-nav__virus_semi-trans" d="M231.2 125.4h-62.4L137.5 200l31.3 74.6h62.4l31.3-74.6z" />
          <path className="protein-nav__virus_dark" d="M231.2 278.6h-62.5c-1.6 0-3.1-1-3.7-2.5l-31.2-74.6c-.4-1-.4-2.1 0-3.1l31.2-74.6c.6-1.5 2.1-2.5 3.7-2.5h62.5c1.6 0 3.1 1 3.7 2.5l31.2 74.6c.4 1 .4 2.1 0 3.1l-31.2 74.6c-.6 1.5-2 2.5-3.7 2.5zm-59.8-8h57.2l29.6-70.6-29.6-70.6h-57.2L141.8 200l29.6 70.6z" />
        </g>
        <path className="protein-nav__virus_dark" d="M220.2 147.6c-6.8-2.7-13.8-4.7-21.1-5.8-6.8-1.1-14.2-1.7-19.4 3.6-4 4-5.7 10.2-4.3 15.7 1.5 5.9 6.2 10.6 11.6 13.2 6.6 3.2 14 3.4 21.1 2.1 3-.5 5.8-1.5 8.8-2 1.2-.2 2-.3 3.4-.4h1s1 .1.5 0c.6.1 1.2.2 1.8.5-.5-.2.3.2.4.2 0 0 .7.6.3.2.5.4.6.5.7.9.5 1.1.5 2.2-.1 3.5-1.1 2.5-3.9 4-6.2 5.1-5.8 2.8-12.3 4.4-18.8 4.8-3.4.2-6.9.1-10.2-.3-3.1-.4-6.1-1.3-9.2-2-3.2-.7-6.9-1-9.8.9-2.6 1.7-4.2 4.7-5 7.6-2.8 10 4.1 21.6 14.3 23.9 7.4 1.7 14.7-1 21.5-3.7 3.4-1.3 6.8-2.6 10.3-3.8 1.7-.6 3.3-1.1 5-1.6.4-.1 5-1.2 5-1.4 0 .1-.4-.4-.5-.4.2 0 .2.3.2.5.2.6.2 1 .2 1.6 0 1.4-.3 2.7-.8 4-1.2 2.7-3.3 4.9-5.6 6.6-5.7 4-12.6 6.5-19 8.8-3.2 1.2-6.5 2.1-9.7 3.2-2.6.9-5.2 1.9-7.4 3.5-2.3 1.6-4.3 3.7-4.9 6.5-.7 3.2.4 6.4 2.7 8.7 5.4 5.5 13.3 4.1 20.2 3 5.1-.8 11-.8 15.9 1.2 2.1.9 4 2.3 5.5 4.2 1 1.3 3.2 1.1 4.2 0 1.3-1.3 1-3 0-4.2-3.7-4.6-9.5-6.7-15.2-7.4-2.8-.3-5.6-.3-8.4-.1-3.5.3-6.9 1.2-10.3 1.4-2.8.1-5.5-.3-7.4-2.1-.8-.7-1.1-1.2-1.3-2.2-.1-.5 0 .6 0-.4 0-.1.1-1 0-.4 0-.3.1-.6.2-.8.2-.6-.1.2.2-.3.1-.2.3-.5.5-.7-.3.5.3-.3.3-.3.2-.2.4-.4.7-.6l.1-.1c1-.8 2.2-1.4 3.4-2 2.3-1 5.3-1.8 8-2.7 6.8-2.3 13.7-4.8 20.1-8.1 5.9-3 11.3-7.3 13.5-13.8 1-2.9 1.3-6.9-.3-9.7-.9-1.7-2.5-2.7-4.4-2.8-1.9-.1-3.8.7-5.6 1.2-7 2.1-13.8 4.8-20.7 7.3-3.1 1.1-6.4 2.2-9.8 2.4-1.5.1-3 .1-4.5-.3-1.3-.3-2-.5-2.9-1-.5-.3-1.1-.6-1.6-.9-.3-.2-.5-.3-.7-.5l-.1-.1c-.5-.4-.9-.8-1.3-1.2-.2-.2-.3-.4-.5-.6-.1-.1-.7-.8-.4-.5-1.5-2-2.2-3.5-2.7-5.8-.4-1.8-.4-4 0-5.7.1-.5.3-.9.4-1.4.3-.9-.3.5.2-.4.1-.3.3-.5.4-.8.6-1 1.3-1.9 2.3-2.3 2.4-.7 5.5.5 8 1.1 3.3.8 6.7 1.3 10 1.5 6.8.5 13.7-.3 20.2-2.2 3.3-1 6.5-2.2 9.5-3.7 2.9-1.5 5.8-3.6 7.4-6.5 1.6-3 2-6.7.3-9.7-1.3-2.5-3.9-4.1-6.6-4.6-6-1.1-11.7 1.4-17.5 2.4-6.1 1-12.7.6-18-2.6-2-1.2-3.9-2.9-5.2-4.8-1.4-2.1-2.1-4.2-2-6.6.1-4.4 3.2-8.6 7.8-9.6 3.1-.6 6.6 0 9.7.5 3.5.6 7 1.4 10.5 2.3 3.3.9 6.5 2 9.7 3.3 1.5.6 3.3-.7 3.7-2.1.3-1.4-.7-2.8-2.3-3.4z" />
      </g>
    </svg>
    <div className="protein-nav__virus-description">{getHighlightName(highlighted)}</div>
  </div>
);

Virus.propTypes = {
  handleGraphicMouseOut: PropTypes.func.isRequired,
  handleGraphicMouseOver: PropTypes.func.isRequired,
  highlighted: PropTypes.shape({
    protein: PropTypes.string,
    virus: PropTypes.string,
  }).isRequired,
};

export default Virus;
