/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import './infected-cell.css';

const validHighlightNames = [
  'cytoplasm',
  'ER',
  'Golgi',
  'nucleus',
  'plasma_membrane',
];

const getHighlightName = (highlighted) => {
  if (highlighted.cell) {
    return highlighted.cell.replace('_', ' ');
  }
  if (highlighted.protein && validHighlightNames.includes(highlighted.protein)) {
    return highlighted.protein.replace('_', ' ');
  }
  return '';
};

const InfectedCell = ({
  handleGraphicMouseOut,
  handleGraphicMouseOver,
  highlighted,
}) => (
  <div className="protein-nav__cell">
    <svg
      data-highlighted={highlighted.cell}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <g
        data-localization="cytoplasm"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <path className="protein-nav__cell_light" d="M199.6 49.8c-26 0-50.4 6.6-71.7 18.2 7.4 6.9 12.1 16.7 12.1 27.5 0 20.7-16.8 37.5-37.5 37.5-11.8 0-22.4-5.5-29.3-14.1-15 23.3-23.6 51.1-23.6 80.8 0 82.8 67.2 150 150 150s150-67.2 150-150-67.2-149.9-150-149.9z" />
      </g>
      <g
        data-localization="plasma_membrane"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <path className="protein-nav__cell_dark" d="M199.6 63.8c36.3 0 70.5 14.1 96.2 39.8 25.7 25.7 39.8 59.8 39.8 96.2s-14.1 70.5-39.8 96.2c-25.7 25.7-59.8 39.8-96.2 39.8s-70.5-14.1-96.2-39.8c-25.7-25.7-39.8-59.8-39.8-96.2 0-20.7 4.7-41 13.6-59.4 7.6 4.3 16.3 6.6 25.3 6.6 28.4 0 51.5-23.1 51.5-51.5 0-7.7-1.7-15.2-5-22 16-6.4 33.2-9.7 50.6-9.7m0-14c-26 0-50.4 6.6-71.7 18.2 7.4 6.9 12.1 16.7 12.1 27.5 0 20.7-16.8 37.5-37.5 37.5-11.8 0-22.4-5.5-29.3-14.1-15 23.3-23.6 51.1-23.6 80.8 0 82.8 67.2 150 150 150s150-67.2 150-150-67.2-149.9-150-149.9z" />
      </g>
      <g id="virus">
        <g>
          <circle className="protein-nav__cell-virus_light" cx="101.8" cy="93.7" r="28" />
        </g>
        <path className="protein-nav__cell-virus_dark" d="M101.8 69.7c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24m0-4c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28z" />
        <g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M101.8 67.2c-.8 0-1.5-.7-1.5-1.5v-4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.5c0 .8-.6 1.5-1.5 1.5z" />
            <path className="protein-nav__cell-virus_dark" d="M104.1 62.7h-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M87.8 70.9c-.5 0-1-.3-1.3-.8l-2.2-3.9c-.4-.7-.2-1.6.5-2 .7-.4 1.6-.2 2 .5l2.2 3.9c.4.7.2 1.6-.5 2-.2.3-.4.3-.7.3z" />
            <path className="protein-nav__cell-virus_dark" d="M83.7 68.2c-.5 0-1-.3-1.3-.8-.4-.7-.2-1.6.5-2l3.9-2.2c.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2L84.4 68c-.2.1-.5.2-.7.2z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M77.6 81.2c-.3 0-.5-.1-.7-.2L73 78.8c-.7-.4-1-1.3-.5-2 .4-.7 1.3-1 2-.5l3.9 2.2c.7.4 1 1.3.5 2-.3.4-.8.7-1.3.7z" />
            <path className="protein-nav__cell-virus_dark" d="M72.6 80.9c-.3 0-.5-.1-.7-.2-.7-.4-1-1.3-.5-2l2.2-3.9c.4-.7 1.3-1 2-.5.7.4 1 1.3.5 2l-2.2 3.9c-.3.4-.8.7-1.3.7z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M73.8 95.2h-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h4.5c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5z" />
            <path className="protein-nav__cell-virus_dark" d="M69.3 97.4c-.8 0-1.5-.7-1.5-1.5v-4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.5c0 .9-.6 1.5-1.5 1.5z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M73.7 111.5c-.5 0-1-.3-1.3-.8-.4-.7-.2-1.6.5-2l3.9-2.2c.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2l-3.9 2.2c-.2.2-.4.3-.7.3z" />
            <path className="protein-nav__cell-virus_dark" d="M74.8 113.4c-.5 0-1-.3-1.3-.8l-2.2-3.9c-.4-.7-.2-1.6.5-2 .7-.4 1.6-.2 2 .5l2.2 3.9c.4.7.2 1.6-.5 2-.2.2-.4.3-.7.3z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M85.6 123.3c-.3 0-.5-.1-.7-.2-.7-.4-1-1.3-.5-2l2.2-3.9c.4-.7 1.3-1 2-.5.7.4 1 1.3.5 2l-2.2 3.9c-.3.5-.8.7-1.3.7z" />
            <path className="protein-nav__cell-virus_dark" d="M87.5 124.5c-.3 0-.5-.1-.7-.2l-3.9-2.2c-.7-.4-1-1.3-.5-2 .4-.7 1.3-1 2-.5l3.9 2.2c.7.4 1 1.3.5 2-.2.4-.7.7-1.3.7z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M101.8 127.7c-.8 0-1.5-.7-1.5-1.5v-4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.5c0 .8-.6 1.5-1.5 1.5z" />
            <path className="protein-nav__cell-virus_dark" d="M104.1 127.7h-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M118.1 123.3c-.5 0-1-.3-1.3-.8l-2.2-3.9c-.4-.7-.2-1.6.5-2 .7-.4 1.6-.2 2 .5l2.2 3.9c.4.7.2 1.6-.5 2-.2.3-.4.3-.7.3z" />
            <path className="protein-nav__cell-virus_dark" d="M116.2 124.5c-.5 0-1-.3-1.3-.8-.4-.7-.2-1.6.5-2l3.9-2.2c.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2l-3.9 2.2c-.2.2-.5.3-.7.3z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M130 111.5c-.3 0-.5-.1-.7-.2l-3.9-2.2c-.7-.4-1-1.3-.5-2 .4-.7 1.3-1 2-.5l3.9 2.2c.7.4 1 1.3.5 2-.3.4-.8.7-1.3.7z" />
            <path className="protein-nav__cell-virus_dark" d="M128.9 113.4c-.3 0-.5-.1-.7-.2-.7-.4-1-1.3-.5-2l2.2-3.9c.4-.7 1.3-1 2-.5.7.4 1 1.3.5 2l-2.2 3.9c-.3.4-.8.7-1.3.7z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M134.3 95.2h-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h4.5c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5z" />
            <path className="protein-nav__cell-virus_dark" d="M134.3 97.4c-.8 0-1.5-.7-1.5-1.5v-4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.5c0 .9-.6 1.5-1.5 1.5z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M126.1 81.2c-.5 0-1-.3-1.3-.8-.4-.7-.2-1.6.5-2l3.9-2.2c.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2l-3.9 2.2c-.2.2-.4.3-.7.3z" />
            <path className="protein-nav__cell-virus_dark" d="M131.1 80.9c-.5 0-1-.3-1.3-.8l-2.2-3.9c-.4-.7-.2-1.6.5-2 .7-.4 1.6-.2 2 .5l2.2 3.9c.4.7.2 1.6-.5 2-.2.2-.4.3-.7.3z" />
          </g>
          <g>
            <path className="protein-nav__cell-virus_dark" d="M115.9 70.9c-.3 0-.5-.1-.7-.2-.7-.4-1-1.3-.5-2l2.2-3.9c.4-.7 1.3-1 2-.5.7.4 1 1.3.5 2l-2.2 3.9c-.3.5-.8.7-1.3.7z" />
            <path className="protein-nav__cell-virus_dark" d="M120 68.2c-.3 0-.5-.1-.7-.2l-3.9-2.2c-.7-.4-1-1.3-.5-2s1.3-1 2-.5l3.9 2.2c.7.4 1 1.3.5 2-.2.4-.7.7-1.3.7z" />
          </g>
        </g>
        <g>
          <circle className="protein-nav__cell-virus_medium" cx="79.6" cy="93.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="79.9" cy="97.2" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="80.7" cy="100.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="82.1" cy="103.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="83.9" cy="106.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="86.1" cy="109.4" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="88.8" cy="111.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="91.8" cy="113.5" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="95" cy="114.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="98.4" cy="115.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="101.8" cy="115.9" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="105.3" cy="115.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="108.7" cy="114.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="111.9" cy="113.5" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="114.9" cy="111.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="117.5" cy="109.4" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="119.8" cy="106.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="121.6" cy="103.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="123" cy="100.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="123.8" cy="97.2" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="124.1" cy="93.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="123.8" cy="90.2" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="123" cy="86.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="121.6" cy="83.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="119.8" cy="80.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="117.5" cy="78" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="114.9" cy="75.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="111.9" cy="73.9" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="108.7" cy="72.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="105.3" cy="71.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="101.8" cy="71.5" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="98.4" cy="71.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="95" cy="72.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="91.8" cy="73.9" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="88.8" cy="75.7" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="86.1" cy="78" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="83.9" cy="80.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="82.1" cy="83.6" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="80.7" cy="86.8" r="1.8" />
          <circle className="protein-nav__cell-virus_medium" cx="79.9" cy="90.2" r="1.8" />
        </g>
        <path className="protein-nav__virus_medium protein-nav__cell-virus_semi-trans" d="M107.7 79.8H96l-5.8 13.9 5.8 13.9h11.7l5.8-13.9z" />
        <path className="protein-nav__cell-virus_dark" d="M107.7 108.6H96c-.4 0-.8-.2-.9-.6l-5.8-13.9c-.1-.2-.1-.5 0-.8l5.8-13.9c.2-.4.5-.6.9-.6h11.7c.4 0 .8.2.9.6l5.8 13.9c.1.2.1.5 0 .8l-5.8 13.9c-.2.4-.5.6-.9.6zm-11-2H107l5.4-12.9-5.4-12.9H96.7l-5.4 12.9 5.4 12.9z" />
        <path className="protein-nav__cell-virus_dark" d="M105.7 83.7c-1.3-.5-2.6-.9-4-1.1-1.2-.2-2.4-.3-3.4.5-1.6 1.2-1.6 3.5-.3 4.9 1.7 1.8 4.3 1.7 6.5 1.2.3-.1 1.6-.5 1.8-.1.2.4-.2 1-.5 1.2-.3.2-.7.4-1.1.5-1.4.5-2.9.7-4.4.6-1.1-.1-2.4-.8-3.5-.4-.9.3-1.4 1.3-1.6 2.2-.2 1.8.8 3.6 2.5 4.2 2.4.9 5.1-.9 7.4-1.6.1 0 .3-.1.4-.1.4-.1.5-.1.3-.1.1.3-.2.9-.4 1.1-.4.5-.9.9-1.5 1.2-1.4.7-2.8 1.2-4.3 1.7-.9.3-1.9.7-2.5 1.5-.5.9-.3 1.9.5 2.5 2.2 1.9 5.5-1 7.6 1.4.6.7 1.7-.3 1.1-1.1-1.3-1.5-3.3-1.6-5.1-1.4-.7.1-1.5.3-2.1.1-.8-.3-.7-.9-.1-1.3 1-.6 2.2-.8 3.2-1.2 1.9-.7 4.3-1.6 4.9-3.7.2-.7.3-1.8-.4-2.3-.8-.6-2.1.1-3 .4-1.9.6-5.1 2.6-6.6.5-.4-.6-.8-1.8-.2-2.4.5-.5 1.6 0 2.2.1.6.1 1.2.2 1.9.2 2 0 4.9-.4 6.3-2 1.3-1.5.3-3.5-1.6-3.5-1.2 0-2.3.6-3.5.6-1.3 0-3-.4-3.5-1.8-.6-1.5.8-2.4 2.2-2.3 1.5.1 3.1.6 4.5 1.2.8.4 1.2-1 .3-1.4z" />
      </g>
      <g
        data-localization="ER"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <path className="protein-nav__cell_dark" d="M211.5,303.7c-0.9,0-1.8-0.3-2.5-1c-1.4-1.4-1.4-3.6,0-4.9c11.1-11.1,17.2-25.8,17.2-41.4 c0-15.7-6.1-30.4-17.2-41.4s-25.8-17.2-41.4-17.2s-30.4,6.1-41.4,17.2c-1.4,1.4-3.6,1.4-4.9,0c-1.4-1.4-1.4-3.6,0-4.9 c12.4-12.4,28.9-19.2,46.4-19.2s34,6.8,46.4,19.2c12.4,12.4,19.2,28.9,19.2,46.4c0,17.5-6.8,34-19.2,46.4 C213.3,303.3,212.4,303.7,211.5,303.7z" />
        <path className="protein-nav__cell_dark" d="M223.5,307c-0.9,0-1.8-0.3-2.5-1c-1.4-1.4-1.4-3.6,0-4.9c11.8-11.8,17.9-29.9,16.2-48.3 c-0.2-1.9,1.2-3.6,3.2-3.8c1.9-0.2,3.6,1.2,3.8,3.2c1.9,20.5-5,40.6-18.3,53.9C225.3,306.7,224.4,307,223.5,307z" />
        <path className="protein-nav__cell_dark" d="M235.9,235.6c-1.4,0-2.7-0.8-3.3-2.2c-3.7-9.5-9.4-18-16.8-25.4c-9.6-9.6-21.4-16.4-34-19.6 c-1.9-0.5-3-2.4-2.5-4.3c0.5-1.9,2.4-3,4.3-2.5c13.9,3.5,26.8,10.9,37.3,21.4c8.1,8.1,14.3,17.4,18.4,27.8c0.7,1.8-0.2,3.8-2,4.5 C236.8,235.5,236.3,235.6,235.9,235.6z" />
        <path className="protein-nav__cell_dark" d="M121.5,203c-1,0-1.9-0.4-2.6-1.2c-1.3-1.5-1.1-3.7,0.3-4.9c11.7-10.2,29-16,47.5-16c0.2,0,0.4,0,0.6,0 c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5c0,0,0,0,0,0c-17.1-0.1-32.9,5.1-43.5,14.3C123.1,202.7,122.3,203,121.5,203z" />
        <path className="protein-nav__cell_dark" d="M249.4,280.9c-0.3,0-0.7,0-1-0.1c-1.9-0.5-2.9-2.5-2.4-4.3c7.2-24.9-1.7-54.3-22.8-75c-3.3-3.3-6.9-6.3-10.7-9 c-1.6-1.1-1.9-3.3-0.8-4.9c1.1-1.6,3.3-1.9,4.9-0.8c4,2.9,7.9,6.1,11.5,9.7c22.9,22.5,32.6,54.6,24.6,81.9 C252.3,280,250.9,280.9,249.4,280.9z" />
        <path className="protein-nav__cell_dark" d="M131.5,185c-1.3,0-2.6-0.8-3.2-2.1c-0.8-1.8,0-3.8,1.7-4.6c23.6-10.7,47.2-11.3,69.9-1.6 c1.8,0.8,2.6,2.8,1.8,4.6s-2.8,2.6-4.6,1.8c-20.8-8.9-42.5-8.4-64.3,1.5C132.5,184.9,132,185,131.5,185z" />
        <path className="protein-nav__cell_dark" d="M155.5,188.3c-1.5,0-2.8-1.1-3-2.6l-1.3-10.5c-0.2-1.6,1-3.1,2.6-3.3c1.6-0.2,3.1,1,3.3,2.6l1.3,10.5 c0.2,1.6-1,3.1-2.6,3.3C155.8,188.3,155.6,188.3,155.5,188.3z" />
        <path className="protein-nav__cell_dark" d="M138.5,204.3c-1.2,0-2.3-0.7-2.8-1.8l-3.9-9.2c-0.7-1.5,0.1-3.3,1.6-3.9c1.5-0.7,3.3,0.1,3.9,1.6l3.9,9.2 c0.7,1.5-0.1,3.3-1.6,3.9C139.3,204.2,138.9,204.3,138.5,204.3z" />
        <path className="protein-nav__cell_dark" d="M189.6,190c-0.4,0-0.9-0.1-1.3-0.3c-1.5-0.7-2.1-2.5-1.4-4l3.8-7.9c0.7-1.5,2.5-2.1,4-1.4s2.1,2.5,1.4,4 l-3.8,7.9C191.8,189.3,190.7,190,189.6,190z" />
        <path className="protein-nav__cell_dark" d="M204.4,207.4c-0.6,0-1.2-0.2-1.7-0.5c-1.4-0.9-1.7-2.8-0.8-4.2l4.1-6.1c0.9-1.4,2.8-1.7,4.2-0.8 c1.4,0.9,1.7,2.8,0.8,4.2l-4.1,6.1C206.3,206.9,205.4,207.4,204.4,207.4z" />
        <path className="protein-nav__cell_dark" d="M229.3,220.8c-0.9,0-1.7-0.4-2.3-1.1c-1.1-1.3-0.9-3.2,0.4-4.2l6.8-5.6c1.3-1.1,3.2-0.9,4.2,0.4 c1.1,1.3,0.9,3.2-0.4,4.2l-6.8,5.6C230.6,220.6,229.9,220.8,229.3,220.8z" />
        <path className="protein-nav__cell_dark" d="M173.8,206.9c-1.7,0-3-1.3-3-3v-7.8c0-1.7,1.3-3,3-3s3,1.3,3,3v7.8C176.8,205.6,175.5,206.9,173.8,206.9z" />
        <path className="protein-nav__cell_dark" d="M230,294.5c-0.5,0-0.9-0.1-1.3-0.3l-7.8-3.9c-1.5-0.7-2.1-2.5-1.3-4c0.7-1.5,2.5-2.1,4-1.3l7.8,3.9 c1.5,0.7,2.1,2.5,1.3,4C232.2,293.9,231.1,294.5,230,294.5z" />
        <path className="protein-nav__cell_dark" d="M239.2,263.6c-0.2,0-0.3,0-0.5,0l-9.1-1.3c-1.9-0.3-3.2-2-3-4c0.3-1.9,2-3.3,4-3l9.1,1.3c1.9,0.3,3.2,2,3,4 C242.4,262.4,240.9,263.6,239.2,263.6z" />
        <path className="protein-nav__cell_dark" d="M227.4,274.9c-0.1,0-0.3,0-0.4,0l-9.2-1.3c-1.6-0.2-2.8-1.8-2.5-3.4s1.8-2.8,3.4-2.5l9.2,1.3 c1.6,0.2,2.8,1.8,2.5,3.4C230.2,273.8,228.9,274.9,227.4,274.9z" />
        <path className="protein-nav__cell_dark" d="M217,238.3c-1,0-2-0.5-2.6-1.5c-0.9-1.4-0.4-3.3,1-4.1l6.5-3.9c1.4-0.9,3.3-0.4,4.1,1s0.4,3.3-1,4.1l-6.5,3.9 C218,238.2,217.5,238.3,217,238.3z" />
        <path className="protein-nav__cell_dark" d="M250.6,273.6c-0.1,0-0.1,0-0.2,0l-9.8-0.7c-1.7-0.1-2.9-1.5-2.8-3.2c0.1-1.7,1.6-2.9,3.2-2.8l9.8,0.7 c1.7,0.1,2.9,1.5,2.8,3.2C253.5,272.4,252.2,273.6,250.6,273.6z" />
      </g>
      <g
        data-localization="nucleus"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <circle className="protein-nav__cell_medium" cx="166.3" cy="257.2" r="52.3" />
        <path className="protein-nav__cell_dark" d="M166.3,313c-30.8,0-55.8-25-55.8-55.8s25-55.8,55.8-55.8s55.8,25,55.8,55.8S197,313,166.3,313z M166.3,208.4 c-26.9,0-48.8,21.9-48.8,48.8c0,26.9,21.9,48.8,48.8,48.8s48.8-21.9,48.8-48.8C215.1,230.3,193.2,208.4,166.3,208.4z" />
      </g>
      <g
        data-localization="Golgi"
        onBlur={handleGraphicMouseOut}
        onFocus={handleGraphicMouseOver}
        onMouseOut={handleGraphicMouseOut}
        onMouseOver={handleGraphicMouseOver}
      >
        <path
          className="protein-nav__cell_dark"
          d="M245.1,115.8c0.8,0.7,1.7,1.3,2.6,1.8c1,0.5,2,0.9,2.9,1.3c1,0.5,1.9,1,2.9,1.5c2,1,4,2.1,6,2.9
          c2.7,1.1,5.6,1.8,8.4,2.6c2.3,0.7,4.6,1.5,7,2.1c1.5,0.4,3.4,0.7,4.9,0.1c1.4-0.5,2.1-2,2-3c-0.1-1-0.8-1.8-1.9-2.3
          c-0.8-0.4-1.7-0.7-2.6-0.7c-0.9,0-1.8,0.2-2.7,0.3c-2.1,0.5-4.4,0.7-6.7,0.5c-2.2-0.2-4.4-0.7-6.5-1.7c-2.1-1-4-2.2-5.9-3.5
          c-1.5-1-2.7-2.2-3.7-3.5c-0.9-1.1-1.5-2.6-2.9-3.3c-0.5-0.3-1.4-0.6-2-0.6c-0.7,0-1.6,0.1-2.2,0.4c-1,0.4-1.8,1.7-1.2,3
          C243.8,114.4,244.4,115.1,245.1,115.8z M280.7,128L280.7,128c-0.2,0.2-0.5,0.3-0.7,0.4c-1.3,0.5-2.9,0.5-5.1-0.1
          c-1.4-0.4-2.8-0.8-4.2-1.2c-0.9-0.3-1.9-0.6-2.8-0.9c-0.7-0.2-1.3-0.4-2-0.5c-2.1-0.6-4.4-1.2-6.5-2c-2.1-0.9-4.2-1.9-6.1-2.9
          c-0.3-0.2-0.7-0.4-1-0.6c-0.6-0.3-1.2-0.7-1.9-1c-0.4-0.2-0.8-0.3-1.2-0.5c-0.6-0.2-1.2-0.5-1.7-0.8c-1-0.6-1.9-1.2-2.6-1.8
          c-0.8-0.7-1.4-1.5-1.7-2.2c-0.7-1.6,0.3-3,1.4-3.5c0.7-0.3,1.8-0.4,2.4-0.4c0.7,0,1.6,0.3,2.2,0.6c1,0.6,1.7,1.5,2.3,2.4
          c0.2,0.3,0.5,0.7,0.7,1c1,1.3,2.2,2.5,3.6,3.4c1.8,1.2,3.7,2.5,5.8,3.4c1.9,0.9,4,1.4,6.4,1.7c2,0.2,4.2,0,6.6-0.5l0.2,0
          c0.8-0.2,1.7-0.4,2.6-0.3c0.9,0,1.7,0.3,2.7,0.8c1.2,0.6,2,1.6,2.1,2.6C282.2,125.9,281.8,127.2,280.7,128z M244.5,111.2
          c-0.6,0.5-1.1,1.4-0.7,2.4c0.3,0.6,0.8,1.3,1.5,2c0.7,0.6,1.5,1.2,2.5,1.7c0.5,0.3,1.1,0.5,1.7,0.8c0.4,0.2,0.8,0.3,1.2,0.5
          c0.6,0.3,1.3,0.6,1.9,1c0.3,0.2,0.7,0.4,1,0.5c1.9,1,3.9,2.1,6,2.9c2.1,0.8,4.3,1.4,6.4,2c0.7,0.2,1.4,0.4,2,0.6
          c0.9,0.3,1.9,0.6,2.8,0.9c1.3,0.4,2.7,0.9,4.1,1.2c2,0.5,3.6,0.5,4.7,0.1c0.2-0.1,0.4-0.2,0.6-0.3c0.9-0.6,1.2-1.6,1.2-2.3
          c-0.1-0.8-0.7-1.6-1.7-2.1c-0.9-0.4-1.7-0.7-2.5-0.7c-0.8,0-1.6,0.1-2.4,0.3l-0.2,0c-2.5,0.5-4.7,0.7-6.8,0.5
          c-2.4-0.2-4.6-0.8-6.6-1.7c-2.2-1-4.1-2.3-5.9-3.5c-1.4-1-2.7-2.2-3.8-3.5c-0.3-0.3-0.5-0.7-0.7-1c-0.6-0.8-1.1-1.7-2-2.2
          c-0.5-0.3-1.3-0.5-1.9-0.5c-0.9,0-1.6,0.2-2.1,0.4C244.8,111,244.6,111.1,244.5,111.2z M209.5,121.7c1.8,1.2,3.8,2.3,5.7,3.3
          c1.2,0.6,2.3,1.2,3.5,1.8c3.6,2,6.9,4.6,10.1,7.1c2.9,2.2,5.8,4.4,8.8,6.5c4.4,3.1,8.8,6.2,13.2,9.3c1.2,0.9,2.5,1.7,3.7,2.6
          c1.2,0.8,2.5,1.7,3.7,2.6c5.3,3.7,10.2,8,14.8,12.4c2.8,2.7,6.4,6.8,10.6,6.6c0.8-0.1,2.2-0.2,2.9-0.7c1-0.7,1.1-1.8,1-3
          c0-0.8-0.2-1.5-0.6-2.2c-0.9-1.5-2.5-2.6-4-3.6c-0.8-0.5-1.6-1-2.5-1.5c-4-2.4-8.1-4.5-12-7.1c-2.6-1.7-5.1-3.6-7.6-5.5
          c-1-0.8-2-1.6-3-2.3c-4.2-3.2-8.4-6.3-12.7-9.3c-1.2-0.9-2.4-1.7-3.6-2.6c-1.7-1.2-3.3-2.3-5-3.5c-3.9-2.9-8.1-5.4-12-8.3
          c-3.4-2.6-6-6-9.2-8.8c-0.9-0.8-1.9-1.6-3-2.3c-1.5-1-3.4-2-5.1-2.1c-2.2-0.2-4.7,1-4.2,3.5C203.6,117.4,206.9,120,209.5,121.7z
          M286.7,173.4c-0.7,0.5-2,0.7-3,0.7c-3.8,0.2-7-3-9.7-5.5c-0.4-0.4-0.8-0.8-1.2-1.1c-5.7-5.3-10.2-9.1-14.8-12.4
          c-1.3-0.9-2.5-1.7-3.7-2.6l-3.7-2.6c-5.2-3.6-9.4-6.6-13.2-9.3c-2.6-1.9-5.7-4.1-8.8-6.5l-0.9-0.7c-2.9-2.2-5.9-4.6-9.2-6.4
          c-1.1-0.6-2.1-1.2-3.2-1.7l-0.3-0.1c-1.9-1-3.9-2.1-5.8-3.3c-2.6-1.7-6-4.3-6.6-7.5c-0.2-1.2,0.2-2.3,1.2-3.1
          c0.9-0.6,2.1-0.9,3.4-0.8c1.8,0.1,3.6,1.1,5.3,2.2c1,0.6,2,1.4,3,2.3c1.3,1.2,2.5,2.4,3.7,3.7c1.7,1.8,3.5,3.6,5.5,5.1
          c2.2,1.6,4.5,3.2,6.7,4.7c1.7,1.2,3.5,2.4,5.3,3.6l1.4,1c1.2,0.8,2.4,1.7,3.6,2.5l1.3,0.9c0.8,0.6,1.6,1.1,2.3,1.7
          c5.1,3.7,9.1,6.5,12.7,9.3c1,0.8,2,1.5,3,2.3c2.2,1.7,4.9,3.7,7.6,5.5c2.5,1.7,5.2,3.2,7.7,4.6c1.4,0.8,2.9,1.6,4.3,2.5l0.1,0.1
          c0.8,0.5,1.6,1,2.4,1.5c1.5,1,3.1,2.1,4.1,3.7c0.4,0.8,0.7,1.6,0.7,2.4C288,171.3,287.9,172.6,286.7,173.4L286.7,173.4L286.7,173.4
          L286.7,173.4L286.7,173.4z M204.3,111.9c-0.6,0.4-1.2,1.1-0.9,2.4c0.4,2.2,2.5,4.5,6.3,7.1c1.9,1.2,3.8,2.3,5.7,3.3l0.3,0.1
          c1.1,0.5,2.2,1.1,3.2,1.7c3.3,1.8,6.3,4.2,9.2,6.4l0.9,0.7c3.1,2.4,6.2,4.6,8.8,6.5c3.8,2.7,8,5.7,13.2,9.3l3.7,2.6
          c1.2,0.8,2.4,1.7,3.7,2.6c4.6,3.3,9.2,7.1,14.9,12.4c0.4,0.4,0.8,0.7,1.2,1.1c2.5,2.5,5.7,5.6,9.1,5.3c1.3-0.1,2.2-0.3,2.7-0.6
          l0.2,0.3l-0.2-0.3c0.8-0.6,0.9-1.5,0.9-2.7c0-0.7-0.2-1.4-0.6-2.1c-0.9-1.5-2.4-2.6-3.8-3.5c-0.8-0.5-1.5-1-2.3-1.5l-0.1-0.1
          c-1.4-0.8-2.9-1.7-4.3-2.5c-2.6-1.5-5.2-3-7.8-4.6c-2.7-1.8-5.3-3.8-7.6-5.5c-1-0.8-2-1.6-3-2.3c-3.7-2.8-7.6-5.7-12.7-9.3
          c-0.8-0.6-1.5-1.1-2.3-1.7l-1.3-0.9c-1.2-0.8-2.4-1.7-3.6-2.5l-1.4-1c-1.7-1.2-3.5-2.5-5.2-3.6c-2.2-1.5-4.6-3.1-6.8-4.7
          c-2.1-1.6-3.8-3.4-5.5-5.2c-1.2-1.2-2.4-2.5-3.7-3.6c-1-0.9-2-1.6-2.9-2.2c-1.6-1-3.3-2-5-2.1C206.2,111.2,205.1,111.4,204.3,111.9
          z M221.3,110.5c3.1,3.3,7.2,5.5,10.6,8.3c4.3,3.6,8.4,7.4,13,10.8c1.3,1,2.7,1.9,4,2.9c4.1,2.7,8.4,4.9,12.6,7.2
          c1.3,0.7,2.5,1.3,3.8,2c3.3,1.8,6.5,3.6,9.8,5.5c2.5,1.5,5.2,3.2,8,2.8c1.1-0.2,2.3-0.6,2.9-1.4c0.5-0.7,0.8-2.1,0.5-3.1
          c-0.3-1.1-1.7-2.5-2.6-3.2c-1.3-1-2.9-1.7-4.3-2.2c-2.6-0.9-5.4-1.2-8-2c-4.4-1.3-8.5-3.6-12.4-6c-1.1-0.7-2.2-1.4-3.3-2.1
          c-1.5-1-3.1-2-4.6-3.1c-2.2-1.4-4.3-2.9-6.4-4.5c-3.6-2.6-7.2-5.4-10.1-8.6c-0.8-0.9-1.6-1.8-2.2-2.8c-2.1-3.1-3.7-7-7.3-9
          c-1.3-0.8-3.2-1-4.5-0.6c-1.7,0.6-2.6,2.3-2.2,4.2c0.3,1.4,1.5,3.2,2.6,4.4C221.1,110.2,221.2,110.4,221.3,110.5z M285.5,149.4
          c-0.8,0.5-1.8,0.8-2.5,0.9c-2.9,0.4-5.8-1.4-8.2-2.8c-2.6-1.6-5.2-3-7.8-4.4l-1.9-1.1c-1.2-0.7-2.5-1.4-3.7-2l-1.4-0.8
          c-3.7-2-7.6-4-11.2-6.4c-1.3-0.9-2.7-1.8-4.1-2.9c-3.3-2.4-6.4-5.1-9.4-7.7c-1.2-1-2.4-2.1-3.6-3.1c-1.3-1.1-2.8-2.1-4.2-3.1
          c-2.2-1.6-4.5-3.2-6.4-5.2l-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-1.1-1.2-2.4-3-2.7-4.5c-0.4-2.1,0.6-4,2.4-4.6
          c1.4-0.5,3.3-0.2,4.8,0.6c2.8,1.6,4.4,4.3,6,6.9c0.5,0.8,0.9,1.5,1.4,2.3c0.6,0.9,1.3,1.8,2.2,2.7c3,3.2,6.6,6,10.1,8.6
          c2,1.4,4.1,2.9,6.4,4.5c1.5,1,3.1,2,4.6,3l0.5,0.3c0.9,0.6,1.8,1.2,2.7,1.7c3.6,2.2,7.8,4.7,12.3,6c1.2,0.4,2.4,0.6,3.6,0.8
          c1.5,0.3,3,0.6,4.5,1.1c1.2,0.4,3,1.2,4.4,2.2c0.9,0.7,2.4,2.2,2.7,3.4c0.3,1,0,2.6-0.6,3.4C285.9,149,285.7,149.2,285.5,149.4z
          M219.8,102.2c-1,0.7-1.5,2-1.2,3.4c0.3,1.4,1.5,3.1,2.5,4.2c0.1,0.1,0.2,0.2,0.3,0.3l0.1,0.1c1.9,2,4.1,3.6,6.3,5.1
          c1.4,1,2.9,2.1,4.2,3.2c1.2,1,2.4,2.1,3.6,3.1c3,2.6,6.1,5.2,9.3,7.7c1.3,1,2.7,2,4,2.8c3.6,2.4,7.4,4.4,11.2,6.4l1.4,0.8
          c1.3,0.7,2.5,1.3,3.8,2l1.9,1.1c2.6,1.4,5.2,2.9,7.8,4.5c2.4,1.5,5.1,3.1,7.7,2.7c1.2-0.2,2.2-0.6,2.6-1.2c0.5-0.7,0.7-2,0.5-2.8
          c-0.3-1-1.6-2.4-2.4-3c-1.3-1-3-1.7-4.2-2.1c-1.4-0.5-2.9-0.8-4.4-1.1c-1.2-0.2-2.4-0.5-3.6-0.8c-4.6-1.4-8.9-3.8-12.5-6.1
          c-0.9-0.6-1.8-1.2-2.7-1.7l-0.5-0.4c-1.5-1-3.1-2-4.6-3.1c-2.4-1.6-4.5-3-6.5-4.5c-3.5-2.6-7.2-5.4-10.2-8.6
          c-0.9-0.9-1.6-1.9-2.3-2.8c-0.5-0.7-1-1.5-1.4-2.3c-1.5-2.5-3.1-5.1-5.7-6.6c-1.3-0.7-3-1-4.2-0.6
          C220.3,101.9,220.1,102,219.8,102.2z M218.3,141.9c2.7,1.5,5.9,2.5,8.5,4.1c3.4,2.1,6.4,4.7,9.4,7.3c0.9,0.8,1.7,1.5,2.6,2.3
          c2.6,2.2,5.2,4.4,7.6,6.9c0.7,0.7,1.4,1.5,2,2.3c1.7,2.1,3.2,4.2,4.5,6.6c1,1.8,1.9,3.9,3.7,4.7c0.7,0.3,1.6,0.5,2.3,0.2
          c0.6-0.3,1.5-1.2,1.8-1.9c0.3-0.9,0.1-2.5-0.2-3.4c-0.4-1.2-1.2-2.3-1.9-3.3c-1.4-1.6-3.2-2.7-4.8-4c-2.6-2.2-5-4.8-7.4-7.2
          c-0.7-0.7-1.4-1.4-2.1-2c-1-0.9-2.1-1.9-3.1-2.7c-1.5-1.2-3.1-2.4-4.7-3.6c-2.7-1.9-5.5-3.8-8.2-5.7c-0.7-0.5-1.4-1.1-2.1-1.7
          c-2.1-1.9-4.3-4.2-7.4-4.8c-1.2-0.2-2.5,0-3.3,0.5c-1,0.7-1,2-0.2,3.1c0.6,0.8,1.8,1.7,2.8,2.2
          C218.1,141.8,218.2,141.9,218.3,141.9z M259.4,176.3c-0.2,0.1-0.3,0.2-0.5,0.3c-0.9,0.4-1.9,0.1-2.6-0.2c-1.8-0.7-2.7-2.5-3.6-4.3
          l-0.3-0.5c-1.1-2.1-2.5-4.2-4.5-6.6c-0.6-0.8-1.3-1.5-2-2.2c-1.9-2-4-3.8-6.1-5.6c-0.5-0.4-1-0.8-1.4-1.3c-0.4-0.4-0.9-0.8-1.3-1.2
          l-1.3-1.1c-2.8-2.5-5.9-5.1-9.3-7.3c-1.4-0.9-3-1.6-4.6-2.3c-1.3-0.6-2.7-1.2-3.9-1.9c-0.1-0.1-0.2-0.1-0.3-0.2
          c-0.6-0.4-2.2-1.3-2.9-2.3c-0.9-1.3-0.8-2.7,0.3-3.5l0,0c0.8-0.6,2.3-0.8,3.6-0.6c2.9,0.5,5.1,2.5,7,4.3l0.6,0.6
          c0.6,0.6,1.3,1.1,2,1.7c1.5,1.1,3.1,2.2,4.6,3.2c1.2,0.8,2.4,1.6,3.6,2.5c1.7,1.2,3.2,2.4,4.7,3.6c1.1,0.9,2.1,1.8,3.1,2.8
          c0.7,0.6,1.4,1.3,2.1,2c0.7,0.7,1.4,1.4,2,2.1c1.7,1.7,3.5,3.6,5.4,5.1c0.5,0.4,1.1,0.8,1.6,1.2c1.1,0.8,2.3,1.7,3.2,2.8
          c1,1.2,1.7,2.3,2,3.4c0.3,0.9,0.5,2.6,0.2,3.6C260.6,175.2,260,175.9,259.4,176.3z M215.7,136.7c-0.8,0.6-0.9,1.6-0.2,2.6
          c0.4,0.6,1.4,1.4,2.7,2.1c0.1,0.1,0.2,0.1,0.3,0.2c1.2,0.7,2.6,1.3,3.9,1.8c1.6,0.7,3.2,1.4,4.7,2.3c3.5,2.2,6.5,4.8,9.4,7.3
          l1.3,1.1c0.4,0.4,0.9,0.8,1.3,1.2c0.5,0.4,1,0.8,1.4,1.2c2.1,1.8,4.2,3.7,6.1,5.7c0.7,0.7,1.4,1.5,2,2.3c2,2.4,3.4,4.5,4.5,6.7
          l0.3,0.6c0.8,1.6,1.7,3.4,3.2,4c0.6,0.2,1.4,0.4,2,0.2c0.6-0.2,1.3-1.1,1.6-1.7c0.3-0.8,0.1-2.3-0.2-3.1c-0.3-1-0.9-2-1.9-3.1
          c-0.9-1.1-2-1.9-3.1-2.7c-0.5-0.4-1.1-0.8-1.7-1.3c-1.9-1.6-3.7-3.4-5.4-5.2c-0.7-0.7-1.4-1.4-2-2.1c-0.7-0.7-1.4-1.4-2.1-2
          c-1-0.9-2.1-1.9-3.1-2.7c-1.5-1.2-3-2.4-4.6-3.6c-1.2-0.8-2.4-1.7-3.5-2.5c-1.5-1.1-3.1-2.1-4.6-3.3c-0.7-0.6-1.5-1.1-2.1-1.7
          l-0.6-0.6c-1.9-1.8-3.9-3.6-6.6-4.1C217.6,136.1,216.3,136.3,215.7,136.7z M226.6,157.7c1.4,0.9,3.1,1.4,4.4,2.4
          c1.7,1.3,3.2,2.9,4.7,4.5c0.4,0.5,0.9,0.9,1.3,1.4c1.3,1.3,2.6,2.6,3.8,4.1c0.4,0.4,0.7,0.8,1,1.3c0.9,1.1,1.7,2.3,2.3,3.5
          c0.5,0.9,1.1,1.9,1.9,2.6c0.3,0.3,0.8,0.6,1,0.6c0.3,0,0.6-0.1,0.7-0.3c0.1-0.3-0.1-1-0.2-1.4c-0.2-0.6-0.6-1.3-0.9-1.9
          c-0.6-1-1.5-1.9-2.3-2.8c-1.3-1.5-2.4-3.1-3.6-4.6c-0.3-0.4-0.7-0.9-1-1.3c-0.5-0.6-1-1.2-1.5-1.8c-0.7-0.8-1.5-1.6-2.2-2.4
          c-1.3-1.3-2.7-2.6-4-4c-0.3-0.4-0.7-0.8-1-1.2c-0.9-1.4-1.9-3.3-3.6-3.7c-0.6-0.1-1.5,0.1-2,0.7c-0.7,0.7-0.9,1.9-0.6,2.7
          c0.2,0.6,0.8,1.2,1.3,1.5C226.5,157.6,226.5,157.7,226.6,157.7z M247.9,178.2c-0.2,0.2-0.5,0.2-0.8,0.2c-0.3-0.1-0.7-0.3-1.2-0.7
          c-0.9-0.7-1.5-1.7-2-2.7c-0.6-1.1-1.4-2.3-2.3-3.5c-0.3-0.4-0.7-0.9-1-1.3c-1-1.2-2.1-2.3-3.2-3.4l-2.2-2.3
          c-1.4-1.4-2.8-2.9-4.4-4.2c-0.7-0.6-1.6-0.9-2.4-1.3c-0.7-0.3-1.4-0.7-2-1.1l-0.1-0.1c-0.5-0.3-1.2-1-1.5-1.8
          c-0.3-1-0.1-2.2,0.7-3.1c0.6-0.6,1.5-1,2.3-0.8c1.6,0.3,2.5,1.8,3.3,3.1c0.2,0.3,0.3,0.5,0.5,0.7c0.3,0.4,0.6,0.8,0.9,1.2
          c0.8,0.9,1.6,1.7,2.5,2.5c0.5,0.5,1,1,1.5,1.4c0.8,0.8,1.5,1.6,2.3,2.4c0.5,0.5,1,1.1,1.5,1.8c0.3,0.4,0.6,0.7,0.9,1.1l0.9,1.1
          c0.9,1.2,1.8,2.5,2.8,3.6c0.2,0.2,0.4,0.5,0.6,0.7c0.6,0.7,1.2,1.3,1.7,2.1c0.5,0.8,0.8,1.4,1,1.9c0,0,0.4,1.1,0.2,1.6
          C248.1,178,248,178.1,247.9,178.2z M226.3,153.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.6,0.6-0.8,1.6-0.5,2.4c0.1,0.4,0.6,1,1.2,1.4
          c0.1,0.1,0.1,0.1,0.2,0.1c0.6,0.4,1.2,0.7,1.9,1c0.9,0.4,1.7,0.8,2.5,1.4c1.6,1.3,3.1,2.8,4.5,4.2l2.2,2.3c1.1,1.1,2.2,2.2,3.2,3.4
          c0.4,0.4,0.7,0.9,1,1.3c1,1.3,1.7,2.5,2.4,3.6c0.5,0.9,1.1,1.9,1.9,2.5c0.5,0.4,0.8,0.5,0.9,0.5c0.1,0,0.3-0.1,0.3-0.1
          c0-0.1,0-0.7-0.2-1.2c-0.2-0.5-0.5-1.1-0.9-1.8c-0.5-0.7-1-1.4-1.6-2c-0.2-0.2-0.4-0.5-0.6-0.7c-1-1.2-1.9-2.5-2.9-3.7l-0.9-1.1
          c-0.3-0.4-0.6-0.7-0.9-1.1c-0.5-0.7-1-1.3-1.5-1.8c-0.7-0.8-1.5-1.6-2.2-2.4c-0.5-0.5-1-1-1.5-1.4c-0.8-0.8-1.7-1.7-2.5-2.6
          c-0.4-0.4-0.7-0.9-1-1.3c-0.2-0.2-0.3-0.5-0.5-0.7c-0.8-1.2-1.6-2.5-2.9-2.8C227.2,152.9,226.7,153,226.3,153.3z M226.4,168.3
          c1.3-1.5,4.7,0.5,4.7,2.4c0,1.7-2.1,1.3-3.2,0.7C226.8,170.8,225.5,169.4,226.4,168.3z M230.9,171.9c-0.8,0.6-2.4,0.2-3.2-0.2
          c-0.8-0.4-1.8-1.3-2-2.3c-0.1-0.5,0-1,0.3-1.4c0.7-0.8,1.9-0.8,3.1-0.2c1.1,0.5,2.2,1.6,2.2,2.8
          C231.5,171.4,231.2,171.8,230.9,171.9z M226.8,168.4c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.3,0.5-0.2,0.8c0.1,0.7,0.9,1.4,1.6,1.8
          c0.8,0.4,2,0.6,2.5,0.3c0.2-0.1,0.3-0.3,0.3-0.7c0-0.8-0.8-1.7-1.9-2.2C228.1,168.1,227.3,168,226.8,168.4z"
        />
        <path
          className="protein-nav__cell_dark"
          d="M247.3,178.9c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1.4-0.8c-1-0.8-1.6-1.8-2.1-2.8c-0.6-1.1-1.4-2.2-2.3-3.5
          c-0.3-0.4-0.6-0.8-1-1.2c-1-1.1-2-2.2-3-3.2l-2.3-2.4c-1.4-1.4-2.8-2.9-4.3-4.1c-0.7-0.5-1.5-0.9-2.3-1.3c-0.8-0.4-1.5-0.7-2.1-1.1
          l-0.1-0.1c-0.6-0.4-1.4-1.1-1.7-2c-0.4-1.2-0.1-2.6,0.8-3.6c0.7-0.8,1.8-1.2,2.8-1c1.8,0.4,2.7,1.9,3.6,3.3
          c0.2,0.3,0.3,0.5,0.5,0.7c0.2,0.4,0.5,0.7,0.9,1.1c0.8,0.9,1.6,1.7,2.4,2.5c0.5,0.5,1,1,1.5,1.5c0.8,0.8,1.6,1.7,2.3,2.4
          c0.5,0.6,1,1.2,1.5,1.8c0.2,0.3,0.5,0.6,0.7,1l1.1,1.4c0.9,1.2,1.8,2.4,2.7,3.5l0.7,0.8c0.6,0.6,1.2,1.3,1.6,2.1
          c0.5,0.8,0.8,1.5,1,2c0.2,0.5,0.4,1.4,0.2,2c-0.1,0.2-0.2,0.5-0.5,0.6l0,0C247.9,178.8,247.6,178.9,247.3,178.9z M226.6,153.7
          c-0.1,0.1-0.2,0.1-0.2,0.2c-0.4,0.5-0.6,1.3-0.4,1.8c0.1,0.3,0.5,0.8,1,1.1c0.1,0.1,0.2,0.1,0.2,0.2c0.5,0.3,1.1,0.6,1.7,0.9
          l0.1,0.1c0.9,0.4,1.8,0.8,2.6,1.5c1.7,1.3,3.2,2.9,4.5,4.3l2.2,2.3c1.2,1.2,2.2,2.3,3.2,3.5c0.4,0.4,0.7,0.9,1.1,1.3
          c1,1.3,1.8,2.5,2.4,3.6c0.5,0.9,1,1.8,1.7,2.4c0.1,0.1,0.2,0.2,0.3,0.2c0-0.1-0.1-0.3-0.1-0.4c-0.2-0.5-0.4-1-0.8-1.7
          c-0.4-0.7-1-1.3-1.6-2l-0.2-0.2c-0.1-0.2-0.3-0.3-0.4-0.5c-0.9-1.1-1.8-2.2-2.6-3.3l-1.1-1.5c-0.3-0.4-0.6-0.7-0.8-1.1
          c-0.5-0.6-1-1.2-1.5-1.8c-0.7-0.8-1.4-1.6-2.2-2.4c-0.4-0.5-0.9-0.9-1.4-1.3l-0.2-0.2c-0.8-0.8-1.7-1.6-2.4-2.5
          c-0.4-0.5-0.7-0.9-1-1.3c-0.1-0.1-0.2-0.3-0.3-0.4l-0.2-0.3c-0.7-1.1-1.5-2.3-2.6-2.6C227.2,153.4,226.9,153.5,226.6,153.7z
          M258,177.3c-0.7,0-1.3-0.2-1.8-0.4c-1.9-0.8-3-2.8-3.9-4.5l-0.3-0.5c-1.1-2.1-2.5-4.1-4.4-6.5c-0.6-0.8-1.3-1.5-2-2.2
          c-1.9-2-4-3.8-6-5.5l-4.1-3.6c-2.7-2.4-5.8-5-9.2-7.2c-1.4-0.9-3.1-1.6-4.5-2.2c-1.3-0.5-2.7-1.2-4-1.9l-0.3-0.2
          c-0.8-0.5-2.3-1.5-3-2.5c-1.1-1.5-0.9-3.2,0.4-4.2c1-0.7,2.5-1,3.9-0.7c3.1,0.6,5.3,2.6,7.2,4.4l0.6,0.6c0.6,0.5,1.3,1.1,2,1.6
          c1.4,1.1,3,2.1,4.5,3.1l0.8,0.5c1,0.7,1.9,1.3,2.9,2c1.6,1.2,3.2,2.3,4.7,3.6c1,0.9,2.1,1.8,3.2,2.8c0.7,0.6,1.4,1.3,2.1,2
          c0.7,0.7,1.4,1.4,2.1,2.1c1.6,1.6,3.4,3.5,5.3,5.1c0.5,0.4,1.1,0.8,1.6,1.2c1.1,0.8,2.3,1.7,3.3,2.9c1,1.2,1.7,2.4,2.1,3.6
          c0.3,0.9,0.6,2.7,0.1,3.9c-0.3,0.9-1.1,1.7-1.7,2.1c-0.2,0.1-0.4,0.2-0.5,0.3C258.8,177.2,258.4,177.3,258,177.3z M216,137.1
          c-0.6,0.4-0.6,1.2-0.1,1.9c0.4,0.6,1.4,1.3,2.5,2c0.1,0.1,0.2,0.1,0.3,0.2c1.2,0.7,2.6,1.3,3.8,1.8c1.6,0.7,3.2,1.4,4.7,2.3
          c3.5,2.2,6.6,4.9,9.5,7.4l4,3.5c2.1,1.8,4.2,3.7,6.2,5.7c0.8,0.8,1.4,1.6,2,2.3c2,2.4,3.4,4.6,4.6,6.8l0.3,0.6
          c0.8,1.6,1.6,3.2,3,3.7c0.7,0.3,1.3,0.3,1.6,0.2c0.5-0.2,1.1-0.9,1.3-1.5c0.2-0.7,0.1-2.1-0.2-2.8c-0.3-0.9-0.9-1.9-1.8-3
          c-0.8-1-1.9-1.8-3-2.6l-0.3-0.2c-0.5-0.4-1-0.7-1.5-1.1c-1.9-1.6-3.6-3.3-5.3-5l-0.2-0.2c-0.7-0.7-1.4-1.4-2-2.1l-0.1-0.1
          c-0.7-0.7-1.3-1.3-2-1.9c-1-0.9-2-1.8-3.1-2.7c-1.4-1.2-3-2.3-4.6-3.5c-1-0.7-2.1-1.5-3.1-2.2l-0.6-0.4c-1.5-1-3-2.1-4.4-3.1
          c-0.7-0.6-1.5-1.1-2.1-1.7l-0.6-0.6c-1.9-1.7-3.8-3.5-6.4-4C217.6,136.6,216.5,136.8,216,137.1z M283.3,174.7c-3.8,0-7-3.1-9.6-5.7
          c-0.4-0.4-0.8-0.8-1.2-1.1c-5.6-5.3-10.2-9.1-14.7-12.3c-1.2-0.9-2.5-1.7-3.7-2.6l-3.7-2.6c-5.3-3.7-9.5-6.6-13.2-9.3
          c-2.4-1.7-5.6-4-8.8-6.5l-0.9-0.7c-2.9-2.2-5.9-4.5-9.1-6.3c-1-0.6-2.1-1.1-3.2-1.7l-0.3-0.1c-1.9-1-3.9-2.1-5.8-3.3
          c-2.6-1.8-6.2-4.5-6.8-7.9c-0.3-1.5,0.2-2.7,1.4-3.6c1-0.7,2.3-1,3.7-0.9c1.9,0.1,3.8,1.2,5.5,2.2c1,0.6,2,1.4,3.1,2.4
          c1.3,1.2,2.6,2.5,3.7,3.7c1.7,1.8,3.4,3.6,5.4,5.1c2.1,1.6,4.4,3.1,6.7,4.7l0.3,0.2c1.6,1.1,3.3,2.3,5,3.4l8.6,6.1
          c5,3.6,9,6.5,12.7,9.3c0.8,0.6,1.6,1.3,2.5,1.9l0.6,0.4c2.4,1.8,4.9,3.7,7.5,5.4c2.5,1.7,5.3,3.2,7.7,4.6l0.1,0.1
          c1.4,0.8,2.8,1.6,4.2,2.4l0.1,0.1c0.8,0.5,1.6,1,2.4,1.5c1.5,1,3.2,2.2,4.2,3.9c0.5,0.8,0.7,1.7,0.8,2.6c0,0.9,0.1,2.7-1.4,3.7
          l-0.3,0.2l0,0c-0.8,0.4-2.1,0.6-3,0.7C283.6,174.7,283.5,174.7,283.3,174.7z M206.9,111.7c-0.9,0-1.7,0.2-2.3,0.6v0
          c-0.6,0.5-0.9,1.1-0.7,1.9c0.4,2.1,2.4,4.3,6.1,6.8c1.8,1.2,3.7,2.2,5.7,3.2l0.3,0.1c1.1,0.6,2.2,1.1,3.3,1.7
          c3.3,1.8,6.3,4.1,9.2,6.4l1.1,0.8c3,2.3,6.1,4.6,8.8,6.5c4.1,2.9,8.3,5.9,13.2,9.3l3.7,2.6c1.2,0.8,2.4,1.7,3.7,2.6
          c4.6,3.3,9.3,7.1,14.9,12.5c0.4,0.4,0.8,0.8,1.2,1.2c2.5,2.4,5.5,5.4,8.7,5.2c1.4-0.1,2.1-0.3,2.4-0.5l0,0c0.5-0.4,0.7-1,0.7-2.3
          c0-0.6-0.2-1.3-0.5-1.8c-0.8-1.4-2.3-2.4-3.7-3.3c-0.8-0.5-1.5-1-2.3-1.4l-0.1-0.1c-1.3-0.8-2.7-1.5-4-2.3l-0.3-0.2
          c-2.4-1.4-5.2-2.9-7.8-4.6c-2.7-1.8-5.4-3.8-7.6-5.5l-3-2.3c-3.8-2.9-7.7-5.7-12.7-9.3c-0.8-0.6-1.5-1.1-2.3-1.7l-6.3-4.4
          c-1.7-1.3-3.5-2.5-5.2-3.6c-2.1-1.4-4.6-3.1-6.8-4.8c-2.1-1.6-3.8-3.4-5.5-5.2l-0.1-0.1c-1.2-1.2-2.4-2.5-3.6-3.6
          c-1-0.9-1.9-1.6-2.9-2.2c-1.6-1-3.2-1.9-4.7-2C207.1,111.7,207,111.7,206.9,111.7z M229.8,172.7c-0.9,0-1.8-0.3-2.3-0.6
          c-0.9-0.5-2-1.4-2.2-2.6c-0.1-0.6,0-1.3,0.4-1.8c0.8-1,2.2-1.1,3.7-0.4c1.2,0.6,2.5,1.9,2.5,3.3c0,0.7-0.3,1.3-0.8,1.7l0,0
          C230.8,172.6,230.3,172.7,229.8,172.7z M227.1,168.8c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.2-0.1,0.4c0.1,0.5,0.7,1.1,1.3,1.4
          c0.8,0.4,1.7,0.5,1.9,0.3c0,0,0.1-0.1,0.1-0.2c0-0.5-0.6-1.3-1.6-1.8C228,168.6,227.4,168.5,227.1,168.8z M282,150.8
          c-2.7,0-5.4-1.6-7.5-2.9c-2.6-1.6-5.4-3.1-7.8-4.4l-1.9-1.1c-1.2-0.7-2.5-1.4-3.7-2l-1.6-0.9c-3.7-2-7.5-4-11.1-6.4
          c-1.4-0.9-2.8-1.9-4.1-2.9c-3.2-2.4-6.3-5.1-9.3-7.6l-0.1-0.1c-1.2-1-2.4-2.1-3.6-3.1c-1.3-1.1-2.7-2.1-4.1-3.1
          c-2.1-1.5-4.5-3.2-6.5-5.3l-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-1.1-1.2-2.5-3.1-2.8-4.8c-0.5-2.3,0.7-4.5,2.7-5.2
          c1.5-0.5,3.6-0.2,5.2,0.7c2.9,1.7,4.6,4.4,6.2,7c0.5,0.8,0.9,1.5,1.4,2.2c0.6,0.9,1.3,1.8,2.1,2.7c3,3.2,6.6,6,10,8.5
          c2,1.5,4.1,2.9,6.4,4.5l0.7,0.5c1.3,0.9,2.6,1.7,3.9,2.5l0.5,0.3c0.9,0.6,1.8,1.2,2.7,1.7c3.5,2.2,7.7,4.6,12.2,5.9
          c1.2,0.4,2.5,0.6,3.5,0.8c1.4,0.3,3,0.6,4.6,1.1c1.3,0.5,3.1,1.2,4.6,2.3c0.8,0.7,2.5,2.3,2.9,3.7c0.3,1.2,0,2.9-0.7,3.8
          c-0.2,0.3-0.5,0.5-0.7,0.7c-0.8,0.6-1.9,0.9-2.7,1C282.7,150.8,282.4,150.8,282,150.8z M220.1,102.6c-0.9,0.6-1.2,1.7-1,2.9
          c0.2,1.2,1.4,2.9,2.4,4l0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2l0.1,0.1c1.8,1.9,4.1,3.5,6.2,5l0.1,0.1c1.4,1,2.8,2,4.2,3.1
          c1.2,1,2.4,2.1,3.6,3.1c3,2.6,6.1,5.2,9.3,7.6c1.3,1,2.7,1.9,4,2.8c3.5,2.3,7.3,4.3,10.9,6.2l1.7,0.9c1.3,0.7,2.5,1.3,3.8,2
          l1.9,1.1c2.6,1.4,5.3,2.9,7.8,4.5c2.3,1.4,4.9,3,7.4,2.6c1.1-0.2,2-0.6,2.3-1c0.4-0.5,0.6-1.7,0.4-2.3c-0.2-0.7-1.3-2-2.3-2.8
          c-1-0.7-2.3-1.4-4.1-2.1c-1.4-0.5-2.9-0.8-4.3-1.1c-1.3-0.3-2.5-0.5-3.7-0.9c-4.6-1.4-9-3.9-12.6-6.1c-0.8-0.5-1.6-1-2.5-1.6
          l-0.8-0.5c-1.6-1-3.1-2-4.6-3.1c-2.4-1.6-4.5-3-6.5-4.5c-3.5-2.6-7.2-5.4-10.3-8.7c-0.9-1-1.7-1.9-2.3-2.9c-0.5-0.7-1-1.5-1.4-2.3
          c-1.5-2.5-3-5-5.6-6.4c-1.2-0.7-2.8-0.9-3.8-0.5C220.5,102.4,220.3,102.5,220.1,102.6L220.1,102.6z M277.9,129.2
          c-0.9,0-2-0.1-3.2-0.4c-1.4-0.3-2.7-0.8-3.9-1.2l-0.3-0.1c-0.9-0.3-1.9-0.6-2.8-0.9c-0.7-0.2-1.3-0.4-2-0.5l-0.1,0
          c-2.1-0.6-4.3-1.2-6.4-2c-2.1-0.9-4.2-1.9-6.1-3c-0.3-0.2-0.7-0.4-1-0.6l-0.3-0.2c-0.5-0.3-1-0.5-1.5-0.8c-0.3-0.1-0.6-0.3-0.9-0.4
          l-0.4-0.1c-0.5-0.2-1.1-0.5-1.7-0.8c-1.1-0.6-2-1.3-2.7-1.9c-0.9-0.8-1.5-1.6-1.8-2.4c-0.7-1.8,0.3-3.5,1.7-4.1
          c0.7-0.3,1.8-0.4,2.5-0.5c0,0,0,0,0,0c0.8,0,1.8,0.3,2.4,0.7c1.2,0.6,1.8,1.6,2.5,2.6l0.1,0.1c0.2,0.3,0.4,0.6,0.6,0.9
          c1,1.3,2.2,2.4,3.5,3.3c1.7,1.1,3.6,2.4,5.8,3.4c1.8,0.8,3.9,1.4,6.2,1.6c2,0.2,4.1,0,6.5-0.5l0.2,0c0.8-0.2,1.7-0.4,2.7-0.3
          c1,0.1,1.8,0.3,2.9,0.8c1.4,0.7,2.3,1.8,2.4,3.1c0.1,1-0.4,2.5-1.7,3.4v0c-0.3,0.2-0.5,0.3-0.8,0.4
          C279.5,129.1,278.7,129.2,277.9,129.2z M244.8,111.6c-0.5,0.3-0.8,1-0.5,1.8c0.2,0.6,0.7,1.2,1.4,1.8c0.6,0.6,1.4,1.1,2.4,1.7
          c0.4,0.2,0.9,0.4,1.4,0.6l0.3,0.1c0.5,0.2,0.9,0.4,1.2,0.5c0.6,0.3,1.3,0.6,1.9,1c0.4,0.2,0.7,0.4,1,0.5c1.8,0.9,3.9,2,6,2.9
          c2.1,0.8,4.2,1.4,6.3,2l0.6,0.2c0.5,0.1,1,0.3,1.4,0.4c1,0.3,1.9,0.6,2.8,0.9c1.5,0.5,2.8,0.9,4.1,1.2c1.9,0.5,3.4,0.5,4.4,0.1
          c0.2-0.1,0.3-0.2,0.5-0.2c0.7-0.5,1-1.3,1-1.9c0-0.6-0.6-1.2-1.4-1.6c-0.9-0.4-1.6-0.6-2.3-0.6c-0.7,0-1.5,0.1-2.3,0.3l-0.2,0
          c-2.5,0.5-4.8,0.7-7,0.5c-2.5-0.2-4.7-0.8-6.7-1.8c-2.2-1-4.2-2.3-6-3.5c-1.5-1-2.8-2.2-3.9-3.6c-0.3-0.3-0.5-0.7-0.8-1.1
          c-0.5-0.8-1.1-1.6-1.9-2c-0.4-0.2-1.2-0.5-1.6-0.5c0,0,0,0,0,0c-0.8,0-1.5,0.1-1.9,0.3C245,111.5,244.9,111.5,244.8,111.6
          L244.8,111.6z"
        />
      </g>
    </svg>
    <div className="protein-nav__cell-description">{getHighlightName(highlighted)}</div>
  </div>
);

InfectedCell.propTypes = {
  handleGraphicMouseOut: PropTypes.func.isRequired,
  handleGraphicMouseOver: PropTypes.func.isRequired,
  highlighted: PropTypes.shape({
    cell: PropTypes.string,
    protein: PropTypes.string,
  }).isRequired,
};

export default InfectedCell;
