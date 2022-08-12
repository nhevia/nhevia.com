import { NextApiRequest, NextApiResponse } from 'next';
import { StackoverflowData } from 'types/items';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    'https://api.stackexchange.com/2.2/users/6402990?site=stackoverflow'
  );
  const { items } = await response.json();
  const { profile_image, reputation, link, badge_counts } = items[0];

  // rating ('top x') comes from a different URL
  const responseTop = await fetch(
    'https://stackoverflow.com/users/rank?userId=6402990'
  );
  const ratingText = (await responseTop.text())
    .trim()
    .replace(/(<([^>]+)>)/gi, '');

  const parsedData: StackoverflowData = {
    profile_image,
    reputation,
    link,
    rating: ratingText,
    badge_counts,
  };

  res.setHeader(
    'Cache-Control',
    'max-age=3600 s-maxage=3600, stale-while-revalidate'
  );
  res.status(200).json(parsedData);
}
