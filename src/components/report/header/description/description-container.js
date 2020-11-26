import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Description from './description';

const DescriptionContainer = ({
  description,
  field,
}) => {
  const [showMoreButton, setShowButtonState] = useState(false);
  const [showText, setShowState] = useState(false);
  const ref = useRef();

  const handleHideText = () => {
    setShowState(false);
  };

  const handleShowText = () => {
    setShowState(true);
  };

  useEffect(() => {
    const isOverflown = () => {
      if (ref.current) {
        const { clientWidth, scrollWidth } = ref.current;
        setShowButtonState(scrollWidth > clientWidth);
      }
    };
    isOverflown();

    window.addEventListener('resize', isOverflown);
    return () => {
      window.removeEventListener('resize', isOverflown);
    };
  }, [ref.current]);

  return (
    <Description
      description={description}
      field={field}
      handleHideText={handleHideText}
      handleShowText={handleShowText}
      ref={ref}
      showMoreButton={showMoreButton}
      showText={showText}
    />
  );
};

DescriptionContainer.propTypes = {
  description: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default DescriptionContainer;
