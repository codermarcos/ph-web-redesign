import styled from 'styled-components';

import { viewWidth } from 'csx';

import Link from 'next/link';
import { colors } from '@/styles/variables';

export const HeaderContainer = styled.header({
  backgroundColor: colors.whiteDefault,
  display: 'flex',
  justifyContent: 'center',
  width: viewWidth(100),
});

export const LoginLink = styled(Link)({
  cursor: 'pointer',
  textDecoration: 'none',
});
