import PropTypes from 'prop-types';
import React from 'react';
import { Link, withPrefix } from 'gatsby';

import './link.css';

const formatClass = (classes) => (classes.length > 0 ? classes.join(' ') : undefined);

const CustomLink = ({
  buttonStyle,
  children,
  className,
  nav,
  to,
  ...otherProps
}) => {
  const classes = className ? [className] : [];
  if (nav) {
    classes.push('link_nav');
  }
  if (buttonStyle) {
    classes.push('link_button');
  }

  if (to.startsWith('/') && /\.[0-9a-z]+$/i.test(to)) {
    return (
      <a
        className={formatClass(classes)}
        href={withPrefix(to)}
        {...otherProps}
      >
        {children}
      </a>
    );
  } if (to.startsWith('/')) {
    return (
      <Link
        className={formatClass(classes)}
        to={to}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      className={formatClass(classes)}
      href={to}
    >
      {children}
    </a>
  );
};

CustomLink.defaultProps = {
  buttonStyle: false,
  className: '',
  nav: false,
};

CustomLink.propTypes = {
  buttonStyle: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  nav: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default CustomLink;
