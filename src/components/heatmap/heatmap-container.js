import React, { useEffect, useRef, useState } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import Heatmap from './heatmap';

import debounce from '../../utils/debounce';
import drawCanvas from './canvas/draw-canvas';
import data from './assets/heatmap-shape.json';

const rowMap = data.rows.reduce((accum, value, index) => ({ ...accum, [value]: index }), {});

const CELL_SIZE = 20;
const ROW_BUFFER = 20;
const HALF_ROW_BUFFER = ROW_BUFFER / 2;

const scrollerDimensions = {
  height: data.rows.length * CELL_SIZE,
  width: (data.columns.length * CELL_SIZE) + 100,
};

const getDimensions = (container) => {
  const { height } = container.getBoundingClientRect();

  const pageSize = Math.floor(height / CELL_SIZE);
  const pageSizeWithBuffer = pageSize + ROW_BUFFER;

  return {
    canvas: {
      height: pageSizeWithBuffer * CELL_SIZE,
      width: data.columns.length * CELL_SIZE,
    },
    numRows: data.rows.length,
    pageSize,
    pageSizeWithBuffer,
  };
};

const getScrollToRow = (container, rowIndex, dims) => {
  const { height } = container.getBoundingClientRect();
  const containerHeightInCells = Math.floor(height / CELL_SIZE);

  if (rowIndex <= 0) {
    return {
      index: 0,
      sliceStart: 0,
      sliceEnd: dims.pageSizeWithBuffer,
    };
  } if (rowIndex <= HALF_ROW_BUFFER) {
    return {
      index: rowIndex,
      sliceStart: 0,
      sliceEnd: dims.pageSizeWithBuffer,
    };
  }

  const maxTopRowIndex = dims.numRows - containerHeightInCells;
  if (rowIndex >= maxTopRowIndex) {
    return {
      index: maxTopRowIndex,
      sliceStart: maxTopRowIndex - ROW_BUFFER,
      sliceEnd: dims.numRows,
    };
  } if (rowIndex >= maxTopRowIndex - HALF_ROW_BUFFER) {
    return {
      index: rowIndex,
      sliceStart: dims.numRows - dims.pageSizeWithBuffer,
      sliceEnd: dims.numRows,
    };
  }

  return {
    index: rowIndex,
    sliceStart: rowIndex - HALF_ROW_BUFFER,
    sliceEnd: rowIndex + dims.pageSize + HALF_ROW_BUFFER,
  };
};

const HeatmapContainer = () => {
  const [rows, setRows] = useState({ names: [], startIndex: null });
  const [translation, setTranslation] = useState(0);
  const canvasRef = useRef();
  const containerRef = useRef();
  const programmticScrollRef = useRef(false);
  const [urlPrey] = useQueryParam('prey', StringParam);

  const updateCanvas = (rowIndex) => {
    const dims = getDimensions(containerRef.current);
    const row = getScrollToRow(containerRef.current, rowIndex, dims);
    const pageRows = data.rows.slice(row.sliceStart, row.sliceEnd);
    const pageValues = data.values.slice(row.sliceStart, row.sliceEnd);

    drawCanvas(canvasRef.current, pageValues, dims.canvas, CELL_SIZE);
    setRows({ names: pageRows, startIndex: row.sliceStart });
    setTranslation(row.sliceStart * CELL_SIZE);

    return row;
  };
  const debouncedUpdated = debounce(updateCanvas, 100);

  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      const rowIndex = rowMap[urlPrey] || 0;
      const { height } = containerRef.current.getBoundingClientRect();
      const containerHeightInCells = Math.floor(height / CELL_SIZE);
      const desiredTopRowIndex = rowIndex - Math.floor(containerHeightInCells / 2);

      const row = updateCanvas(desiredTopRowIndex);
      programmticScrollRef.current = true;
      containerRef.current.scrollTop = row.index * CELL_SIZE;
    }
  }, [canvasRef.current, containerRef.current, urlPrey]);

  useEffect(() => {
    const onScroll = () => {
      const topIndex = Math.ceil(containerRef.current.scrollTop / CELL_SIZE);
      if (
        !programmticScrollRef.current
        && (
          topIndex - rows.startIndex < 1
          || topIndex - rows.startIndex > ROW_BUFFER - 1
        )
      ) {
        debouncedUpdated(topIndex);
      }
      programmticScrollRef.current = false;
    };

    containerRef.current.addEventListener('scroll', onScroll);

    return () => { containerRef.current.removeEventListener('scroll', onScroll); };
  }, [containerRef.current, programmticScrollRef.current, rows.startIndex]);

  return (
    <Heatmap
      columns={data.columns}
      highlightedPrey={urlPrey}
      ref={{
        canvas: canvasRef,
        container: containerRef,
      }}
      rows={rows.names}
      scrollerDimensions={scrollerDimensions}
      translation={translation}
    />
  );
};

export default HeatmapContainer;
