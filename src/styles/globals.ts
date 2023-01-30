import { createGlobalStyle } from 'styled-components';

import { percent, px } from 'csx';

import { colors } from '@/styles/variables';

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
    backgroundColor: colors.whiteDarkness2,
    fontFamily: 'Nunito, Segoe UI, Helvetica, Arial',
  },
  'main': {
    maxWidth: px(920),
    padding: px(20),
    width: percent(100),
  },
});

export default GlobalsCss;
