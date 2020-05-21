import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import chartScatter from './chart-scatter.svg';
import circleDown from './caret-circle-down.svg';
import circleRight from './caret-circle-right.svg';
import dot from './dot-circle.svg';
import info from './info-circle.svg';
import microscope from './microscope.svg';

const icon = {
  chart: chartScatter,
  dot,
  info,
  microscope,
};

const StyledDetails = styled.details`
  summary {
    list-style-type: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .summary__inner {
    align-items: center;
    display: flex;
  }
  summary span {
    content: '';
    background-image: url(${(props) => icon[props.listStyleType]});
    background-size: 1.2rem 1.2rem;
    display: inline-block;
    height: 1.2rem;
    margin: 0;
    margin-right: 0.5rem;
    width: 1.2rem;
  }
  summary:focus {
    outline: none;
  }
  summary:focus span,
  summary:hover span  {
    background-image: url(${circleRight});
  }
  &[open] summary span {
    background-image: url(${circleDown});
  }
`;

const Details = ({
  children,
  listStyleType,
  open,
  summary,
}) => (
  <StyledDetails
    listStyleType={listStyleType}
    open={open}
  >
    <summary>
      <div className="summary__inner">
        <span />
        {summary}
      </div>
    </summary>
    {children}
  </StyledDetails>
);

Details.defaultProps = {
  listStyleType: 'info',
  open: false,
  summary: 'summary',
};


Details.propTypes = {
  children: PropTypes.node.isRequired,
  listStyleType: PropTypes.string,
  open: PropTypes.bool,
  summary: PropTypes.string,
};

export default Details;
