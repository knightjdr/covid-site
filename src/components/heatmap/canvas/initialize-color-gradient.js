import convertHSLtoHex from './convert-hsl-to-hex';
import round from '../../../utils/round';

// initializeColorGradient creates a single direction hex gradient. The color scale is set using the hue
// and saturation components of HSL. The gradient is then defined by changing the lightness
// from 1 (light) to 0 (dark). HSL values are on a 0-1 scale.
// The maximum hue value of 1 equals 360 so all values are relative to that.
const initializeColorGradient = (colorSpace, numColors) => {
  let h;
  let s;
  if (colorSpace === 'green') {
    // Middle HSL value = (120, 100%, 50%).
    h = 120 / 360;
    s = 1;
  } else if (colorSpace === 'greyscale') {
    // Middle HSL value = (0, 0%, 50%).
    h = 0;
    s = 0;
  } else if (colorSpace === 'red') {
    // Middle HSL value = (0, 100%, 50%).
    h = 0;
    s = 1;
  } else if (colorSpace === 'yellow') {
    // Middle HSL value = (60, 100%, 50%).
    h = 60 / 360;
    s = 1;
  } else { // default blue
    // Middle (HSL value = (225, 100%, 50%).
    h = 0.625;
    s = 1;
  }
  const increment = 1 / (numColors - 1);
  const startL = 1;
  const gradient = [];
  for (let i = 0; i < numColors; i += 1) {
    const lightness = round(startL - (i * increment), 4);
    gradient[i] = convertHSLtoHex({ h, s, l: lightness });
  }
  return gradient;
};

export default initializeColorGradient;
