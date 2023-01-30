import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

import auth from '@/authentication';

import authorizePages from '@/pages/api/authorize';

jest.mock('@/authentication');

describe(
  '[Page] -> pages/authorize',
  () => {

    it(
      'should redirect to auth',
      () => {

        const redirectSpy = jest.fn();
        const redirectUri = faker.internet.url();

        (auth.code.getUri as jest.Mock).mockReturnValue(redirectUri);

        authorizePages(
          {} as unknown as NextApiRequest,
          { redirect: redirectSpy } as unknown as NextApiResponse,
        );

        expect(redirectSpy).toHaveBeenCalledWith(redirectUri);

      }
    );

  }
);
