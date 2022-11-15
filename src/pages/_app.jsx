import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

import '../styles/index.scss';

const inter = Inter({ subsets: ['latin-ext'] });

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

      <ThemeProvider>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
