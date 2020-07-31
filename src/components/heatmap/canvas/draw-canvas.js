/* eslint-disable no-param-reassign */
import initializeColorGradient from './initialize-color-gradient';
import partialSetRange from './set-range-partial';

const DPI = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
const NUM_COLORS = 101;
const SPEC_CAP = 50;

const createCanvas = (canvas, data, dimensions, cellSize) => {
  canvas.style.height = `${dimensions.height}px`;
  canvas.style.width = `${dimensions.width}px`;

  canvas.height = dimensions.height * DPI;
  canvas.width = dimensions.width * DPI;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(DPI, DPI);

  const cellDimension = cellSize * DPI;
  const colorGradient = initializeColorGradient('blue', NUM_COLORS);
  const convertToFillRange = partialSetRange(0, SPEC_CAP, 0, NUM_COLORS - 1);

  data.forEach((row, rowIndex) => {
    const y = rowIndex * cellSize;
    row.forEach((value, columnIndex) => {
      const x = columnIndex * cellSize;
      ctx.fillStyle = colorGradient[convertToFillRange(value)];
      ctx.fillRect(x, y, cellDimension, cellDimension);
    });
  });
};

export default createCanvas;
