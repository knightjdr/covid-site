import PropTypes from 'prop-types';
import styled from 'styled-components';

import circleDown from './caret-circle-down.svg';
import circleRight from './caret-circle-right.svg';
import dotCircle from './dot-circle.svg';
import info from './info-circle.svg';

const icon = {
  dot: dotCircle,
  info,
};

const Details = styled.details`
  summary {
    align-items: center;
    display: flex;
    list-style-type: none;
  }
  summary::before {
    content: '';
    display: block;
    background-image: url(${(props) => icon[props.listStyleType]});
    background-size: 1.2rem 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
    width: 1.2rem;
  }
  summary:focus {
    outline: none;
  }
  summary:focus::before,
  summary:hover::before  {
    background-image: url(${circleRight});
  }
  &[open] summary::before {
    background-image: url(${circleDown});
  }
`;

Details.defaultProps = {
  listStyleType: 'info',
};


Details.propTypes = {
  listStyleType: PropTypes.string,
};

export default Details;
