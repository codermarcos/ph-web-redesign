import type { NextApiRequest, NextApiResponse } from 'next';

import { CookieSerializeOptions, serialize } from 'cookie';

const AUTH_COOKIE_KEY = 'session';

const cookies = {

  remove(res: NextApiResponse): void {

    const cookieOptions: CookieSerializeOptions = { maxAge: -1 };

    const cookie = serialize(
      AUTH_COOKIE_KEY,
      '',
      cookieOptions,
    );

    res.setHeader('Set-Cookie',
      cookie);

  },

  retrive(req: NextApiRequest): string | undefined {

    return req.cookies[AUTH_COOKIE_KEY];

  },

  store(res: NextApiResponse, payload: string): void {

    const cookieOptions: CookieSerializeOptions = {
      httpOnly: true,
      path: '/',
      secure: true,
    };

    const cookie = serialize(
      AUTH_COOKIE_KEY,
      payload,
      cookieOptions,
    );

    res.setHeader('Set-Cookie', cookie);

  },
};

export default cookies;
