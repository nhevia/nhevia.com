import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export default function usePersistedQuery(key: string, url = `/api/${key}`) {
  const queryClient = useQueryClient();

  const getActivity = async () => {
    // if no URL param, get the key
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const { data, refetch } = useQuery(key, getActivity, {
    refetchOnWindowFocus: false,
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
