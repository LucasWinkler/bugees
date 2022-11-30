import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

import seo from 'data/seo';
import 'styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>{`${seo.title} | Bug Tracker`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div
        className={`${inter.variable} min-h-screen overflow-x-hidden bg-dark-blueish-gray font-sans text-base text-gray-300 antialiased`}>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </div>
    </>
  );
}

export default MyApp;
