import styled from 'styled-components';

import { border, padding, viewWidth } from 'csx';

import Link from 'next/link';

import { colors, sizes } from '@/styles/variables';

export const HeaderContainer = styled.header({
  backgroundColor: colors.whiteDefault,
  display: 'flex',
  justifyContent: 'center',
  padding: padding(sizes.space.default),
  width: viewWidth(100),
});

export const LoginLink = styled(Link)({
  backgroundColor: '#d9552d',
  border: border({
    color: '#b9573c',
    style: 'solid',
    width: sizes.border.xxs,
  }),
  borderRadius: sizes.borderRadius.default,
  color: colors.whiteDefault,
  cursor: 'pointer',
  padding: padding(sizes.space.default),
  textDecoration: 'none',
});
