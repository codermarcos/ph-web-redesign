import { faker } from '@faker-js/faker';

import cookies from '@/authentication/cookies';

import logoutPages from '@/pages/api/logout';

jest.mock('@/authentication/cookies');

describe(
  '[Page] -> pages/logout',
  () => {

    it(
      'should clear cookies and redirect to home',
      () => {

        const res = {
          ...JSON.parse(faker.datatype.json()),
          redirect: jest.fn(),
        };

        logoutPages({} as any, res as any);

        expect(cookies.remove).toHaveBeenCalledWith(res);
        expect(res.redirect).toHaveBeenCalledWith('/');

      }
    );

  }
);
