import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-fetch';

import cookies from '@/authentication/cookies';
import jwt from '@/authentication/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const cookie = cookies.retrive(req);
  const token = jwt.verify(cookie);

  if (typeof token === 'string' && token.length === 0)
    res.send('implement client credentials using lambda cron');

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

