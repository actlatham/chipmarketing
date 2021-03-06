import * as React from 'react';
import { normalize } from 'polished';
import { injectGlobal, ThemeProvider } from 'styled-components';

import Index from 'src/scenes/Index';

import theme from 'src/theme';

import HelveticaNeue from './fonts/HelveticaNeue.woff';
import HelveticaNeue2 from './fonts/HelveticaNeue.woff2';
import HelveticaNeueMedium from './fonts/HelveticaNeueMedium.woff';
import HelveticaNeueMedium2 from './fonts/HelveticaNeueMedium.woff2';

injectGlobal`
  @font-face {
    font-family: ${theme.fonts.helvetica};
    src: url(${HelveticaNeue2}) format('woff2'), url(${HelveticaNeue}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: ${theme.fonts.helvetica};
    src: url(${HelveticaNeueMedium2}) format('woff2'), url(${HelveticaNeueMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  ${normalize()};
  
  *, *::before, *::after {
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    background: ${theme.colors.white};
    color: ${theme.colors.slateTwo};
    font-family: ${theme.fonts.helvetica};
    font-size: 16px;
  }
  
  a, button {
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
}
