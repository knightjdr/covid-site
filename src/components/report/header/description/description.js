import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const Description = forwardRef((
  {
    description,
    field,
    handleHideText,
    handleShowText,
    showMoreButton,
    showText,
  },
  ref,
) => (
  description
    ? (
      <>
        <div className="report__header-field">{field}</div>
        <div className="report__header-description">
          {
            showText
              ? (
                <>
                  <p>
                    {description}
                    <button
                      className="report__header-description-button"
                      onClick={handleHideText}
                      type="button"
                    >
                      less
                    </button>
                  </p>
                </>
              )
              : (
                <>
                  <p
                    className="report__header-description-preview"
                    ref={ref}
                  >
                    {description}
                  </p>
                  {
                    showMoreButton
                    && (
                      <button
                        className="report__header-description-button"
                        onClick={handleShowText}
                        type="button"
                      >
                        more
                      </button>
                    )
                  }
                </>
              )
          }
        </div>
      </>
    )
    : null
));

Description.propTypes = {
  description: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  handleHideText: PropTypes.func.isRequired,
  handleShowText: PropTypes.func.isRequired,
  showMoreButton: PropTypes.bool.isRequired,
  showText: PropTypes.bool.isRequired,
};

export default Description;
