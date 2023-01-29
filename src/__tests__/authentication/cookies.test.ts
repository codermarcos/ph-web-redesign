import { faker } from '@faker-js/faker';

import cookiesLib from 'cookie';

import cookies from '@/authentication/cookies';

jest.mock('cookie',
  () => ({
    serialize: jest.fn(),
  }));

describe(
  '[Function] -> authentication/cookies',
  () => {

    beforeEach(() => {

      jest.resetModules();

    });

    it(
      'should set cookie header serialized',
      () => {

        const setHeaderSpy = jest.fn();
        const token = faker.random.alphaNumeric(10);
        const serializedCookies = faker.random.alphaNumeric(10);

        (cookiesLib.serialize as jest.Mock).mockReturnValue(serializedCookies);

        cookies.store({
          setHeader: setHeaderSpy,
        } as any,
        token);

        expect(setHeaderSpy).toHaveBeenCalledWith('Set-Cookie',
          serializedCookies);

      }
    );

  }
);
