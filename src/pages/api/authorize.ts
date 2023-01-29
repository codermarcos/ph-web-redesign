import type { NextApiRequest, NextApiResponse } from 'next';

import auth from '@/authentication';

export default function handler(_: NextApiRequest, res: NextApiResponse) {

  res.redirect(auth.code.getUri());

}
