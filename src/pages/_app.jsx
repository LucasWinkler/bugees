import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head.js';

import theme from '../styles/theme.js';
import Globals from '../styles/globals';
import Seo from '../util/SEO.js';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>${Seo.title}</title>
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Globals />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
