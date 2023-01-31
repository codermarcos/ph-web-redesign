import { RenderResult, render } from '@testing-library/react';
import { useRouter } from 'next/router';

import NavBar from '@/components/NavBar/NavBar.component';

jest.mock(
  'next/router',
  () => ({
    useRouter: jest.fn(),
  })
);

describe(
  '[Component] -> components/NavBar',
  () => {

    // eslint-disable-next-line init-declarations
    let wrapper: RenderResult;

    beforeEach(
      () => {

        (useRouter as jest.Mock).mockReturnValue({ asPath: '/' });

        wrapper = render(
          <NavBar />
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
