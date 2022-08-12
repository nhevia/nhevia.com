import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://api.github.com/users/nhevia/repos');
  const data = await response.json();

  res.setHeader(
    'Cache-Control',
    'max-age=3600 s-maxage=3600, stale-while-revalidate'
  );
  res.status(200).json(data);
}
