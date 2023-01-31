import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { border, percent, px, translateY } from 'csx';

import { colors, sizes } from '@/styles/variables';

export const ListItem = styled.li({
  marginBottom: sizes.space.default,
  position: 'relative',
});

export const ListItemGrid = styled.figure({
  alignItems: 'center',
  display: 'grid',
  gridGap: sizes.space.default,
  gridTemplateAreas: '"image information"',
  height: percent(100),
  justifyContent: 'left',
});

export const ListItemImage = styled(Image)({
  borderRadius: sizes.borderRadius.default,
  gridArea: 'image',
});

export const ListItemInformations = styled.figcaption({
  display: 'flex',
  flexDirection: 'column',
  fontSize: px(24),
  gridArea: 'information',
  height: px(92),
  justifyContent: 'space-between',
  maxWidth: percent(100),
  minWidth: 0,
  paddingRight: px(76),

  // eslint-disable-next-line sort-keys
  'b': {
    color: colors.black,
    fontSize: px(36),
    fontWeight: 600,
    lineHeight: px(34),
    maxWidth: percent(100),
  },

  'p': {
    color: colors.blackLightness1,
    maxWidth: percent(100),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export const ListItemLink = styled(Link)({
  backgroundColor: colors.whiteDefault,
  borderRadius: sizes.borderRadius.default,
  display: 'block',
  height: px(166),
  padding: sizes.space.default,
});

export const UpVoteButton = styled.button({
  background: 'url(/upvote.png) no-repeat',
  backgroundPosition: '0 0',
  border: border({
    color: '#eff2f1',
    style: 'solid',
    width: sizes.border.xxs,
  }),
  borderRadius: sizes.borderRadius.default,
  cursor: 'pointer',
  fontSize: px(24),
  fontWeight: 600,
  height: px(100),
  lineHeight: px(140),
  position: 'absolute',
  right: `-${sizes.space.default}`,
  top: percent(50),
  transform: translateY(percent(-50)),
  transition: 'background-position 1s steps(28),' +
    'color 1s ease-out, border 2s ease-in',
  transitionDuration: '0s',
  width: px(100),

  // eslint-disable-next-line sort-keys
  ':focus': {
    backgroundPosition: '-2800px 0',
    border: border({
      color: colors.accentDarkness1,
      style: 'solid',
      width: sizes.border.xxs,
    }),
    color: '#fff',
    transitionDuration: '1s',
  },
});
