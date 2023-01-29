import { createGlobalStyle } from 'styled-components';

const ResetCss = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
});

export default ResetCss;
