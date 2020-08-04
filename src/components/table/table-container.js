import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Table from './table';

const TableContainer = ({
  children,
  classOnOverflow,
  minWidth,
}) => {
  const [tableOverflows, setTableOverflowed] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const isOverflown = () => {
      const { clientWidth, scrollWidth } = ref.current;
      setTableOverflowed(scrollWidth > clientWidth);
    };

    if (classOnOverflow) {
      isOverflown();
      window.addEventListener('resize', isOverflown);
    }
    return () => {
      if (classOnOverflow) {
        window.removeEventListener('resize', isOverflown);
      }
    };
  }, [classOnOverflow]);

  return (
    <Table
      classOnOverflow={classOnOverflow}
      minWidth={minWidth}
      ref={ref}
      tableOverflows={tableOverflows}
    >
      {children}
    </Table>
  );
};

TableContainer.defaultProps = {
  classOnOverflow: '',
  minWidth: 'auto',
};

TableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classOnOverflow: PropTypes.string,
  minWidth: PropTypes.number,
};

export default TableContainer;
