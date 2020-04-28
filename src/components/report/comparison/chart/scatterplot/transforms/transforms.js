import { handleMouseDown, handleWheel } from './event-handlers';

export const defaultState = {
  origin: {
    x: 0,
    y: 0,
  },
  scale: 1,
  matrix: {
    plot: '',
    xAxis: '',
    yAxis: '',
  },
};

export const handlers = {
  pan: handleMouseDown,
  zoom: handleWheel,
};
