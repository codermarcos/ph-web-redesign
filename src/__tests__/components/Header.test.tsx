import { RenderResult, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { faker } from '@faker-js/faker';

import QUERY_VIEWER from '@/graphql/queries/Viewer.graphql';

import Header from '@/components/Header/Header.component';

faker.seed(1);

const user = {
  name: faker.name.fullName(),
  profilePhoto: faker.image.avatar(),
};

const mocks = [
  {
    request: {
      query: QUERY_VIEWER,
    },
    result: {
      data: {
        viewer: { user },
      },
    },
  },
];

describe(
  '[Component] -> components/Header',
  () => {

    // eslint-disable-next-line init-declarations
    let wrapper: RenderResult;

    beforeEach(
      () => {

        wrapper = render(
          <MockedProvider mocks={mocks}>
            <Header />
          </MockedProvider>
        );

      }
    );

    it(
      'should render correct header',
      () => {

        expect(wrapper.container).toMatchSnapshot();

      }
    );

  }
);
