import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localStoragePersistor = createWebStoragePersistor({
      storage: window.localStorage,
    });

    persistQueryClient({
      queryClient,
      persistor: localStoragePersistor,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
