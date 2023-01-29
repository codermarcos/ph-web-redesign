import { faker } from '@faker-js/faker';

import auth from '@/authentication';

import authorizePages from '@/pages/authorize';

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

        authorizePages({} as any, { redirect: redirectSpy } as any);

        expect(redirectSpy).toHaveBeenCalledWith(redirectUri);

      }
    );

  }
);
