import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({ data: 'ok' });
}
