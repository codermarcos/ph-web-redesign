import { JwtPayload, sign, verify } from 'jsonwebtoken';

export type AuthPayload = Record<'access_token' | 'token_type' | 'scope', string>
  & { created_at: number }

const jwt = {
  // eslint-disable-next-line camelcase
  sign({ access_token }: AuthPayload) {

    return sign(access_token, process.env.SECRET_2_LOCAL_TOKENS as string);

  },
  verify(token?: string) {

    let payload: false | string | JwtPayload = false;

    if (token)
      try {

        payload = verify(token, process.env.SECRET_2_LOCAL_TOKENS as string);

      } catch {

        console.error('can\'t decode token');

      }

    return payload;

  },
};

export default jwt;
