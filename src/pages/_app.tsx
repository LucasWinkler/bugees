import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

import { AppPropsWithLayout } from '@/types/page';
import seo from '@/data/seo';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <div className={`${inter.variable} font-sans`}>
      <Head>
        <title>{`${seo.title} | Bug Tracker`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </div>
  );
}

export default MyApp;
