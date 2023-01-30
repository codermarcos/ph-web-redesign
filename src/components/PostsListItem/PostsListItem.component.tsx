import { memo } from 'react';

import {
  ListItem,
  ListItemGrid,
  ListItemImage,
  ListItemInformations,
  ListItemLink,
  UpVoteButton,
} from '@/components/PostsListItem/PostsListItem.styles';

export type ListItem = {
  id: string;
  name: string;
  tagline: string;
  votesCount: number;
  thumbnail: { url: string; };
}

export default memo(
  function PostListItem({ id, name, tagline, thumbnail, votesCount }: ListItem) {

    return (
      <ListItem key={id}>
        <ListItemLink href="">
          <ListItemGrid>
            <ListItemImage
              alt={`Image for ${name}`}
              height={96}
              src={thumbnail.url}
              width={96}
            />

            <ListItemInformations>
              <b>
                {name}
              </b>

              <p>
                {tagline}
              </p>
            </ListItemInformations>
          </ListItemGrid>
        </ListItemLink>

        <UpVoteButton type="button">
          {votesCount}
        </UpVoteButton>
      </ListItem>
    );

  }
);
