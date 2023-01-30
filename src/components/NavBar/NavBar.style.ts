import styled from 'styled-components';

import { padding, percent, px, translateX } from 'csx';

import { colors, sizes } from '@/styles/variables';

export const Nav = styled.nav<{ active: string }>(({ active }) => ({
  gridArea: 'navbar',
  maxWidth: sizes.container,
  padding: padding(
    sizes.space.default,
    sizes.space.default,
    0,
    sizes.space.default,
  ),
  position: 'relative',
  width: percent(100),

  ':after': {
    backgroundColor: colors.accentDarkness1,
    borderRadius: sizes.borderRadius.default,
    content: '""',
    display: 'block',
    height: px(8),
    position: 'absolute',
    right: active === 'first'
      ? 0
      : percent(-50),
    transform: translateX(percent(-100)),
    transition: 'right .1s ease-in',
    width: percent(50),
  },

  [`> menu > li:${active}-of-type a`]: {
    color: colors.accent,
  },
}));

export const Menu = styled.menu({
  color: colors.blackLightness1,
  display: 'grid',
  fontSize: px(28),
  fontWeight: 700,
  gridTemplateColumns: '1fr 1fr',
  listStyle: 'none',
  paddingBottom: sizes.space.default,
  textAlign: 'center',

  ' a': {
    color: colors.blackLightness1,
  },
});


