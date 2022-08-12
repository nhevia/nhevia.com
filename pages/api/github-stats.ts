import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    'https://api.stackexchange.com/2.2/users/6402990?site=stackoverflow'
  );
  const { quota_remaining } = await response.json();
  console.log(response.headers);

  res.setHeader(
    'Cache-Control',
    'max-age=60 s-maxage=60, stale-while-revalidate'
  );
  res.status(200).json({ data: quota_remaining });
}
