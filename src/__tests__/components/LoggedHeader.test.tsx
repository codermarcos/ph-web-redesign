import { RenderResult, render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import LoggedHeader from '@/components/LoggedHeader/LoggedHeader.component';

faker.seed(1);

const user = {
  name: faker.name.fullName(),
  profileImage: faker.image.avatar(),
};

describe(
  '[Component] -> components/LoggedHeader',
  () => {

    // eslint-disable-next-line init-declarations
    let wrapper: RenderResult;

    beforeEach(
      () => {

        wrapper = render(
          <LoggedHeader {...user} />
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
