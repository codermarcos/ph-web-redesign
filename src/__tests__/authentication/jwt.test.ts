import { faker } from '@faker-js/faker';

import jwtLib from 'jsonwebtoken';

import jwt, { AuthPayload } from '@/authentication/jwt';

jest.mock(
  'jsonwebtoken',
  () => ({
    sign: jest.fn(),
    verify: jest.fn(),
  })
);

describe(
  '[Function] -> authentication/jwt',
  () => {

    const { env } = process;

    beforeEach(() => {

      jest.resetModules();
      process.env = {
        ...env,
      };

    });

    afterEach(() => {

      process.env = env;

    });

    it(
      'should call jwt sign with correct params',
      () => {

        process.env.SECRET_2_LOCAL_TOKENS = faker.random.alphaNumeric(10);

        const token = faker.random.alphaNumeric(10);
        const access_token = faker.random.alphaNumeric(10);

        (jwtLib.sign as jest.Mock).mockReturnValue(token);

        jwt.sign({ access_token } as AuthPayload);

        expect(jwtLib.sign).toHaveBeenCalledWith(access_token,
          process.env.SECRET_2_LOCAL_TOKENS);

      }
    );


    it(
      'should call jwt verify with correct params',
      () => {

        process.env.SECRET_2_LOCAL_TOKENS = faker.random.alphaNumeric(10);

        const token = faker.random.alphaNumeric(10);
        const access_token = faker.random.alphaNumeric(10);

        (jwtLib.verify as jest.Mock).mockReturnValue(access_token);

        jwt.verify(token);

        expect(jwtLib.verify).toHaveBeenCalledWith(token,
          process.env.SECRET_2_LOCAL_TOKENS);

      }
    );

  }
);
