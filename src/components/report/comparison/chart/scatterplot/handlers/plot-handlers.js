const mouse = {
  handlers: { move: null, up: null },
  move: false,
  start: {},
};

const getDelta = (e) => {
  const { pageX, pageY } = e;
  return {
    x: pageX - mouse.start.x,
    y: pageY - mouse.start.y,
  };
};

const getMatrix = (scale, transform) => (
  `matrix(${scale}, 0, 0, ${scale}, ${transform.x}, ${transform.y})`
);

const getNewOrigin = (e, origin) => {
  const delta = getDelta(e);

  return {
    x: origin.x + delta.x,
    y: origin.y + delta.y,
  };
};

const handleMouseMoveXY = (options) => (e) => {
  if (mouse.down) {
    e.preventDefault();

    const { setTransform, transform } = options;
    const newOrigin = getNewOrigin(e, transform.origin);

    setTransform({
      ...transform,
      transformPlot: getMatrix(transform.scale, newOrigin),
    });
  }
};

const handleMouseUpXY = (options) => (e) => {
  e.preventDefault();
  if (mouse.down) {
    const { setTransform, transform } = options;
    const newOrigin = getNewOrigin(e, transform.origin);

    mouse.down = false;

    setTransform({
      ...transform,
      origin: newOrigin,
      transformPlot: getMatrix(transform.scale, newOrigin),
    });

    window.removeEventListener('mousemove', mouse.handlers.move);
    window.removeEventListener('mouseup', mouse.handlers.up);
  }
};

const handleMouseDownXY = (e, options) => {
  e.preventDefault();

  const { pageX, pageY } = e;
  const { setTransform, transform } = options;

  mouse.down = true;
  mouse.start = { x: pageX, y: pageY };

  mouse.handlers.move = handleMouseMoveXY(options);
  mouse.handlers.up = handleMouseUpXY(options);

  window.addEventListener('mousemove', mouse.handlers.move);
  window.addEventListener('mouseup', mouse.handlers.up);

  setTransform({
    ...transform,
    mouseDown: true,
  });
};

export default {
  handleMouseDownXY,
};
