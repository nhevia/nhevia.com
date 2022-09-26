import { ThemeProvider } from 'context/theme';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
