import styled from 'styled-components';

import { border, padding, viewWidth } from 'csx';

import Link from 'next/link';

import { colors, sizes } from '@/styles/variables';

export const HeaderContainer = styled.header({
  backgroundColor: colors.whiteDefault,
  display: 'grid',
  gridTemplateAreas: '"marginL header marginR" "marginL navbar marginR"',
  gridTemplateColumns: `1fr minmax(auto, ${sizes.container}) 1fr`,
  gridTemplateRows: 'auto auto',
  justifyContent: 'center',
  padding: padding(
    sizes.space.default,
    sizes.space.default,
    0,
    sizes.space.default,
  ),
  width: viewWidth(100),
});

export const LoginLink = styled(Link)({
  alignSelf: 'center',
  backgroundColor: colors.accent,
  border: border({
    color: colors.accentDarkness1,
    style: 'solid',
    width: sizes.border.xxs,
  }),
  borderRadius: sizes.borderRadius.default,
  color: colors.whiteDefault,
  cursor: 'pointer',
  gridArea: 'header',
  justifySelf: 'center',
  padding: padding(sizes.space.default),
  textDecoration: 'none',

  // eslint-disable-next-line sort-keys
  ':visited': {
    color: colors.whiteDefault,
  },
});
