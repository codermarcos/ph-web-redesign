import type { NextApiRequest, NextApiResponse } from 'next';

import cookies from '@/authentication/cookies';

export default function handler(_: NextApiRequest, res: NextApiResponse) {

  cookies.remove(res);

  res.redirect('/');

}
