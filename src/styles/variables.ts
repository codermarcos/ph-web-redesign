import { percent, px } from 'csx';

export const magicNumber = 20;

export const sizes = {
  border: {
    xxs: px(2),
  },
  borderRadius: {
    default: px(magicNumber),
    full: percent(100),
  },
  container: px(920),
  space: {
    default: px(20),
  },
};

export const colors = {
  dark: '#1d232a',
  darkLight: '#707f88',

  whiteDarkness1: '#f3f5f7',
  whiteDarkness2: '#d5dadb',
  whiteDefault: '#fff',
};
