import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';
import '../styles/globals.css';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}
