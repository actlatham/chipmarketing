import { darken } from 'polished';

export default {
  colors: {
    aquamarine: '#07ceb3',
    aquamarineDarken: darken(0.05, '#07ceb3'),
    blueyGrey: '#aeb6c5',
    darkishPink: '#e1306c',
    darkishPinkDarken: darken(0.1, '#e1306c'),
    denimBlue: '#3b5998',
    denimBlueDarken: darken(0.1, '#3b5998'),
    slate: '#4e586a',
    slateTwo: '#56647c',
    slateTwoDarken: darken(0.1, '#56647c'),
    steel: '#6f7b90',
    veryLightPink: '#e3e3e3',
    white: '#fff',
    whiteThree: '#ececec',
    whiteTwo: '#efefef',
  },
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 59, // rem
      lg: 59, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
  fonts: {
    helvetica: 'Helvetica Neue',
  },
};
