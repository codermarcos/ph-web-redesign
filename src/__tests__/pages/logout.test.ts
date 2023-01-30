import type { NextApiRequest, NextApiResponse } from 'next';
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

        logoutPages(
          {} as unknown as NextApiRequest,
          res as unknown as NextApiResponse,
        );

        expect(cookies.remove).toHaveBeenCalledWith(res);
        expect(res.redirect).toHaveBeenCalledWith('/');

      }
    );

  }
);
