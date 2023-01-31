/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';

import cookies from '@/authentication/cookies';
import jwt from '@/authentication/jwt';

import { accessTokenUri, clientId } from '@/authentication';
import requestPhApi from '@/services/ph-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const cookie = cookies.retrive(req);
  let token = jwt.verify(cookie);


  if (typeof token !== 'string' || token.length === 0) {

    /*
     * Here i could just use this if the ph api follows the pattern
     * const payload = await auth.credentials.getToken();
     */
    const response = await requestPhApi(
      accessTokenUri,
      {
        client_id: clientId,
        client_secret: process.env.PH_APP_API_SECRET as string,
        grant_type: 'client_credentials',
      }
    );
    const payload = await response.json();

    token = payload.access_token;

  }

  const response = await requestPhApi(
    `${process.env.PH_API_HOST}v2/api/graphql`,
    req.body,
    typeof token === 'string' && token.length
      ? `Bearer ${token}`
      : undefined
  );

  if (parseInt(response.headers.get('x-rate-limit-remaining'), 10) < 0)
    cookies.remove(res);

  res.json(await response.json());

}

