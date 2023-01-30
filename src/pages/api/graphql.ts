/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-fetch';

import cookies from '@/authentication/cookies';
import jwt from '@/authentication/jwt';

import { accessTokenUri, clientId } from '@/authentication';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const cookie = cookies.retrive(req);
  let token = jwt.verify(cookie);

  if (typeof token !== 'string' || token.length === 0) {

    /*
     * Here i could just use this if the ph api follows the pattern
     * const payload = await auth.credentials.getToken();
     */
    const response = await fetch(
      accessTokenUri,
      {
        body: JSON.stringify({
          client_id: clientId,
          client_secret: process.env.PH_APP_API_SECRET as string,
          grant_type: 'client_credentials',
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
      }
    );
    const payload = await response.json();

    token = payload.access_token;

  }

  const response = await fetch(`${process.env.PH_API_HOST}v2/api/graphql`,
    {
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
        ...(
          typeof token === 'string' && token.length
            ? { Authorization: `Bearer ${token}` }
            : {}
        ),
      },
      method: 'post',
    });

  res.json(await response.json());

}

