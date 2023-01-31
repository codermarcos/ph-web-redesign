import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { List } from '@/components/PostsList/PostsList.styles';

import PostListItem, {
  ListItem,
} from '@/components/PostsListItem/PostsListItem.component';

type Props = {
  edges: Array<{ node: ListItem }>;
  onLoadMore: () => void;
}

function PostsList({ edges, onLoadMore }: Props) {

  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(
    () => {

      if (inView)
        onLoadMore();

    },
    [
      inView,
      onLoadMore,
    ]
  );

  return (
    <List data-test-id="post-list">
      {
        edges.map(
          ({ node }) => (
            <PostListItem
              key={node.id}
              {...node}
            />
          )
        )
      }

      <li ref={ref}>
        loading more...
      </li>
    </List>
  );

}

export default PostsList;
