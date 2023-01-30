import styled from 'styled-components';

import NextImage from 'next/image';

import { padding, percent, px, rotateZ, translateX, translateY } from 'csx';

import { colors, sizes } from '@/styles/variables';

export const HeaderContainer = styled.section({
  display: 'flex',
  gridArea: 'header',
  justifyContent: 'space-between',
  maxWidth: sizes.container,
  padding: padding(sizes.space.default),
  width: percent(100),
});

export const Image = styled(NextImage)({
  borderRadius: percent(100),
});

export const Input = styled.input({
  backgroundColor: colors.whiteDarkness1,
  border: 'none',
  borderRadius: sizes.borderRadius.default,
});

export const IconMagnificGlass = styled.div({
  border: '4px solid black',
  borderRadius: percent(100),
  height: px(28),
  position: 'relative',
  transition: 'all ease-in .1s',
  width: px(28),

  // eslint-disable-next-line sort-keys
  '&.active': {
    height: px(38),
    width: px(38),

    // eslint-disable-next-line sort-keys
    ':after': {
      transform: `${translateX(px(-11))} ${translateY(px(13))} ${rotateZ('45deg')}`,
      width: px(22),
    },

    ':before': {
      opacity: 1,
      transform: `${translateX(px(-11))} ${translateY(px(13))} ${rotateZ('-45deg')}`,
    },
  },

  ':after': {
    backgroundColor: 'black',
    borderRadius: px(4),
    content: '""',
    height: px(4),
    position: 'absolute',
    transform: `${translateX(px(4))} ${translateY(px(24))} ${rotateZ('45deg')}`,
    transition: 'all ease-out .1s',
    width: px(20),
  },

  ':before': {
    backgroundColor: 'black',
    borderRadius: px(4),
    content: '""',
    height: px(4),
    opacity: 0,
    position: 'absolute',
    transform: `${translateX(px(-20))} ${translateY(px(16))} ${rotateZ('-45deg')}`,
    transition: 'all ease-in .1s',
    width: px(22),
  },
});

export const SearchButton = styled.button({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: percent(100),
  display: 'flex',
  justifyContent: 'center',
  width: px(74),
});

