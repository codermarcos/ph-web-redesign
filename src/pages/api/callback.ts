/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';

import { accessTokenUri, clientId, redirectUri } from '@/authentication';
import cookies from '@/authentication/cookies';
import jwt from '@/authentication/jwt';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const url = typeof req.url === 'object'
    ? req.url
    : new URL(req.url as string, `http://${req.headers.host}`);

  /*
   * Here i could just use this if the ph api follows the pattern
   * const payload = await auth.code.getToken(url);
   *
   */
  const response = await fetch(accessTokenUri,
    {
      body: JSON.stringify({
        client_id: clientId,
        client_secret: process.env.PH_APP_API_SECRET as string,
        code: url.searchParams.get('code'),
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    });
  const payload = await response.json();
  //

  const token = jwt.sign(payload);

  cookies.store(res, token);

  res.redirect('/');

}
