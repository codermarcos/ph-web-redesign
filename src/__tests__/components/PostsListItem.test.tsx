import { RenderResult, render } from '@testing-library/react';

import { useInView } from 'react-intersection-observer';

import { faker } from '@faker-js/faker';

import type { ListItem } from '@/components/PostsListItem/PostsListItem.component';

import PostsList from '@/components/PostsList/PostsList.component';

jest.mock(
  'react-intersection-observer',
  () => ({
    useInView: jest.fn(),
  })
);

faker.seed(1);

const mockPosts: Array<{ node: ListItem }> = [
  {
    node: {
      id: faker.random.alphaNumeric(5),
      name: faker.name.fullName(),
      tagline: faker.lorem.words(8),
      thumbnail: {
        url: faker.image.abstract(),
      },
      votesCount: parseInt(faker.random.numeric(2), 10),
    },
  },
];

describe(
  '[Component] -> components/PostsList',
  () => {

    // eslint-disable-next-line init-declarations
    let wrapper: RenderResult;
    // eslint-disable-next-line init-declarations
    let onLoadSpy: jest.Mock;

    beforeEach(
      () => {

        onLoadSpy = jest.fn();

        (useInView as jest.Mock).mockReturnValue({});

        wrapper = render(
          <PostsList
            edges={mockPosts}
            onLoadMore={onLoadSpy}
          />
        );

      }
    );

    it(
      'should render correct link',
      () => {

        expect(wrapper.container).toMatchSnapshot();

      }
    );

  }
);

