import PropTypes from 'prop-types';
import React from 'react';
import { Link, withPrefix } from 'gatsby';

import './link.css';

const formatClass = (classes) => (classes.length > 0 ? classes.join(' ') : undefined);

const CustomLink = ({
  allowReferrer,
  buttonStyle,
  children,
  className,
  hoverBorder,
  nav,
  outline,
  to,
  ...props
}) => {
  const classes = className ? [className] : [];
  if (nav) {
    classes.push('link_nav');
  }
  if (buttonStyle) {
    classes.push('link_button');
  }
  if (hoverBorder) {
    classes.push('link_hover');
  }
  if (outline) {
    classes.push('link_outline');
  }

  if (to.startsWith('/') && /\.[0-9a-z]+$/i.test(to)) {
    return (
      <a
        className={formatClass(classes)}
        href={withPrefix(to)}
        {...props}
      >
        {children}
      </a>
    );
  } if (to.startsWith('/')) {
    return (
      <Link
        className={formatClass(classes)}
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      className={formatClass(classes)}
      href={to}
      {...(!allowReferrer ? { rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  );
};

CustomLink.defaultProps = {
  allowReferrer: false,
  buttonStyle: false,
  className: '',
  hoverBorder: false,
  nav: false,
  outline: false,
};

CustomLink.propTypes = {
  allowReferrer: PropTypes.bool,
  buttonStyle: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  hoverBorder: PropTypes.bool,
  nav: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default CustomLink;
