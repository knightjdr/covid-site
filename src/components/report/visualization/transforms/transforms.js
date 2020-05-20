import { handleMouseDown, handleWheel } from './event-handlers';

export const defaultState = {
  matrix: {
    plot: '',
    xAxis: '',
    yAxis: '',
  },
  origin: {
    x: 0,
    y: 0,
  },
  scale: 1,
};

export const handlers = {
  pan: handleMouseDown,
  zoom: handleWheel,
};
