import { createGlobalStyle } from 'styled-components';

import { percent, px } from 'csx';

import { colors, sizes } from '@/styles/variables';

const GlobalsCss = createGlobalStyle({
  '#__next': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'a': {
    ':visited': {
      color: 'currentcolor',
    },
    textDecoration: 'none',
  },
  'body': {
    backgroundColor: colors.whiteDarkness1,
    fontFamily: 'Nunito, Segoe UI, Helvetica, Arial',
  },
  'main': {
    maxWidth: sizes.container,
    padding: px(20),
    width: percent(100),
  },
});

export default GlobalsCss;
