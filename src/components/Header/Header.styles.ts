import styled from 'styled-components';

import { padding, px, viewWidth } from 'csx';

import Link from 'next/link';

export const HeaderContainer = styled.header({
  display: 'flex',
  justifyContent: 'center',
  padding: padding(px(20), px(20)),
  width: viewWidth(100),
});

export const LoginLink = styled(Link)({
  cursor: 'pointer',
  textDecoration: 'none',
});
