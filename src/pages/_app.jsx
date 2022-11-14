import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import seo from '../util/Seo';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}
