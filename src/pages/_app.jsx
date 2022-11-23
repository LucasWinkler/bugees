import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <div
      className={`${inter.variable} font-sans antialiased bg-dark-blueish-gray text-gray-300 text-base overflow-x-hidden`}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </div>
  );
}
