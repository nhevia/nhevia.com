import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export default function useActivityQuery(key: string) {
  const queryClient = useQueryClient();

  const getActivity = async () => {
    const response = await fetch(
      'https://api.stackexchange.com/2.3/users/6402990?site=stackoverflow'
    );
    const data = await response.json();

    // TODO on dev it works but on prod it hits cors limitation (runs in client)
    // const responseTop = await fetch(
    //   'https://stackoverflow.com/users/rank?userId=6402990'
    // );

    // const ratingText = (await responseTop.text())
    //   .trim()
    //   .replace(/(<([^>]+)>)/gi, '');

    const ratingText = 'Top 2% this quarter';

    const userInfo = { ...data.items[0], rating: ratingText };

    return userInfo;
  };

  const { data, refetch } = useQuery(key, getActivity, {
    refetchOnWindowFocus: false,
    retry: 2,
    enabled: false,
  });

  useEffect(() => {
    // get persisted cache
    const offlineCache = JSON.parse(
      window?.localStorage?.getItem('REACT_QUERY_OFFLINE_CACHE') as string
    );

    if (!offlineCache) {
      // cache not found, (re)fetch with 'queryFn'
      refetch();
      return;
    }

    // offline cache is present
    const query = offlineCache.clientState.queries[0];
    if (!query) {
      // but refetch is query cant be found (> cache config time)
      refetch();
      return;
    }

    // configured cache time sometimes does not work? manual refetch
    if (offlineCache.timestamp + 1000 * 60 * 60 * 24 < Date.now()) {
      refetch();
      return;
    }

    // finally, it worked. Update query with found data
    queryClient.setQueryData(key, query.state.data);
  }, [queryClient, refetch, key]);

  return data;
}
